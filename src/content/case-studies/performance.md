---
title: "Fixing slow screens for RosterIt's largest customers"
client: "Workforce management SaaS, NZ"
summary: "I measured the slowest screens on the largest customers' data and rewrote the queries behind them."
result: "The roster review screen went from 44 seconds and 10,674 queries to about 2 seconds."
stack: "Laravel and MySQL."
order: 2
---

## The situation

Some RosterIt screens were very slow for the largest customers. Roster review, for example, took 44 seconds and ran 10,674 database queries.

## What I did

I measured each slow screen on the largest customers' data, found the queries behind it, and rewrote them.

One example: the roster for a 1,500-staff company used a single `OR` filter that MySQL can't use an index for. It took 4.9 s per week. I rewrote it as three indexed lookups and merged the results. I compared old and new on 60 cases, and the output was identical.

## The result

Measured on the largest customers:

- Roster review: 44 s and 10,674 queries, down to about 2 s.
- Bulk assign staff list: 50 s, down to 4 s.
- Staff picker: 5.1 s, down to 1.1 s, and 573 queries down to a handful.
