# Product Principles

These principles guide product decisions and prevent scope drift.

## 1) Single-agency first

Every feature should optimize for one agency operating many client workspaces.

Decision test:
- Does this improve agency operations directly?
- If not, defer unless it is foundational.

## 2) Safe by default

Publishing, permissions, and schema changes should fail safely.

Decision test:
- Can a user accidentally publish invalid or unauthorized content?
- If yes, design is incomplete.

## 3) Flexible model, strict contracts

Editors need flexible content structures, but APIs and workflows need strong contracts.

Decision test:
- Can developers rely on typed, versioned behavior?
- Can editors adapt models without breaking consumers?

## 4) Reuse over reinvention

Templates, components, and workflows should be shared where possible.

Decision test:
- Can this be packaged as a reusable blueprint?
- Can at least two client teams use it?

## 5) Observable operations

If we cannot measure usage, errors, and performance, we cannot scale confidently.

Decision test:
- Does this feature emit useful logs, metrics, and audit events?

## 6) Progressive complexity

Start with a strong core, then add advanced features in phases.

Decision test:
- Is this a day-one need or a phase-two enhancement?

## 7) Human-centered editorial UX

Non-technical users should complete core tasks with minimal training.

Decision test:
- Can an editor complete the workflow in a predictable path?
- Are validation errors understandable and actionable?