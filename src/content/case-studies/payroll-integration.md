---
title: "Payroll integration for a city council"
client: "NZ city council, through a workforce management SaaS"
summary: "Built the TechOne and iPayroll integration: pay code mapping and overtime splits, working with an external implementation partner. Before refactoring a Xero NZ payroll exporter, I wrapped it in golden master tests so nothing changed by accident."
tech: ["Laravel", "TechOne", "iPayroll", "Xero"]
featured: true
order: 2
---

## The problem

A NZ city council needed timesheet data from the workforce management platform to flow into its payroll, which runs on TechOne and iPayroll. Council pay rules are detailed, with many pay codes and overtime rules.

Separately, the platform's Xero NZ payroll exporter needed a refactor. It had no tests, and any change risked people being paid the wrong amount.

## What I did

- Mapped the platform's pay codes to the council's payroll codes.
- Built overtime splits, so hours over each limit went to the right pay code.
- Worked with the council's external implementation partner to agree on the format and check the results.
- For the Xero exporter, I wrote golden master tests first. They record the exporter's current output for real-world cases. Then I refactored, with those tests as a safety net.

## The result

The refactored Xero exporter gives the same output as before, checked by the golden master tests.

[TODO: add numbers, e.g. number of staff paid through the integration, go-live date, manual hours saved per pay run.]
