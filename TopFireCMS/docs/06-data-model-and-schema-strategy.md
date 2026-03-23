# Data Model and Schema Strategy

## Design goals

- Support Sanity-like schema flexibility.
- Keep strong validation and API consistency.
- Enable safe schema evolution over time.

## Core entities

- agency
- workspace
- user
- role
- permission
- schema_definition
- schema_version
- document
- document_revision
- workflow_instance
- audit_event
- asset

## Storage approach

Relational tables hold governance and identity metadata.
Document content is stored as JSONB with:
- schema_key
- schema_version
- workspace_id
- locale
- state (draft or published)
- created and updated metadata

## Schema model

Each schema definition includes:
- type name and description
- field definitions
- field validation rules
- reference constraints
- localization settings
- preview configuration

## Schema lifecycle

1. Draft schema change.
2. Run compatibility checks.
3. Validate against sampled documents.
4. Approve and register new schema version.
5. Run migration plan if required.
6. Promote to production environment.

## Compatibility rules

Allowed without migration:
- adding optional fields
- adding new content types

Requires migration:
- renaming fields
- changing field types
- changing required constraints

Blocked unless explicitly overridden:
- destructive removals with active references

## API contract generation

Schema registry should generate:
- runtime validators
- TypeScript types for clients
- API schema references
- search mapping hints

## Document revision strategy

- immutable revisions
- explicit published pointer
- full audit trail of transitions
- rollback by promoting a prior revision

## Localization strategy

Support two modes:
- field-level localization
- document-level localization

Start with document-level localization in MVP for implementation speed.

## Example schema concept

A Campaign content type may include:
- title (required text)
- slug (required unique per workspace)
- summary (optional text)
- heroImage (asset reference)
- body (portable rich content blocks)
- relatedServices (array of references)
- publishDate (datetime)

## Why this works for agency use

- Flexible enough for varied client content.
- Governed enough for reliable long-term maintenance.
- Versioned enough for safe changes across active projects.