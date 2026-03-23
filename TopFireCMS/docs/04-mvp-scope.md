# MVP Scope

## MVP objective

Deliver a production-capable headless CMS for one agency and multiple client workspaces with reliable content modeling, governance, and delivery APIs.

## In scope

### Platform foundations
- Agency account and workspace model
- Client workspace creation and management
- Environment concept (dev, staging, production)

### Content modeling
- Schema registry with versioning
- Content types, fields, references, and validation rules
- Schema migration tooling (forward and rollback)

### Content lifecycle
- Draft and published states
- Revision history and rollback
- Scheduled publishing
- Content status indicators

### Workflow and permissions
- Role-based access control
- Approval workflow (submit, approve, reject)
- Audit trail for key actions

### Delivery
- Read API for frontend channels
- Webhooks for publish and update events
- Basic query filters and pagination

### Operations
- Structured logs and metrics
- Backup and restore process
- Basic tenant-aware usage limits

## Out of scope

- Real-time co-editing with conflict-free shared cursors
- Advanced visual page builder
- Public plugin marketplace
- Multi-region active-active replication
- Full self-service client signup

## Non-functional targets

- API p95 latency under 250ms for common reads
- 99.9% monthly availability target for MVP
- Recovery objective defined and tested
- Zero cross-workspace data leakage

## Acceptance criteria

1. New client workspace can be provisioned in under 30 minutes.
2. New content type can be created and used without code changes in frontend consumers that rely on generic rendering paths.
3. Editors can complete draft-to-publish workflow with clear status and validation.
4. API consumers can retrieve published content with stable contracts.
5. Audit logs and backups are validated in a test scenario.

## MVP completion gate

MVP is complete when:
- all in-scope capabilities are available
- reliability and security checks pass
- two pilot client workspaces are live