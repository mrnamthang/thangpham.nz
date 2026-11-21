---
title: "Payroll exports for TechOne, iPayroll and Xero"
client: "RosterIt"
clientType: "workforce management SaaS, NZ"
summary: "I built and fixed the exports that send RosterIt timesheets to payroll, including a TechOne export used by an NZ city council, and rebuilt the Xero NZ Payroll sync."
result: "Over the last 12 months, the TechOne and iPayroll exports covered about 450 employees across about 10 companies."
stack: "Laravel, with exports for TechOne and iPayroll and the Xero NZ Payroll API."
order: 3
---

## The situation

RosterIt customers send their timesheets to payroll. An NZ city council uses TechOne. Other companies use iPayroll or Xero NZ Payroll. Pay rules are detailed, and a mistake means someone gets paid the wrong amount.

## What I did

- **TechOne:** the export splits shifts into ordinary and overtime pieces and maps 12 pay component codes, including overtime at 1.5x and 2x, public holidays, leave types and days in lieu. I fixed a bug where overtime was counted twice: a 10-hour day was exported as 10 + 10 hours.
- **iPayroll:** the export maps 6 pay rate codes and 8 leave codes, set per company.
- **Xero NZ Payroll:** I rebuilt the API sync, with its own OAuth2 layer and code mapping per company.

To keep pay correct, I added 49 characterization tests that pin the current pay behaviour, plus a 206-test audit suite for the business logic around overtime and pay exports.

## The result

Over the last 12 months:

- TechOne: about 3 companies, about 190 employees and about 2,200 timesheets.
- iPayroll: about 7 active companies, about 260 employees and about 3,400 timesheets.

Together, that is about 450 employees across about 10 companies.
