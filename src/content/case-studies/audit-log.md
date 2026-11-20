---
title: "Redesigning an audit log with about 16M rows"
client: "Workforce management SaaS, NZ"
summary: "I redesigned a single audit log table of about 16M rows into three tiers, partitioned by time."
result: "On staging, the dashboard query went from 89 ms to 11 ms after an index change."
stack: "Laravel, with time-partitioned tables and cursor pagination."
order: 4
---

## The situation

Every audit event was in one table: about 16M rows and 4.6 GB, with no tenant column and no partitioning.

## What I did

- Split events into three tiers by type: critical, operational and activity.
- Partitioned each tier by time, quarterly or monthly.
- Put the tenant first in the indexes, and used cursor pagination.
- Set retention per tier. Pay-related records are kept for 7 years, matching NZ rules for wage and time records.

## The result

On staging, the dashboard query went from 89 ms to 11 ms after an index change.

The new tables are still small, because companies are still moving over. So there are no production before-and-after times yet.
