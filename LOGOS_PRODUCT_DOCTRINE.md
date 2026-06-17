# LOGOS Product Doctrine

LOGOS is the execution harness for Affine intelligence.

It is not a chatbot. Chat is the control surface. LOGOS is the scaffolding that helps Affine models reason more reliably, use tools, manage context, run loops, execute on remote machines, and turn open-ended goals into useful work.

The model is not magic by itself. LOGOS is the working environment around it: planning structure, memory, tools, machines, reusable procedures, validation, and artifacts.

## Relationship To Affine

Affine is the intelligence and evaluation system.

LOGOS is the operational harness for that intelligence.

Affine defines the replacement rule, the validation grammar, and the compounding frontier. LOGOS applies that grammar to real user work: it asks, plans, tests, executes, stores context, returns artifacts, and reopens the next useful step.

The relationship should feel like shared DNA, not a renamed product:

- Affine is the protocol, doctrine, and source of intelligence.
- LOGOS is the execution scaffold that makes Affine usable.
- Affine proves intelligence can compound.
- LOGOS makes compounding intelligence actionable.

## Core Positioning

LOGOS turns Affine intelligence into a cloud execution system.

The product promise:

> Give LOGOS a goal. It can plan, search, code, remember, operate remote machines, run loops, validate progress, and return useful artifacts through one web interface.

LOGOS should be described as:

- The execution harness for Affine intelligence.
- Affine's cloud agent interface.
- A Bittensor-native agentic workspace.
- A web interface for remote autonomous work.
- A reasoning console that can execute, not just answer.

LOGOS should not be described as:

- A chatbot.
- A wrapper around an LLM.
- A generic assistant.
- A copilot.
- A self-evolving agent.
- Magic.
- A subnet showcase.
- A partner/infrastructure directory.

## Technical Framing

LOGOS exists because LLMs often make mistakes when left alone.

The product should be honest about that. LOGOS improves outcomes by wrapping Affine models in structure:

- goal decomposition
- planning and replanning
- tool use
- memory retrieval
- reusable skill files and procedures
- remote execution
- verification loops
- artifact production
- human approval points when needed

The core product claim is not "the model evolves itself." The claim is:

> LOGOS gives Affine intelligence a managed environment for doing work.

If LOGOS learns from use, describe the mechanism plainly:

- it stores useful context
- it summarizes prior work
- it creates or updates reusable procedures
- it remembers user/project preferences
- it improves future runs through better scaffolding

Avoid broad claims like "self-evolving" unless a concrete mechanism and evaluation standard are shown beside the claim.

## Infrastructure Principle

LOGOS composes useful infrastructure underneath the interface, but the user-facing product should not depend on naming specific infrastructure providers or subnets.

The underlying network composition is subject to change. Components should be included only when they make LOGOS better for the end user.

Therefore, LOGOS copy should speak in durable capabilities:

- remote execution
- model inference
- persistent memory
- web and data retrieval
- secure compute
- storage
- tool use
- artifact generation
- verification and traceability

Avoid binding the product doctrine to any specific subnet names. Infrastructure names may appear in technical diagnostics, developer docs, partner material, or advanced traces when useful, but they should not be the center of the LOGOS identity.

## Product Primitives

LOGOS is built from a small set of product primitives.

### Threads

A thread is the conversational control surface for a goal. It contains user intent, agent decisions, tool calls, execution results, memory references, and final artifacts.

Threads should feel less like casual chat and more like an operational record.

### Runs

A run is an agent attempt to satisfy a goal. It can involve search, coding, file edits, remote execution, planning, validation, and artifact production.

Runs are the unit of progress. They should expose state clearly:

- queued
- planning
- executing
- blocked
- validating
- complete
- failed

### Loops

A loop is the repeated cycle of plan, act, observe, validate, and continue.

Loops are how LOGOS turns chat into work. They should be visible and controllable:

- what goal the loop is pursuing
- what action is currently running
- what evidence came back
- what changed after the last step
- why the next step is being taken
- when the loop should stop, ask, or continue

Loops should not feel endless by default. They need boundaries, progress signals, and user control.

### Machines

A machine is a remote execution environment available to LOGOS.

Machines should be presented by capability and state, not by infrastructure branding:

- available compute
- running jobs
- file system state
- active processes
- cost or quota
- security boundary
- region or latency when relevant

### Memory

Memory is persistent context that survives a single thread.

Memory should not feel mystical. It is a product primitive with lifecycle and control:

- what was stored
- why it matters
- where it came from
- when it was last used
- whether the user can edit, pin, or delete it

### Skills

A skill is a reusable procedure LOGOS can apply in future runs.

Skills are not proof of mystical self-improvement. They are operational scaffolds: instructions, checks, tool sequences, preferences, or workflows that make repeated work more reliable.

Skill state should be legible:

- what the skill does
- when it was created or updated
- what evidence made it useful
- which projects or contexts use it
- whether the user can inspect, edit, disable, or delete it

### Tools

Tools are capabilities LOGOS can invoke: web search, code execution, browser use, document creation, deployment, scheduling, data extraction, and other actions.

Tools should surface as accountable actions, not hidden magic.

### Artifacts

Artifacts are outputs that can be inspected, reused, shared, or deployed:

- code changes
- files
- reports
- plans
- datasets
- screenshots
- deployed links
- summaries

Artifacts are how LOGOS proves work happened.

### Traces

A trace is the inspectable record of how LOGOS reached an outcome.

Traces should make the system legible without overwhelming the default conversation. The user should be able to inspect:

- reasoning outline
- tools used
- sources consulted
- files changed
- commands run
- validations performed
- open risks

## Interaction Model

The interface is chat-first, but not chat-only.

The center column is the conversational command surface. The surrounding interface should reveal the harness around the model:

- left rail: projects, threads, memories, machines, saved workflows, skills
- center: current thread and user input
- right rail: live run state, loops, tools, traces, files, artifacts, validation

The user should be able to interact at three levels:

1. Natural language: "Plan this trip", "Fix this bug", "Research this market".
2. Operational controls: pause, resume, inspect, approve, retry, fork, deploy.
3. Artifact controls: open, download, share, compare, promote, archive.

## Visual Identity

LOGOS inherits Affine's world but should not visually clone the Affine landing page.

Inherited from Affine:

- carbon background
- restrained gold for validation
- mono operational labels
- clear evidence hierarchy
- grid and field logic
- low-noise, high-trust surfaces

Distinct to LOGOS:

- console-like density
- live status instrumentation
- thread and run timelines
- visible execution loops
- memory and machine state
- skill and procedure state
- artifact shelves
- a calmer product-operator voice

The visual feel should be:

- precise
- operational
- alive
- durable
- infrastructural
- trustworthy

Avoid:

- generic SaaS dashboard cards everywhere
- mystical ornamentation
- decorative AI glow
- partner logo walls
- heavy purple-blue agent aesthetics
- chat bubbles as the only visual language
- "self-evolving" visual tropes without a concrete mechanism

## Voice

LOGOS speaks like an operator with judgment.

It should be direct, specific, and accountable. It should say what it is doing, what it found, what it changed, and what remains uncertain.

Good LOGOS voice:

- "I found three viable routes. The second is cheapest, but the first has lower delay risk."
- "I changed the parser and added a regression test. The remaining risk is malformed nested input."
- "I can run this on a remote machine, but it may need network credentials."
- "This result is not validated yet."

Bad LOGOS voice:

- "Here are some exciting possibilities!"
- "As an AI language model..."
- "I have magically handled everything."
- "I evolved myself."
- "Powered by an ecosystem of revolutionary subnets."

## Validation Grammar

LOGOS should inherit Affine's validation bias.

Every meaningful output should answer:

- What did LOGOS do?
- What evidence supports it?
- What changed?
- What artifact was produced?
- What was validated?
- What remains uncertain?
- What is the next useful action?

Gold is reserved for validated state. Do not use gold as generic decoration.

## Bittensor-Native, User-First

LOGOS should be proud of being Bittensor-native, but the user experience should lead with usefulness.

The end user does not need a map of the underlying network before they can trust the product. They need to see that LOGOS can do real work.

The right hierarchy:

1. User goal.
2. Agent plan.
3. Loop state.
4. Execution.
5. Artifact.
6. Validation.
7. Optional infrastructure trace.

Bittensor is the substrate. LOGOS is the execution harness and interface.

## Page Direction

The current LOGOS page should evolve from a chat mock into an agentic cloud console.

Important on-screen signals:

- LOGOS as the first-viewport identity.
- "Execution harness for Affine intelligence" or equivalent category label.
- A visible run in progress.
- A visible loop state.
- A machine or execution state.
- A memory/reference state.
- A skill/procedure state.
- An artifact/result panel.
- A trace or validation panel.

The page should make one thing obvious:

> LOGOS can act.

## Open Questions

- What is the first public LOGOS capability set?
- Which actions require user approval?
- What is the security model for remote machines?
- What memory controls are mandatory at launch?
- What skill/procedure lifecycle is credible at launch?
- How are loops bounded, paused, resumed, and audited?
- How visible should infrastructure routing be by default?
- What is the minimum credible artifact flow for the first demo?
- How does LOGOS expose cost, quota, or resource usage?
- What is the relationship between LOGOS threads and Affine evaluations?

## One-Sentence North Star

LOGOS is the execution harness for Affine intelligence: a Bittensor-native web console for planning, tool use, memory, remote execution, validation loops, and useful artifacts.
