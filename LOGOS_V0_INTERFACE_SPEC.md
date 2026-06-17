# LOGOS V0 Interface Spec

This spec translates `LOGOS_PRODUCT_DOCTRINE.md` into the first credible LOGOS product screen.

The goal is not to design every future feature. The goal is to make the current LOGOS page stop reading as a generic chat mock and start reading as the execution harness for Affine intelligence.

## V0 Thesis

LOGOS V0 must prove one thing:

> LOGOS can act.

The page must show that chat is only the control surface. The visible product is a structured system around the model: goal, run, loop, tool use, remote execution, memory, reusable procedure, artifact, trace, and validation.

The emotional thesis:

> Word made operational.

The interface should make that line believable. A user enters words; the console turns them into structured work with state, evidence, and artifacts.

## V0 Success Standard

The screen is successful when a new visitor can say, within five seconds:

1. "This is LOGOS."
2. "It is more than chat."
3. "It can do work on machines/tools."
4. "I can see what it is doing."
5. "It produces artifacts and proof."

If the page only communicates mood, it fails. If it only communicates utility, it is forgettable. V0 needs both: a mythic first impression and a legible work system.

## Primary URL

The direct route is:

`/chat/`

This route should open directly into the LOGOS console with no Affine site header or footer. The user may lose easy navigation back to the broader site; that is acceptable for this route. LOGOS should feel like a separate operational surface.

## V0 Product Category

Primary category:

`Execution harness for Affine intelligence`

Secondary category:

`Cloud agent interface`

Use "chat" only to describe the input surface, not the product category.

## First-Viewport Requirements

Within the first viewport, a user must understand:

1. This is LOGOS.
2. LOGOS is connected to Affine intelligence.
3. LOGOS can execute work, not only answer.
4. A run has state.
5. A loop has progress.
6. Tools or machines are involved.
7. There is or will be an artifact.
8. The user can inspect, approve, pause, or stop.

If those eight things are not visible or strongly implied, the page is not doing its job.

## First-Viewport Identity

The first viewport must balance myth and proof.

Myth says:

- this is LOGOS
- word becomes work here
- the product has its own identity, not just Affine navigation
- the user is entering an operational surface

Proof says:

- a run is active or ready
- a loop has phases
- tools and machines exist
- memory and skills exist
- artifacts and traces exist
- validation is visible

The first viewport should not choose between these. It should feel iconic at a glance and functional after two seconds of inspection.

Required identity stack:

```text
LOGOS
Word made operational.
Execution harness for Affine intelligence.
```

Optional shorter stack:

```text
LOGOS
Reason becomes execution.
```

The LOGOS wordmark may be large, but it cannot be the only thing carrying the screen. The page must immediately show the machinery of action around it.

## First-Screen Required Signals

The first screen needs one identity signal, one intent signal, and five proof signals.

Identity signal:

- LOGOS wordmark plus myth line.

Intent signal:

- composer framed as a goal/invocation surface, not a message box.

Proof signals:

- active or ready run state
- loop phase
- machine/tool state
- memory or skill state
- artifact or artifact placeholder
- trace or validation state

At least five of the six proof signals must be visible without scrolling on desktop. On mobile, they may be stacked, collapsed, or represented as a compact status strip, but they must still be reachable from the first screen without burying the user in navigation.

The first screen fails if LOGOS could be mistaken for:

- a beautiful shell prompt
- a generic LLM chat
- an Affine subpage
- a static brand poster
- an infrastructure dashboard

## Screen Anatomy

LOGOS V0 should use a dense three-zone console:

1. Left rail: workspace and persistent context.
2. Center thread: conversation and active work.
3. Right rail: run state, loop, tools, artifacts, validation.

### Left Rail

Purpose: show that LOGOS is not a one-off chat.

Required sections:

- LOGOS lockup.
- New run / new thread action.
- Projects or workspaces.
- Threads.
- Machines.
- Memories.
- Skills.

The left rail should communicate continuity. LOGOS remembers work, organizes work, and can return to prior operational context.

V0 can use static sample data, but the labels must be product-accurate.

Avoid:

- generic "recent chats" as the only structure
- marketing nav
- decorative project lists that do not imply action

### Center Thread

Purpose: show the user-facing command surface.

Required content:

- A clear goal at the top of the thread.
- At least one agent message that includes a plan.
- At least one visible action/update message.
- At least one artifact or artifact preview.
- A composer that asks for a goal, not merely a message.

Composer placeholder options:

- `Give LOGOS a goal...`
- `Ask LOGOS to plan, run, search, code, or operate...`
- `Describe the work LOGOS should execute...`

Avoid:

- `Message Logos...` as the only prompt, because it undersells the product.
- purely conversational sample messages
- chat bubbles with no work state

### Right Rail

Purpose: make the harness visible.

Required modules:

- Active run.
- Loop state.
- Tools.
- Machine or execution state.
- Memory.
- Skill or reusable procedure.
- Artifacts.
- Trace / validation.

The right rail is the difference between LOGOS and a chatbot. It should show the operational system around the model.

## Mythic Interface Layer

LOGOS should feel mythic through product structure, not decoration.

The desired feeling is an operational ritual: a goal enters, a plan forms, tools move, machines run, evidence accumulates, and an artifact is sealed as validated. This should feel alive because the system has state and consequence, not because the UI claims consciousness.

Use these interface metaphors:

- **Invocation**: the composer where the user gives LOGOS a goal.
- **Hand**: the tool/machine activity that shows intelligence reaching into the world.
- **Loop**: plan, act, observe, validate, continue.
- **Witness**: trace, logs, citations, test output, screenshots, diffs.
- **Seal**: validated state, expressed with restrained gold.
- **Artifact**: the thing returned to the user.

Do not use:

- literal deity illustrations
- angel, messenger, wing, or Hermes-like cues
- consciousness claims
- self-evolving claims
- generic neon AI atmosphere
- magical symbols as the primary proof of capability

The first-screen composition should communicate:

1. LOGOS has a name with weight.
2. LOGOS can receive a goal.
3. LOGOS can operate.
4. LOGOS can prove what it did.

## Hero / Console Composition

If V0 keeps a centered LOGOS title, it must be embedded inside the console rather than floating like a landing page hero.

Recommended layout:

- large LOGOS wordmark centered in the work field
- myth line below it: `Word made operational.`
- product line below it: `Execution harness for Affine intelligence.`
- composer directly under the identity stack
- left rail showing continuity: threads, machines, memory, skills
- right rail showing action: active run, loop, machine, artifact, trace
- subtle field/background that feels infrastructural, not decorative

The title can be grand. The surrounding UI must be concrete.

The page should avoid looking like a pure terminal. LOGOS is not only a shell. It is a chat-controlled work environment with traces, artifacts, approvals, procedures, and remote execution state.

## V0 Canonical Demo

The page should show one concrete work loop.

Recommended demo:

`Goal: Prepare a repo fix and validation plan`

Why this works:

- coding proves remote execution
- files prove artifacts
- validation proves Affine DNA
- a reusable procedure proves skills without claiming mystical self-improvement
- the workflow is serious enough for technical users

Alternative demos:

- research synthesis with source trace
- travel planning with constraints and artifact itinerary
- data extraction and report generation

Do not show too many workflows at once. V0 needs one credible active run, not a menu of imaginary powers.

## Canonical Run Story

The active run should read like this:

1. User gives a goal.
2. LOGOS creates a plan.
3. LOGOS gathers context.
4. LOGOS uses a tool.
5. LOGOS runs or prepares execution.
6. LOGOS validates the result.
7. LOGOS produces an artifact.
8. LOGOS stores or updates a reusable procedure only if useful.
9. LOGOS asks for approval before risky or external actions.

This sequence should be visible in the UI as a run timeline or loop panel.

## State Model

### Run States

Use these labels:

- queued
- planning
- gathering context
- executing
- waiting for approval
- validating
- complete
- blocked
- failed

V0 must show at least one active state and one completed step.

### Loop States

Use these labels:

- plan
- act
- observe
- validate
- continue
- ask
- stop

The loop panel should show the current phase and the next intended step.

Example:

```text
Loop 03
phase: validate
last observation: tests pass locally
next: prepare artifact summary
stop condition: user approval before deploy
```

### Approval States

Use these labels:

- no approval needed
- approval recommended
- approval required
- waiting for user
- approved
- denied

Approval must appear before:

- deploying
- publishing
- sending messages externally
- spending meaningful money
- using sensitive credentials
- making irreversible changes
- entering long-running loops

## Required Components

### Run Header

Must show:

- goal
- run status
- elapsed time or progress
- pause / stop / inspect controls

Example:

```text
Run: repo fix and validation plan
status: validating
control: pause | inspect | stop
```

### Loop Panel

Must show:

- loop number
- current phase
- last observation
- next action
- stop condition

### Machine Panel

Must show:

- environment state
- active process or job
- resource cue
- logs/output affordance

Keep infrastructure provider names out of the default UI. Show capability and state first.

### Memory Panel

Must show:

- project memory used
- why it was relevant
- edit/disable affordance

Example:

```text
Memory used
repo conventions: tests before summary
last used: this run
```

### Skill Panel

Must show:

- reusable procedure name
- what it does
- whether it was used, updated, or suggested

Example:

```text
Skill suggested
repo debug loop
inspect -> patch -> test -> summarize
```

Do not imply the agent evolved itself. Show the concrete procedure.

### Artifact Shelf

Must show at least one artifact:

- changed file
- plan
- report
- itinerary
- command log
- validation summary
- downloadable or shareable output

Artifacts should be the strongest proof that LOGOS did work.

### Trace Panel

Must show:

- plan
- tools used
- files touched
- commands run
- validation
- risks

The default trace can be collapsed, but it must be available.

## Copy System

### Product Title

Use:

`LOGOS`

### Category Line

Preferred:

`Execution harness for Affine intelligence`

Acceptable:

`Affine cloud agent interface`

Avoid:

`AI chat`

### Short Description

Preferred:

`Plan, run, validate, and produce work through one web console.`

Alternate:

`Affine intelligence scaffolded with tools, memory, machines, and loops.`

### Myth Line

Preferred:

`Word made operational.`

Alternates:

- `Reason becomes execution.`
- `Bring a goal. LOGOS turns it into work.`

Avoid:

- `The agent awakens.`
- `Self-evolving intelligence.`
- `A conscious AI worker.`

### Input Placeholder

Preferred:

`Give LOGOS a goal...`

Alternates:

- `Describe the work to execute...`
- `Ask LOGOS to plan, run, search, code, or operate...`

Avoid:

- `Message Logos...`
- `Ask anything...`

### Empty State

```text
Start with a goal.
LOGOS will plan the work, choose tools, run loops, validate progress, and return an artifact.
```

### Approval Copy

```text
Approval required before continuing.
This step will affect an external system.
```

### Validation Copy

```text
Validated
The artifact satisfies the stated goal and checks passed.
```

### Blocked Copy

```text
Blocked
LOGOS needs input before the loop can continue.
```

## Visual Requirements

LOGOS V0 should feel like a serious console, not a landing page.

Required visual qualities:

- dense but readable
- dark carbon world
- iconic LOGOS identity in the first viewport
- mythic line paired with operational proof
- gold only for validated or inherited state
- restrained borders
- mono labels for operational state
- visible run/loop instrumentation
- clear artifact surfaces
- no ornamental AI glow

Use motion sparingly:

- live run pulse
- loop phase transition
- tool activity indicator
- validation confirmation

Use atmosphere sparingly:

- subtle field texture
- low-contrast traces or arcs that imply work moving through a system
- background image or surface only when it does not reduce legibility
- no one-note blue/purple agent glow

Avoid:

- big marketing hero
- generic cards everywhere
- chat bubbles as the only structure
- mystical symbols as primary proof
- decorative partner/infrastructure strip
- Hermes-like messenger/wing motifs
- consciousness or life claims presented as product facts

## Screen Scoring Rubric

Use this rubric to grade any LOGOS V0 mock.

Each category scores 0, 1, or 2 points.

1. **Identity**
   0: could be any agent
   1: says LOGOS but feels generic
   2: unmistakably LOGOS

2. **Myth**
   0: no symbolic force
   1: decorative myth
   2: "word made operational" is felt and understood

3. **Action**
   0: chat only
   1: action implied
   2: tools, machines, or work state visibly active

4. **Loop**
   0: no process
   1: vague progress
   2: plan, act, observe, validate, and next step are legible

5. **Proof**
   0: no trace or validation
   1: trace exists but is weak
   2: evidence, changes, and validation are visible

6. **Artifact**
   0: no output object
   1: artifact implied
   2: artifact is visible, inspectable, or ready to open

7. **Control**
   0: no user handles
   1: basic controls
   2: pause, inspect, approve, stop, or equivalent controls are obvious

8. **Memory / Skill**
   0: one-off chat
   1: continuity implied
   2: memory or reusable procedure is visible and user-controllable

9. **Honesty**
   0: vague autonomy or consciousness claims
   1: mostly honest but fuzzy
   2: ambitious claims are tied to mechanisms

10. **Composure**
   0: noisy, generic, or overdesigned
   1: attractive but uneven
   2: restrained, iconic, and operational

Score interpretation:

- 0-11: not LOGOS yet
- 12-15: promising direction
- 16-18: ship-worthy prototype
- 19-20: 10/10 direction

Do not call a screen 10/10 unless it scores at least 19 and earns 2 points in Identity, Action, Proof, and Honesty.

## Information Architecture

Minimum IA for V0:

- Workspace
- Threads
- Runs
- Machines
- Memory
- Skills
- Artifacts
- Trace

These terms should be consistent across UI, docs, and marketing.

## V0 Acceptance Criteria

The LOGOS page is acceptable when:

1. `/chat/` opens directly into the LOGOS console.
2. The Affine site header/footer are hidden on `/chat/`.
3. The first viewport clearly says LOGOS.
4. The category is not "chatbot".
5. A goal is visible.
6. A run state is visible.
7. A loop state is visible.
8. A machine or execution state is visible.
9. Memory or skill state is visible.
10. At least one artifact is visible.
11. A trace or validation panel is visible.
12. User controls are visible: pause, inspect, approve, stop, or equivalent.
13. The UI does not name specific subnets by default.
14. The UI avoids "self-evolving" language.
15. The page communicates that LOGOS can act.
16. The first viewport includes the LOGOS identity stack or an equally strong equivalent.
17. Mythic language is paired with visible run, loop, artifact, and trace proof.
18. The UI avoids literal consciousness, sentience, or "alive" claims.

## Do Not Ship

Do not ship a LOGOS page that:

- looks like a generic LLM chat UI
- relies on "self-evolving" as the main claim
- leads with infrastructure provider names
- hides all work state behind conversation
- has no visible artifact
- has no visible run state
- has no visible loop state
- has no approval or stop affordance
- uses gold as decoration
- feels like an Affine docs page instead of a product console
- treats mythic style as a substitute for visible execution state
- copies Hermes/messenger cues instead of owning the LOGOS ordering-principle lane

## V0 Priority

### P0

Must have:

- direct `/chat/` route
- no Affine header/footer on chat
- LOGOS identity
- goal composer
- active run state
- loop state
- right rail instrumentation
- artifact shelf
- trace/validation panel
- controls for pause/inspect/stop

### P1

Should have:

- memory panel
- skill panel
- machine logs
- approval state
- expanded artifact preview
- collapsed trace drawer

### P2

Can wait:

- full account/project management
- billing/resource accounting
- full skill editor
- multi-machine orchestration UI
- advanced infrastructure routing details
- team collaboration

## Demo Script

The V0 page should support this static demo story:

```text
User: Prepare a repo fix and validation plan.

LOGOS:
1. Reads project context.
2. Plans the fix loop.
3. Opens a remote execution environment.
4. Applies or proposes a code change.
5. Runs validation.
6. Produces an artifact summary.
7. Suggests a reusable repo-debug procedure.
8. Waits for approval before deployment or publication.
```

This does not need to be fully functional for the visual prototype. It does need to be visually clear.

## Launch Demo Bar

The demo should feel like LOGOS is doing consequential work, not performing a scripted tour.

A 10/10 demo has:

- a specific user goal
- visible uncertainty at the start
- a plan that decomposes the work
- at least one tool or machine action
- at least one piece of evidence
- at least one artifact
- a validation moment
- a user approval boundary
- a memory or skill update only if it is concretely justified
- a trace that can be inspected

Recommended first demo framing:

```text
Goal
Audit this repo, identify the breaking issue, prepare a patch plan, and validate the fix path.

LOGOS run
1. Reads repo context and prior project memory.
2. Forms a fix loop.
3. Opens a remote machine.
4. Runs inspection commands.
5. Finds the likely issue.
6. Produces a patch plan or patch artifact.
7. Runs validation or records the validation blocker.
8. Seals the artifact as validated or explicitly unvalidated.
9. Suggests a reusable repo-debug skill only if the trace supports it.
```

The key is not coding specifically. The key is visible transformation: ambiguous goal in, governed execution out.

## Open Product Questions

- What is the first real execution backend?
- What can LOGOS do without user approval?
- What must always require approval?
- What is the memory deletion/editing model?
- What is the minimal skill lifecycle?
- How are long-running loops priced and bounded?
- What is the first artifact type users can trust?
- What is the first workflow that makes LOGOS undeniably useful?
