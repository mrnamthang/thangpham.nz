---
title: "Laravel and Vue upgrades"
summary: "Upgrade Laravel, Vue and Inertia on a live app, one step at a time, with tests in place before each change. For example: Laravel 9 to 12, Vue 2 to 3, Inertia v1 to v2."
order: 1
---

### What this looks like

- I start with a short audit: versions, packages, test coverage and the parts most likely to break.
- I add tests around the main user flows before changing anything.
- I upgrade one major version at a time, in small pull requests your team can review.
- Changes go out in your normal releases. Your users keep working.

### A good fit if

- Your Laravel version no longer gets security fixes.
- You still run Vue 2, which reached end of life at the end of 2023.
- The upgrade keeps getting pushed back because nobody is sure what will break.
