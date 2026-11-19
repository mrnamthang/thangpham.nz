---
title: "An audit log with 100M+ records"
client: "Workforce management SaaS, New Zealand"
summary: "Redesigned an audit log with over 100 million records into a partitioned, tiered setup. [TODO: add the result, e.g. query time from X to Y, or storage cut by Z%.]"
# TODO: add the database (MySQL or PostgreSQL)
tech: ["Laravel"]
featured: true
order: 3
---

## The problem

The app recorded every change in one audit log table. It grew past 100 million records.

[TODO: what went wrong, e.g. slow audit screens, slow backups, high storage cost.]

## What I did

- Split the table into partitions [TODO: e.g. by month], so queries only read the data they need.
- Moved older records to a cheaper storage tier. [TODO: describe the tiers, e.g. recent data in the main database, older data archived to S3.]
- Moved the existing records across while the app stayed live. [TODO: confirm.]
- Kept the audit screens working the same way for users.

## The result

[TODO: add numbers, e.g. query time from X seconds to Y ms, table size from X GB to Y GB.]
