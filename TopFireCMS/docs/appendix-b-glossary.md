# Glossary

## Agency workspace
A client-scoped environment where content, users, and workflows are isolated.

## Schema registry
A service that stores and versions content model definitions.

## Document revision
An immutable snapshot of a document at a point in time.

## Draft state
Content state where edits are in progress and not publicly published.

## Published state
Content state that is available to delivery API consumers.

## Workflow instance
A tracked approval process for content from draft to publish.

## Compatibility check
Validation step that evaluates whether schema changes can be safely applied.

## Outbox pattern
A reliability pattern that ensures data changes and events remain consistent.

## Dead-letter queue
A queue that stores failed asynchronous messages for investigation and replay.

## RPO
Recovery Point Objective, the maximum acceptable data loss window.

## RTO
Recovery Time Objective, the maximum acceptable service restoration time.

## Noisy neighbor
A tenancy issue where one workspace consumes disproportionate resources and impacts others.