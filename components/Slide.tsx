import type { ReactNode } from "react";

export type SlideDef = {
  id: string;
  kicker?: string;
  holding?: boolean;
  note?: ReactNode;
  content: ReactNode;
};

export function Kicker({ children }: { children: ReactNode }) {
  return <div className="kicker">{children}</div>;
}

export function H1({ children }: { children: ReactNode }) {
  return <h1 className="h1">{children}</h1>;
}

export function H2({ children }: { children: ReactNode }) {
  return <h2 className="h2">{children}</h2>;
}

export function Sub({ children }: { children: ReactNode }) {
  return <p className="sub">{children}</p>;
}

export function Card({
  title,
  children,
  accent = false
}: {
  title?: ReactNode;
  children: ReactNode;
  accent?: boolean;
}) {
  return (
    <div className={accent ? "card accent-card" : "card"}>
      {title ? <div className="card-title">{title}</div> : null}
      <div className="card-body">{children}</div>
    </div>
  );
}

export function Mono({ children }: { children: ReactNode }) {
  return <code className="mono">{children}</code>;
}
