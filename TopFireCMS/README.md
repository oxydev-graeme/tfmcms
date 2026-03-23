# TopFireCMS

TopFireCMS is a proposal for a private headless CMS platform built for one agency and its clients.

This is not a public SaaS for many agencies. It is a focused system for:
- internal agency teams
- client editors and approvers
- controlled multi-client workspaces

## Why this project exists

Our agency needs a content platform with:
- Sanity-style schema flexibility
- predictable publishing workflows
- strong client separation
- lower long-term operating costs
- full ownership of product direction

## Proposal outcomes

This repository scopes the product and delivery plan so the team can:
- challenge assumptions early
- align on MVP boundaries
- estimate build effort
- decide build versus buy tradeoffs

## Repository map

- [Executive Summary](docs/00-executive-summary.md)
- [Problem and Opportunity](docs/01-problem-and-opportunity.md)
- [Product Principles](docs/02-product-principles.md)
- [User Personas](docs/03-user-personas.md)
- [MVP Scope](docs/04-mvp-scope.md)
- [System Architecture](docs/05-system-architecture.md)
- [Data Model and Schema Strategy](docs/06-data-model-and-schema-strategy.md)
- [Editor Experience](docs/07-editor-experience.md)
- [Security and Compliance](docs/08-security-and-compliance.md)
- [DevOps and Observability](docs/09-devops-and-observability.md)
- [12-Week Roadmap](docs/10-implementation-roadmap-12-weeks.md)
- [Risks and Mitigations](docs/11-risks-and-mitigations.md)
- [Build vs Buy Analysis](docs/12-build-vs-buy.md)
- [Feedback Pack](docs/13-feedback-pack.md)
- [Open Questions](docs/appendix-a-open-questions.md)
- [Glossary](docs/appendix-b-glossary.md)

## Suggested review flow

1. Read the Executive Summary and MVP Scope.
2. Review architecture and security assumptions.
3. Challenge risks, estimates, and roadmap.
4. Add feedback in pull requests or issue comments.

## Working assumptions

- Single agency platform, multi-client usage.
- Client data isolation is mandatory.
- Content schema should be as flexible as Sanity-style modeling.
- TypeScript-first stack is preferred.

## Decision target

Use this proposal to decide one of the following:
- proceed with MVP implementation
- run a short prototype spike first
- defer and continue with current stack
