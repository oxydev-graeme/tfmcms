# Executive Summary

## Vision

TopFireCMS is a private, agency-owned headless CMS designed for one agency serving many clients through isolated workspaces.

The goal is to combine:
- schema flexibility similar to Sanity
- strong governance and approval workflows
- predictable delivery APIs for web and app teams

## What success looks like

- Editors can create and publish content with confidence.
- Developers can model content quickly and evolve schemas safely.
- Clients can access only their own workspace and workflows.
- The agency can onboard new clients in hours, not weeks.

## Business value

- Reduce tool sprawl and inconsistent client setups.
- Lower vendor lock-in risk by owning core architecture.
- Standardize quality across all client projects.
- Create reusable templates for repeatable delivery.

## Product scope summary

In scope for MVP:
- workspace-level client isolation
- schema registry and validation
- document revisions with draft and published states
- role-based access control
- review and approval workflow
- content API and webhook system

Out of scope for MVP:
- real-time collaborative editing with CRDTs
- marketplace for third-party plugins
- fully automated client self-service onboarding

## Recommended stack

- Studio and admin UI: Next.js and React
- Core API and workers: TypeScript with Fastify or NestJS
- Primary storage: PostgreSQL with JSONB
- Cache and queues: Redis plus managed queue service
- Search: OpenSearch or Meilisearch (phase-dependent)
- Assets: S3-compatible object storage

## Decision request

Approve a 12-week MVP build focused on single-agency, multi-client needs with explicit milestones, risk gates, and stakeholder reviews.