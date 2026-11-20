---
title: "Upgrading RosterIt from Laravel 9 to 12 and Vue 2 to 3"
client: "RosterIt"
clientType: "workforce management SaaS, NZ"
summary: "I was the only developer on RosterIt's upgrade. I took a ~100k-line app from Laravel 9 to 12 and Vue 2 to 3, and moved the front end to Vue 3 + Inertia."
result: "The app went from 2 tests to about 3,500 PHP tests, plus about 1,150 front-end tests."
stack: "Laravel 12, PHP 8.3, Vue 3, Inertia, Filament and MySQL."
order: 1
---

## The situation

RosterIt is a workforce management app for rosters, timesheets and leave. When the upgrade started, it ran on Laravel 9, PHP 8.1 and Vue 2, with a Nova admin. The codebase was about 100k lines, and it had 2 tests.

## What I did

I was the only developer on the upgrade.

- Upgraded Laravel 9 to 12 and PHP 8.1 to 8.3, between July and November 2025.
- Moved the front end to Vue 3 + Inertia, and rebuilt about 160 screens: rosters, timesheets, leave, settings, profiles, messages, reports and more.
- Replaced the Nova admin with Filament.
- Wrote tests as I went: about 3,500 PHP tests and about 1,150 front-end tests, where there were none before.

The old app kept running while companies move to the new one, one at a time. To make that safe, I built:

- A tool that moves one company at a time. On a company with 1.25M rows, the move took about 3.5 minutes, and every row matched.
- Feature flags per company.
- Deploys that only go out when the test suite passes, with automatic rollback.

## The result

The framework upgrade took about 4.5 months. The whole project, including new features and the rollout, has run for about 16 months and is still going.

The codebase is now about 390k lines, including about 118k lines of tests. The old app keeps serving customers while companies move to the new one.
