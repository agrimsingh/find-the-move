type DeckMessage = {
  type: "index";
  index: number;
  sourceId: string;
};

type Env = {
  DECK_ROOM: DurableObjectNamespace;
};

function parseMessage(raw: string): DeckMessage | null {
  try {
    const data = JSON.parse(raw) as Partial<DeckMessage>;
    if (data.type !== "index") return null;
    if (typeof data.index !== "number" || !Number.isFinite(data.index)) return null;
    if (typeof data.sourceId !== "string" || data.sourceId.length === 0) return null;
    return { type: "index", index: Math.floor(data.index), sourceId: data.sourceId };
  } catch {
    return null;
  }
}

export class DeckRoom {
  private index = 0;
  private sessions = new Set<WebSocket>();

  constructor(
    private readonly state: DurableObjectState,
    _env: Env
  ) {
    this.state.getWebSockets().forEach((socket) => {
      this.sessions.add(socket);
      const attachment = socket.deserializeAttachment() as { index?: number } | null;
      if (typeof attachment?.index === "number") {
        this.index = attachment.index;
      }
    });
  }

  async fetch(request: Request): Promise<Response> {
    if (request.headers.get("Upgrade") !== "websocket") {
      return new Response("aiewf deck sync", { status: 200 });
    }

    const pair = new WebSocketPair();
    const client = pair[0];
    const server = pair[1];

    this.state.acceptWebSocket(server);
    this.sessions.add(server);
    server.serializeAttachment({ index: this.index });
    server.send(
      JSON.stringify({
        type: "index",
        index: this.index,
        sourceId: "server"
      } satisfies DeckMessage)
    );

    return new Response(null, { status: 101, webSocket: client });
  }

  webSocketMessage(socket: WebSocket, message: string | ArrayBuffer) {
    if (typeof message !== "string") return;
    const data = parseMessage(message);
    if (!data) return;

    // Last controller write wins. No coalescing / echo storms.
    if (data.index === this.index) return;

    this.index = Math.max(0, data.index);
    socket.serializeAttachment({ index: this.index });

    for (const session of this.sessions) {
      if (session === socket || session.readyState !== WebSocket.OPEN) continue;
      try {
        session.send(JSON.stringify(data));
      } catch {
        this.sessions.delete(session);
      }
    }
  }

  webSocketClose(socket: WebSocket) {
    this.sessions.delete(socket);
  }

  webSocketError(socket: WebSocket) {
    this.sessions.delete(socket);
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const room = url.searchParams.get("room")?.trim() || "talk";
    const id = env.DECK_ROOM.idFromName(room);
    const stub = env.DECK_ROOM.get(id);
    return stub.fetch(request);
  }
} satisfies ExportedHandler<Env>;
