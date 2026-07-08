# AI Engineer World's Fair 2026 Unconference Buckets

Prepared for 65labs / Code with AI Singapore. Source snapshot: July 8, 2026.

## Working Takeaway

The main shift across AI Engineer World's Fair 2026 was not "AI writes code now." It was: teams are learning to operate agents as production systems. The recurring stack was loops, harnesses, memory, verifiers, secure tool access, and agent-native interfaces.

Use these five buckets for a mixed crowd. Each bucket has enough technical depth for builders, but each also has a plain-language discussion hook for founders, operators, and people who are new to the space.

## Method And Source Boundary

Primary sources:

- June 30 livestream: "WF2026: Software Factories & Keynotes ft. Microsoft, OpenAI, OpenClaw, Z.ai (GLM), MiniMax, HF"
- July 1 livestream: "WF2026: Autoresearch & Keynotes ft. Anthropic, Google DeepMind, Amazon AGI, Sonar, Arena, Recursive"
- July 2 livestream: "WF26: Harness Engineering & Startup Battlefield ft. Garry Tan, Mike Krieger, t3dotgg, DSPy"

Processing:

- Used `summarize.sh` CLI in extract mode to pull the public YouTube caption tracks from the three livestreams.
- Total extracted caption corpus: about 263k words across 26.5 hours of main-stage video.
- Used YouTube VTT captions for timestamp orientation where useful.
- Used the official AI Engineer World's Fair `sessions.json`, `speakers.json`, and `llms-full.md` as agenda scaffolding.
- Used the official "AIEWF 2026 from Around the World" YouTube playlist as secondary coverage for public online-track talks.

Limit:

- The three livestreams are the only full long-form track recordings found in this pass. Other public online-track videos were used as supporting signals, but the bucket notes are grounded primarily in the livestreams and official agenda text.

## Bucket 1: Software Factories And The Agentic SDLC

Core idea:

AI coding is moving from "assistant writes a function" to "agent runs a loop through planning, coding, review, test, deployment, and learning." The debate is whether this becomes a literal software factory, an orchestra of agents, or a new engineering operating model.

Specific discussions:

- swyx framed AI engineering as moving up and down loops: chat, tools, goals, automations, cron jobs, and higher-level "loopcraft."
- Jason Liu's Codex session and the Codex-related workshop material pointed at shared team workflows: scoping tasks, supervising work, coordinating subagents, and using plugins/MCPs rather than treating an agent as a one-off chat.
- Tereza Tizkova's "Rise of the Software Factory" discussion treated agents as employees only if the infrastructure exists: persistent identity, memory, scoped permissions, audit trail, escalation path, and stable computer use.
- Charlie Holtz's "Orchestras, not Factories" supplied the useful counterpoint: the goal is not only industrial automation, but coordination among different agents, tools, and people.
- Daksh Gupta's Greptile talk made the bug surface concrete by analyzing over 1M AI-generated PRs and focusing on different classes of failures, not generic "AI slop."
- Dex Horthy's closing June 30 keynote pushed the warning: harnesses matter, but software factories still fail when the human organization cannot define goals, gates, ownership, and accountability.
- Lee Robinson's "Recursive Model Improvement" tied factories to model feedback loops: better internal traces and product data can improve the models powering the factory itself.

Good unconference prompts:

- What would a "software factory" actually own in your team: tickets, PRs, tests, releases, or incident response?
- Which parts of engineering should stay human-gated even if agents can execute them?
- If agents are employees, who manages their permissions, performance review, and incident postmortems?

Session anchors:

- June 30 Main Stage: swyx, "The Highest Loop"
- June 30 Main Stage: Jason Liu, "Getting the most out of Codex"
- June 30 Main Stage: Tereza Tizkova, "Rise of the Software Factory"
- June 30 Main Stage: Charlie Holtz, "Orchestras, not Factories"
- June 30 Main Stage: Daksh Gupta, "What we learned by analyzing 1M AI-generated PRs"
- June 30 Main Stage: Dex Horthy, "Harness Engineering is not Enough: Why Software Factories Fail"
- June 30 Main Stage: Lee Robinson, "Recursive Model Improvement"
- Online track: Angie Jones, "Build Systems, Not Code"; Raymond Weitekamp, "Recursive Coding Agents"; Angie Jones, "Building an Autonomous Engineering Org"

## Bucket 2: Harnesses, Verifiers, And Trustworthy Agents

Core idea:

The hard part is no longer only model capability. It is building the cage around the model: evaluation, observability, memory boundaries, tool contracts, sandboxing, auth, rollback, and review. "Harness engineering" is becoming the production discipline for agents.

Specific discussions:

- Tariq Shaukat's verifier keynote argued that as agents become more capable, failures can become more convincing; therefore verification is a core discipline, not an afterthought.
- Sonar's AC/DC framing - guide, verify, solve - appeared as a practical pattern for agentic development: guide agents before generation, verify continuously, then use agents to fix issues.
- July 2 Harness Engineering sessions repeatedly described the same production cage: session isolation, context management, memory persistence, sandboxed execution, observability, retries, timeouts, pause/resume, and kill switches.
- Mike Chambers framed every agent as a while loop whose dependable behavior comes from the harness around it.
- Sarah Sanders' PostHog Bash-agent talk made security visceral: running shell commands is useful, but "scan then trust" is weak without a dedicated security service, kill switches, and adversarial testing.
- The Microsoft computer-use verifier talk surfaced a crucial eval gap: browser/computer-use tasks are too open-ended for simple deterministic checks, and weak LLM judges can train agents to become more confidently wrong.
- "Tokens Should Have Jobs" reframed context as a budget with purpose: every token should earn its place through retrieval, state, memory, tool result, instruction, or proof.

Good unconference prompts:

- What is the minimum harness before an agent is allowed near production data?
- What failures should be prevented by deterministic checks, and what requires human review?
- How do we stop agent tooling from creating review debt or security debt at machine speed?

Session anchors:

- July 1 Main Stage: Tariq Shaukat, "In the Land of AI Agents, the Verifiers Are King"
- July 2 Main Stage: Barr Yaron, "The 2026 State of AI Engineering"
- July 2 Main Stage: Mike Krieger and swyx, "How Anthropic Builds: Lessons from Labs"
- July 2 Main Stage: Katelyn Lesse and Angela Jiang, "Tokens Should Have Jobs"
- July 2 Main Stage: Mike Chambers, "Harness Engineering: Building the Production Cage for Powerful Domain Agents"
- July 2 Main Stage: Sarah Sanders, "We let an AI agent execute Bash and lived to talk about it"
- July 2 Main Stage: Kay Malcolm, "No Memory, No Harness: Why the Database Is the Last Line of Defense"
- Online track: Nishant Gupta, "Production Evals For Agentic AI Systems"; Tisha Chawla and Susheem Koul, "Your Agent Failed in Prod. Good Luck Reproducing It"; Nishant Gupta, "Building Deterministic Infrastructure for Non-Deterministic AI Agents"

## Bucket 3: Coding Agents Become Knowledge-Work Agents

Core idea:

The same harness patterns used for coding are spreading into research, analytics, operations, and enterprise workflows. "Autoresearch" was the clearest main-stage example: agents that read, experiment, evaluate, summarize, and try again.

Specific discussions:

- July 1 was the autoresearch day: talks from Fable, Google DeepMind, You.com, W&B, OpenAI hiring challenge participants, and kernel/autoresearch teams all pointed at agents doing multi-step knowledge work.
- Richard Socher's automated research framing and Tim Sweeney's W&B loop both emphasized agents that inspect experiments, propose hypotheses, launch jobs, read traces, and decide next steps.
- Lakshya Agrawal's reflective optimization talk pushed a broader claim: language trajectories can be used as a learning medium, improving prompts, context, harnesses, and sometimes model behavior with fewer rollouts than brute-force RL.
- The OpenAI hiring challenge discussion made "agent as contributor" concrete: the agent did not just answer questions; it contributed enough to rank highly in a difficult challenge.
- Dense retrieval, agentic search, and context-engineering sessions treated retrieval as an active reasoning substrate rather than a static vector database.
- Several online talks extended this beyond research: production agents for government services, document parsing workflows, ETL remediation, compliance/fraud correlation, and AI system design.

Good unconference prompts:

- What knowledge-work loop in your organization is repetitive enough for an agent, but high-stakes enough to require verification?
- When does an agent need to run experiments, not just answer questions?
- Which roles change first when agents can research, analyze, and produce working artifacts?

Session anchors:

- July 1 Main Stage: Richard Socher, "First Steps Toward Automated AI Research"
- July 1 Main Stage: Han Xiao, "Autoresearch for Dense Retrieval"
- July 1 Main Stage: Tim Sweeney, "Closing the Loop: An Autonomous AI Research Agent"
- July 1 Main Stage: Zhengyao Jiang, "An AI Agent Became the #1 Contributor in OpenAI's Hiring Challenge"
- July 1 Main Stage: Lakshya Agrawal, "Self-Improvement of Context, Harness, and Model Weights through Reflective Optimization"
- July 1 Main Stage: Tejas Bhakta, "Autoresearch for Kernels"
- July 1 Main Stage: Erina Karati and Arunachalam Manikandan, "Autoresearch in a Multi-Agent AI Village"
- Online track: Gabe De Mesa, "Agents in Production: How OpenGov Built and Scaled OG Assist"; Cedric Clyburn, "Structuring the Unstructured"; Anna Marie Benzon, "Using RL-based Agent to Detect and Remediate ETL Pipeline Failures"

## Bucket 4: Memory, Context, And Continual Learning

Core idea:

Agents need more than a bigger context window. They need memory systems that decide what to keep, what to retrieve, what to compress, what to promote to shared knowledge, and what to forget.

Specific discussions:

- Stefania Druga's "Memory Harnesses for Long-Running Research Agents" gave the cleanest main-stage pattern: long-running research agents fail through context rot, contradiction, redoing work, and drift. The suggested fixes included tiered memory, recall-first compaction, sub-agent isolation, and memory beyond a simple vector database.
- Kay Malcolm's "No Memory, No Harness" argued that the database becomes the last line of defense when the model is probabilistic and forgetful.
- July 2 and online sessions repeatedly separated memory from learning: storing facts is not the same as improving future behavior.
- "Agent Memory Is a Solved Problem. Agent Learning Is Not" introduced the missing handoff layer: supervised promotion from private agent learning into shared organizational knowledge.
- Video memory and multimodal memory talks expanded the issue beyond text. Durable representations, entity continuity, evidence, and temporal state become essential when the source material is audio/video or real-world interaction.
- Local code indexes and ECAG-style cache-augmented context pointed at a pragmatic path: keep the agent close to relevant structured context instead of stuffing everything into the model window.

Good unconference prompts:

- What should an agent remember privately, what should be promoted to team knowledge, and what should never be stored?
- Is your current "memory" just retrieval, or does it actually change future behavior?
- Who reviews the memories that agents create about customers, codebases, and decisions?

Session anchors:

- July 1 Main Stage: Stefania Druga, "Memory Harnesses for Long-Running Research Agents"
- July 2 Main Stage: Kay Malcolm, "No Memory, No Harness: Why the Database Is the Last Line of Defense"
- July 2 Expo/Main conference: Karthik Ranganathan and Heather Downing, "Agent Memory Is a Solved Problem. Agent Learning Is Not"
- July 2 Track 5: James Le, "Video Has No Memory. Here's How We Built One"
- Online track: Paul Iusztin and Louis-Francois Bouchard, "Turn 10,994 Notes Into Memory"; Victor Savkin, "A Genius With Amnesia"; Rajkumar Sakthivel, "We Cut 94% of AI Coding Tokens With a Local Code Index"; Soheil Feizi, "Continual Learning for AI Agents"

## Bucket 5: Agent-Native Interfaces, Computer Use, And The New Web

Core idea:

Agents are becoming users of software. That changes interfaces: websites, APIs, auth flows, browsers, payments, and documentation all need to be operable by agents while staying understandable and controllable by humans.

Specific discussions:

- The Computer Use track and browser-agent talks emphasized that better models alone are not enough. Agents need better state, better visual grounding, better verifiers, and clearer operating surfaces.
- "Rebuilding the web for agents" argued that the web is shifting from human-first UI toward mixed human/agent operability. The important question becomes whether agents can discover, authenticate, act, and hand back to humans safely.
- Nikita Kothari's MCP/CLI/Skills session framed a tooling stack: MCPs for portable service connectors, CLIs for composable developer workflows, and skills for teaching agents how to use tools without overloading context.
- Michael Grinich's auth.md session made agent authentication concrete: legacy signup flows were built for humans, not autonomous software acting on a user's behalf.
- Agentic commerce sessions added the economic layer: wallets, x402-style payment-aware HTTP, agent payment mandates, and protocol stacks for product discovery, checkout, and settlement.
- Voice and multimodal sessions pointed at a related interface shift: agents will not only type and call APIs; they will speak, see, click, watch, pay, and ask for human approval.

Good unconference prompts:

- If your next customer is an agent, what does your product need besides a nicer UI?
- What should be headless, what should remain visible, and where must the human take back control?
- How should agents authenticate, pay, and leave receipts when acting on behalf of a person or company?

Session anchors:

- June 30 Track 3: Liad Yosef, "Rebuilding the web for agents"
- July 2 Main Stage: Nikita Kothari, "MCPs, CLIs, and Skills: Choosing the Right Tooling Layer for Agentic Development"
- July 2 Main Stage: Michael Grinich, "Auth for Agents: Unblock Autonomous AI with auth.md"
- July 2 Track 2: Harshal Bhangale, "Why Your AI Agent Needs a Wallet"
- July 2 Track 2: Ahnaf Prio, "The Agentic Commerce Stack"
- July 2 Expo: Miguel Gonzalez Fernandez and Corby Rosset, "The Art of Building Verifiers for Computer Use Agents"
- Online track: Kushan Raj, "Browser Agents Don't Need Better Models. They Need Better Eyes"; Pietro Zullo, "MCP Apps"; Lech Kalinowski, "OpenClaw in Your Hand"

## Suggested 60-Minute Flow

0-5 min: Set the frame.

- "The question is not whether AI can generate text or code. The question is what systems, teams, and interfaces make agents useful without losing control."

5-15 min: Software factories.

- Prompt: "What part of shipping work should agents own first?"

15-25 min: Harnesses and verifiers.

- Prompt: "What would make you trust an agent in production?"

25-35 min: Knowledge-work agents and autoresearch.

- Prompt: "What non-coding workflow in your org is ready for an agent loop?"

35-45 min: Memory and continual learning.

- Prompt: "What should agents remember, and who gets to approve it?"

45-55 min: Agent-native interfaces and computer use.

- Prompt: "What happens when the software user is an agent, not a human?"

55-60 min: Pick unconference breakouts.

- Suggested breakout titles:
  - "Software factory: real operating model or hype word?"
  - "Harness checklist for production agents"
  - "Memory that does not become surveillance"
  - "Browser agents and the agent-ready web"
  - "Agents beyond coding: research, ops, GTM, finance"

## Source Links

- Main stage June 30: https://www.youtube.com/watch?v=htM02KMNZnk
- Main stage July 1: https://www.youtube.com/watch?v=4sX_He5c4sI
- Main stage July 2: https://www.youtube.com/watch?v=I2cbIws9j10
- Official AI Engineer World's Fair 2026 page: https://www.ai.engineer/worldsfair/2026
- Official AI Engineer World's Fair 2026 llms.md: https://www.ai.engineer/worldsfair/2026/llms.md
- Official sessions JSON: https://www.ai.engineer/worldsfair/2026/sessions.json
- Official online-track playlist: https://www.youtube.com/playlist?list=PLcfpQ4tk2k0V1LNigteMgExP1rb4Hy8wn
- summarize.sh CLI: https://summarize.sh/
