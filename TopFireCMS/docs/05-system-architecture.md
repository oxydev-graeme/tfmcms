# System Architecture

## Architecture summary

TopFireCMS uses a modular architecture with clear boundaries:
- Studio and admin applications for users
- API services for content and workflow operations
- Worker services for asynchronous tasks
- shared infrastructure for data, cache, storage, and observability

## Logical components

1. Studio App
- Schema-aware content editing UI
- Draft, review, and publish workflows
- Workspace-scoped navigation

2. Admin App
- User and role management
- Workspace settings and templates
- Operational dashboards

3. Core API
- Authentication and authorization
- Content CRUD and revision management
- Workflow state transitions

4. Schema Service
- Schema registration and validation
- Migration checks and compatibility rules

5. Delivery API
- Published content read endpoints
- Filtering and pagination
- CDN-friendly response behavior

6. Event and Webhook Worker
- Event emission for content lifecycle
- Webhook retries and dead-letter handling

7. Media Service
- Asset uploads and metadata
- Rendition generation and access URLs

## Data and infrastructure

- PostgreSQL: primary relational and JSONB document storage
- Redis: cache, rate limits, and short-lived coordination
- Object storage: media files and backups
- Search index: full-text and faceted content retrieval
- Queue system: asynchronous processing

## Tenancy model

- Single agency tenancy at platform level
- Multi-client workspaces within platform
- Strict workspace_id scoping in storage and APIs

## Request flow overview

1. User authenticates and receives workspace-scoped access.
2. Studio sends mutation request to Core API.
3. Core API validates schema and permissions.
4. Revision is persisted in PostgreSQL.
5. Event is published for webhook and index workers.
6. Published content is served via Delivery API.

## Reliability design

- Idempotent write operations for retries
- Outbox pattern for reliable event publication
- Periodic backup verification drills
- Health checks and circuit breakers

## Scalability strategy

- Stateless API services behind load balancer
- Horizontal worker scaling
- Read-side caching and index offloading
- Workspace-aware throttling to prevent noisy neighbor impact