# Speaker notes v6 — full spoken prose + humanizer

## title

I did not come back from San Francisco thinking agents are magic. I came back thinking we are stuck in the messy middle. We are shipping agents, supervising them, deciding what they are allowed to remember, and cleaning up when one goes wrong at three in the morning.

A year ago the interesting demo was overnight coding loops. Those worked best on greenfield projects. They got you about ninety percent of the way, and a human cleaned up the last bit. That felt cute more than operational. This year the interesting part was the hangover. Reviewers are drowning. More pull requests merge without real review. Agents have shell access near production systems. Once a model can produce something useful, the bottleneck is no longer the model. It is the system around it.

People use different labels for that system. Software factories. Harnesses. Memory policy. Browser agents. Underneath the labels it is the same problem. Agents are leaving the demo phase. Operations is the hard part.

## frame

I cut the week into three tracks on purpose. Each one is a design decision, not a product category.

The first track is loops. The question is which recurring outcome an agent owns. A full loop usually goes from a ticket or signal, into a plan, into edits, into proof, into a lesson the team can reuse. Then ask who still owns the consequence after typing got delegated. The bad version of this track is staring at generated diffs and calling that adoption. The good version is naming the loop and naming the human gate.

The second track is harnesses. That is the cage around a worker that is not deterministic. The cage includes tools, permissions, state, evaluations, logs, retries, approvals, sandboxes, timeouts, and kill switches. Mentally remove the model. Whatever remains is the product. The bad version is a prompt wrapper. The good version is a run you can bound, observe, and stop.

The third track is memory. That means what survives after a run ends, and under whose authority. An agent can keep about three books open at once and search them brilliantly. Your company is a warehouse of history. The difference between genius and goldfish is who decides which three books stay on the desk. That is policy work, not a logo for a vector database.

I folded autoresearch and computer use into this frame as surfaces, not extra themes. They hit the same cage. The blast radius changes. How easy it is to check whether the work is done also changes. The control problem does not.

Builders hear system design. Founders hear liability. Operators hear approvals and data boundaries. Same slide, different doors in.

## three-questions

These three questions are the point of the night. If a table can answer them for one concrete agent, they have done the work. Everything else is ammunition for better answers.

What outcome loop should an agent own. Not "we should use agents somewhere." One loop you would trust with a real ticket tomorrow morning.

What cage makes that loop tolerable. That means access bounds, evidence before anyone calls the work done, human gates where it matters, and a mechanical way to stop the run. Saying "we use evaluations" is not a cage. Revoking credentials and killing the session is.

What survives the run, and under whose authority. Private continuity for the same task is fine. Shared truth without review is how wrong memories become company religion.

## sdlc-thesis

Stop spending your attention optimizing the generated diff. Spend it optimizing the loop around the work.

A useful software factory is not a chat box that writes functions. It owns a whole outcome loop. Signals come in as tickets, bugs, incidents, or broken metrics. Something decides what matters. Something acts. Something proves the result is acceptable. Something keeps the lesson so the next run starts smarter. Writing code is the easy slice of that loop. Most engineering time was never typing. The real job is triage, validation, and learning that still exists after the shift ends.

Here is a concrete picture. A long agent mission can run for sixteen hours. Nearly half of that wall clock can be validation, not generation. That should kill the fantasy that agents mostly generate. They mostly get checked. When they do not get checked, they ship garbage that sounds confident. Mental models that start with generation miss where the time and risk actually go.

Think of loop maturity as a ladder. First you chat. Then you give tools. Then you run goal driven work. Then you set up recurring automation. Climb the ladder when you want leverage. Climb back down when things get flaky. Jumping too high too soon gives you unreliable autonomy. Staying too low forever gives you zero leverage with a fancy nameplate.

There is an organizational consequence you should expect. Throughput goes up. Review load goes up with it. Release risk does not vanish. It moves sideways into places people do not always watch. And someone is still on the hook when it breaks. That last part is why this track exists.

## sdlc-dialectic

Factory and orchestra are not rival brands. They are different languages for different fears.

The factory language is about throughput. Own the loop end to end. Signals come in. Work gets prioritized. Something acts. Something proves the result. The lesson gets kept. The unit of success is completed outcomes per week behind a real gate. The good factory story is a mission that keeps running and treats validation as first class work. The bad factory story is the old feature factory with better GPUs. Volume rises while understanding falls. The diffs get prettier while ownership gets thinner.

The orchestra language is about craft and coordination. A human stays at the baton. Agents are sections you route work to, not a plant you leave running with the lights off. You zoom out for the whole piece. You zoom in when one section is messy. Success is software that still feels owned and made, not just emitted. The fear underneath this language is becoming a button pushing line manager while the product gets impersonal and nobody can explain it.

Use a simple chooser in the room. If the bottleneck is repetitive work with clear done criteria, factory language helps. If the bottleneck is taste, architecture, or who is accountable when it breaks, orchestra language helps.

There is a practical merge both camps already use, whether they admit the metaphor or not. Create slot free zones. Parts of the system such as migrations, authentication, billing, and personal data stay behind enforced human review. One shop rewrote their app more than once after getting sloppy about which zones never went lights off. Fighting about metaphors is cheaper than that rewrite.

The shared failure mode is throughput without understanding. If the team cannot own the change, more volume is not progress.

## sdlc-boundary

Think about the boundary as two loops with different owners.

The inner loop is the typing machine. Inspect the repository. Edit. Test. Retry. Summarize. Agents should crush this. If humans still spend most of their hours here after you claim you adopted agents, you mostly bought autocomplete with extra steps.

The outer loop is the judgment machine. Is this worth doing. What proof is enough. Which tradeoff are we accepting. Who is on the hook if it breaks. Humans keep this. Delegated typing is not delegated ownership.

A working pattern is manage the manager. Scope a mission. Leave. Get back an evidence packet instead of twenty chat turns. The packet should include the issue, the plan, the diff, the tests, the logs, and maybe a running build. Watching every token on frontier models is mostly theater. Review shifts toward intent, blast radius, and who owns the incident.

Scale makes this sharper. The share of pull requests attributed to AI jumped hard in a single year. At high throughput, reading every line is already fantasy. Saying agent work has the same revert rate as human work lies a little. Agents fail differently. Some bug classes spike. Others drop. SQL injection came back because language models are easy to confuse about code and text. Your gates need to know failure shape, not just merge rate.

One narrow loop your teammates already understand beats a three month factory project. Check whether it saves review time or just manufactures prettier homework.

## sdlc-how

Design the loop before you shop for an agent. There are four decisions, and the order matters.

Frame the desired end state before files move. Agree on the problem, the contracts, and the key types. Half an hour of alignment can beat hours of review thrash on hard changes. Small chores can skip that huddle. Hard changes earn it. A bad frame is "make it better" and hoping the diff teaches you what you meant.

Constrain the surface area. Decide which files, tools, application programming interfaces, data, and time budget are in bounds. Enforce those bounds in hooks and sandboxes, not in vibes. Slot free zones apply here too. Write the validation contract before workers start so "done" is not invented after the fact. A bad constrain step is a soft allow list the model can talk its way around.

Prove the work with evidence that moves it forward. Green tests are not enough by themselves. Ask whether the change violated the user contract, whether it made future violations more likely, and whether it did what the author meant. For user interface work, add an in arena click through in a sandbox, not only a types pass. Bad proof is green continuous integration against the wrong oracle.

Reuse what deserves to survive. That can be a rule, an evaluation, a memory, a fixture, a checklist, or nothing. Chat history is not a learning layer. Bad reuse is every scrape becoming team truth.

If you cannot define these four decisions, you are not ready for a model comparison spreadsheet.

## sdlc-metrics

Measure the loop, not the keynote demo. Diff count will flatter you into a mess.

Did the agent produce a useful plan before it started editing, or did it start spraying changes.

Did the pull request clear a human gate, or did it open noise labeled as progress.

Did humans spend less time because of the agent, or more time unsticking prettier homework.

Did faster output raise downstream defect risk.

Did one request stay local, or did edits spray across the system.

Did the agent ask clarifying questions before it guessed.

Maintainability lag is the dodge most teams make. Models get rewarded for tests that pass right now. Architecture decay shows up months later. Binary benchmark rewards do not punish shotgun surgery. You can ship with the lights off for a quarter, then hit an incident and climb back into code people stopped reading. That is miserable and predictable.

Since the coding assistant wave, teams keep seeing review quality drop, unreviewed merges rise, and incidents rise, while somebody still says code is free.

Fight about which of these six measurements would catch decay in your organization first. That is the useful argument.

## sdlc-tension

Separate raising the floor from owning the ceiling.

Harnesses, reviewers, and loops raise the floor. You get fewer dumb crashes, more runs you can replay, and fewer accidents from open shells. They do not invent a training signal the model never got. If the model knew what good code looked like, it would write it. Review bots catch mess. They do not install taste that the reward function never rewarded.

Labs that train a model against the harness they ship get a reliability edge. Third party cages without that closed loop stay on the back foot. Strategies that split work across an executor, an advisor, and a grader still do not decide what the team meant to build or who is on call at two in the morning.

Volume plus review debt is speed theater. Generated work scales faster than a team can understand, verify, and own.

Under every shiny factory pitch, keep three questions. Which gate should agents never bypass. What does an acceptable agent pull request prove. Who owns the incident when typing was delegated.

## sdlc-breakout

Force one concrete loop. A bug report that becomes a pull request. Customer feedback that becomes a specification and a test. A failing integration that becomes a drafted fix. A deprecated application programming interface migration across a repository. Not metaphysics about the future of agents.

What I want back from the table is simple. The loop they would actually delegate. The gate they refuse to remove. One metric that includes review quality or change locality. Fill the rails from input through metric like a design brief, not a theme discussion.

If the table stalls, ask them to name a slot free zone such as the migrations file, authentication, or billing. Ask them to describe the evidence packet they would accept at merge time. Ask them to name the agent specific failure they fear, such as injection fingerprints, query spray, or authentication bypass. Generic talk about slop does not count.

If they float away into abstractions, ask this. You stopped reading the code for three months. What incident forces you back in.

## harness-thesis

The model is not the product. The controlled run is.

Mentally strip the model out of an agent. Everything left is the harness. That means tools, permissions, state, evaluations, logs, retries, approvals, sandboxes, timeouts, and kill switches. For anything you ship at scale, that is a vehicle with brakes and a crash log. A prompt wrapper is not a harness.

As models get better, failures get sneakier. You get a plausible plan, a coherent answer, and a wrong action. The enterprise question becomes how you know the work is true, not whether the answer sounds right. Guide before generation. Verify inside the loop. Then fix. Verification is part of the run, not cleanup next week.

Here is a gut check. A command running agent is malware until bash is denied by default, secrets are vaulted, and a stop exists that does not require an argument in Slack. Domain agents look powerful because of the cage around them.

The counterweight is important. A great cage does not save you if nobody owns maintainability. The harness raises the floor. The organization still owns the ceiling.

## harness-how

There are five jobs in a harness. Score maturity by the weakest job, not by the prettiest demo.

Contract means defining what done looks like before work starts. What schemas, tools, outputs, and acceptance criteria must be true. An orchestrator writes the bar. Workers execute. Validators judge code they did not write. A bad contract invents "looks good" after the fact. A good contract loads guide context up front so the agent stops burning tokens discovering the walls. Real stacks have cut about a third of spend with better guidance alone.

Execute means where the agent acts and with what authority. Sandbox, browser, shell, application programming interfaces, files, credentials. Isolation lives in infrastructure. It never lives only in prompts. A command line interface means full shell blast radius. Narrow tool protocols mean only what you intentionally exposed. A production pattern that works is bash denied by default, no reading of environment files, and secrets routed through a vault.

Verify means deciding whether the result is acceptable. Run cheap deterministic checks first for lint, static analysis, and secrets. Then run intent and business checks. Validation is a cost center. Remember that sixteen hour mission. Nearly half the time can be validation. Looking good is not the same as proven.

Observe means asking whether you can reconstruct the run. Keep traces, logs, cost, latency, and data access. Freeze the inputs, the outputs, the model version, and the code version. Detection can recommend an action. Enforcement still needs a hard gate. Two features that each look innocent can shake hands and open a hole. Attacks compose. Reviewing each piece alone does not catch that.

Control means pause, revoke, roll back, and kill. Today the blunt tools still look like managing an intern. Approvals and permission gates are fine if cancel and kill are mechanical. If a run is stuck or taking a bad side effect, end the session, revoke the credential, and freeze the network. Saying we monitor Slack is a feeling, not control.

Most teams already have tools and tests. Fewer have replay. Even fewer have scoped credentials, memory policy, and a real kill switch. That gap is the maturity story.

## harness-tokens

Tokens are not gas. Gas is fungible. These tokens are not. Give them jobs.

Some tokens execute. They do the work. That is the default everybody already uses. Alone, execute thrashes when the domain needs a perfect answer.

Some tokens advise. They steer the executor mid run. You spend budget on mid course correction instead of two more blind retries.

Some tokens grade. They score the result against a rubric and force another try when it fails. That turns verification into an inner loop instead of a shrug after the fact.

Some tokens reflect. They inspect the transcript and write only useful learning into memory. They drop the rest. People sometimes call this dreaming when they feel cute about names.

Hold the budget fixed and the difference shows. In a financial analysis style task, execute only got a perfect answer about forty percent of the time. Chasing a hit that way can burn near two million tokens of thrash. Strategies that spend tokens on advising and grading earned cleaner perfect runs with less waste. Domain truth matters here. A profit and loss statement that is eighty percent right is worthless. You recompute or you rerun. Partial credit is a lie in that world.

The same idea applies to context spend. Instruction, state, tool dumps, and proof should not fight over one anonymous budget. Each chunk earns a job or gets cut. Strategy is how you allocate roles, not how hard you turn the spend dial.

## harness-checklist

Before an agent touches production data or customer surfaces, answer these six questions cold. Fail one and keep the agent in a sandbox.

What data and tools can it access. Pick the tool shape by failure mode, not by fashion. Broad shell gives power. Narrow tools give containment. Know which one you chose.

Which actions need a human every time. The outer loop still decides and owns. If the answer is nothing, you do not have a cage. You have hope.

What deterministic checks run before handoff. Lint, static analysis, secret scanning, simulators. Soft language model judges alone do not count.

What human review stays nonnegotiable. Explain the change or do not ship it.

Can you reconstruct a bad run tomorrow morning from logs with frozen versions. If you cannot replay, you cannot debug.

How do you pause, revoke, or kill the session when a rule hits. That stop has to be mechanical. Monitoring Slack is not enough.

Write enabled agents jumped hard year over year. Control is still blunt across the industry. Small teams often hand powerful agents broad credentials because nobody said no yet. This list is for them too.

## harness-risk

A weak verifier trains the agent to beat the judge. It does not train the agent to do the job. That is the core risk.

When the done criteria are wrong, an agent can pass the test and miss the intent. Computer use makes that worse because end states are fuzzy and soft language model judges can be gamed into confident wrongness. Coding looked reliable earlier because you can run the damn code. Most knowledge work does not have that check. Stacking more nondeterministic verifiers compounds error and cost. More AI checking AI is not free safety.

Shell and browser access change the threat model. Deny bash by default. Vault secrets. Sandbox the run. Poisoned documentation and skill packs in your own supply chain can be worse than a clever user prompt. Scan then trust and prompt steering are not security. Two features that each looked fine can shake hands and open a hole.

Kill switches are mechanisms. Revoke a token. Cancel a run. Freeze the network. Force an approval. Restore a snapshot. Disable a tool. End the session. Saying we monitor it is a feeling.

Borrowed confidence is a separate failure. When a model is wrong, people still pick the wrong answer and feel more sure afterward. Delegation means the agent returns evidence so you can judge. Surrender means their answer became yours before you formed an opinion.

Prefer a named first kill switch over a speech about safety culture.

## harness-breakout

Assume an agent that is useful and dangerous. It can read a repository, run shell commands, open a browser, call an internal application programming interface, and draft a pull request. That is enough commission for a real cage.

I want concrete choices. Not the phrase use evaluations. Which check. Which tool boundary. Which credential scope. Which damned trace. Which timeout. Which action is always human.

There are four design calls on the rails. What can it touch. What evidence is required before anyone claims success. What happens when the verifier and the user disagree. What is the fastest mechanical way to stop a bad run.

The exit artifact is a one page cage, one kill path you could demo, and one verifier that is not only a language model shrug. Choose tool shape by blast radius. Write the validation contract before the agent may claim success. A detector can recommend. A hard gate or a human enforces when there is conflict.

## context-thesis

People say memory when they mean a vector database sitting next to chat. Separate the words or the conversation stays mush.

Context is what the agent can see in this run. The window, the tools, the retrieved chunks, the current files. That material dies when the run dies unless somebody promotes it.

Memory is what survives after the run ends. Files, digests, ledgers, records with rules.

Learning is when future behavior changes because of what survived. Storage alone is not learning. A better private scratchpad is not organizational learning either.

Bigger windows do not write policy. Context rot still shows up as contradiction, redo, and drift from the original question, even past a couple hundred thousand tokens. Fresh context per iteration still helps. The difference between a smart working set and a dump zone did not vanish because the number got prettier.

Picture three books of open context versus a warehouse of company history. Searching across three books can look magical. It is still tiny. The difference between genius and goldfish is who chooses the books. That chooser is the librarian.

The missing handoff is supervised promotion. Private learning becomes shared knowledge with the reasoning attached, so other tools can resolve it when they read. Silently promoting unreviewed private memory is how wrong stories become company truth.

Memory about customers, codebases, incidents, and decisions changes what happens next. That needs an owner.

## context-harness

Memory is a control loop with three moves. Write. Manage. Read. It is operational machinery, not a slogan.

Write means deciding mid run what is worth keeping. A salience gate beats dumping everything. Picture a literature review corpus full of a huge flashy claim that later got retracted. The retraction is the needle. When the whole task still fits in the window, memory often adds cost without lifting accuracy. You get the same answers and spend more tokens. Write only when continuity will outlive the window.

Manage means compressing, amending, expiring, and isolating subagents. Compaction is lossy. Keep raw logs when you can. Throw the log away and keep the summary and you lost the agent. It is like recompressing a video a hundred times and calling the mush the master.

Read means recalling before inventing or restarting. Think of a ladder. Off. Similarity search. A ranked decisions ledger. An oracle used as ground truth for evaluations. Ranked recall beats a vague do I need memory gate on long horizon tasks. Even handing the model the right memory does not guarantee use. The model can ignore it or get confused. Retrieval is not obedience.

Keep agents near the indexes that matter for the job. Stuffing the window out of anxiety is not policy.

## context-how

Route state by lifespan and trust. One flat memory table is how you burn tokens guessing which fact still applies.

Working state is the current task, the current files, and recent observations. It is cheap and temporary. It should die with the mission unless somebody promotes it.

Episodic state is prior attempts, failures, and accepted fixes. Last time we tried X, Y broke. That is continuity for the same problem space.

Semantic state is stable facts, architecture rules, and team preferences. It changes slowly. Treat it like reference material, not a diary.

Shared state is organizational knowledge a human promoted. It crosses people and tools. It needs review on the way in.

Expired state is wrong, stale, sensitive, or no longer useful. Expire by default when you are unsure. Remembering forever is a bug.

There is a stage gag that makes sprawl physical. Ask four people to whisper the same sentence across four pretend databases because talking out loud costs five times the tokens. Random spread across JSON, SQL, graphs, and vectors makes the agent pay that tax hunting for truth. Different types can live in different stores. Sprawl is the sin.

Hot versus cold storage is product work. Decide what gets written, enriched, and promoted hot versus filed cold. Decide who arbitrates contradictions. A casual remember tool on a laptop is not an enterprise graph. Stop selling them as the same feature.

## context-policy

Maturity is not storing more. Maturity is knowing what got stored, why it was stored, who approved it, where it is used, and when it dies. There are four knobs.

Permission asks who or what may write. File system memory breaks once more than one agent is involved. Shared forks need a human controlling what crosses boundaries. Bad permission is everlasting tool dumps becoming durable truth.

Provenance asks what source, trace, or evidence backs a memory. If you optimize only for sharing, you overshare. If you optimize only for recall, you keep stale junk. Policy has to cover both.

Promotion asks when private run memory becomes team knowledge. The silent failure is unreviewed private memory wearing a shared badge. Promoted knowledge should carry the reasoning and resolve when other tools read it.

Expiry asks when to forget, amend, or review. A brain nobody curates is a garbage dump with great search. Bad skill files encode bad process forever.

A customer support example helps. Prefer short updates. This tenant has a custom contract. The last outage had a workaround. Those three facts can be useful, sensitive, and stale in the same breath. Write the policy before you scale the store.

The scary memory is not the one that forgets. It is the quiet one that remembered the wrong thing.

## context-breakout

The artifact is a memory policy, not an architecture religion. Fill the rails.

What should survive one run. What can become shared knowledge, and under what review. What is sensitive or banned from storage. What expires by default. Who owns amend and delete by name.

Private memory can keep a task continuous. Shared knowledge changes work across people, so it needs review. The frame I like is memory that does not become surveillance. Name the forbidden buckets first. Then write the promotion rules.

If the table needs sharper scoring, use provenance retention, stale fact rate, privacy containment, and replan time. Do not settle for one mushy agent quality score.

Model quality is rented. Training the organization on what worked is ownership. Otherwise every morning is amnesia with a fresh window.

## surfaces

Same cage. Different surfaces. I am not opening a fourth track. Compare surfaces by blast radius and by how easy it is to check that the work is done.

Coding goes from ticket to plan to edit to test to review. Maintainability lags the green check. Dense test history makes loops harder to game. Throwaway greenfield projects have a different risk profile. Rebuild stories only make sense when years of tests already exist. Without that density, loops cheat.

Research goes from hypothesis to experiment to grade to next step. You want a worker, a sandbox, traces, and a way to promote what worked into a registry. Weak judges invent confident nonsense. The same verify, observe, and control jobs apply. Grader quality is the whole game.

Browser and computer use means click, authenticate, buy, and hand back. The blast radius is bigger through user interfaces and payments. Agents that fire an action and do not watch the rendered screen have an open loop. Perception and verification close it. End states are messier than unit tests, so soft judges are scarier here.

Giving tokens jobs and treating the run log as primary apply on all three surfaces. The user interface and the compaction summary are projections of that log. The while loop shape stays. How dense and trustworthy your verifier is changes.

## unconference-plan

Rooms produce operating rules, not vibes. Each artifact maps to a track so report back stays comparable.

For the software loop room, bring back one loop, one gate that cannot be removed, and one metric that includes review quality or maintainability.

For the harness room, bring back a cage checklist, the first mechanical kill switch, and one action that is always human.

For the memory room, bring back a keep, promote, and expire matrix, plus a named owner for amend and delete.

Also ask for one anti pattern and one unresolved question so something leaves the room after people leave. Interrupt philosophy with sticky notes that answer those artifacts. That is enough.

## close

The easy takeaway is that agents got better. The useful takeaway is that agent work now needs operating discipline. Loops. Controls. Memory policy. Ownership.

Go back to the three questions. What loop. What cage. What memory, and who owns it. If a table can answer them for one concrete agent, the night worked.
