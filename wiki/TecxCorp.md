# TecxCorp

Company Operating System and Context.

## Legal Identity
- **Legal Name (VI):** CÔNG TY TRÁCH NHIỆM HỮU HẠN TECXMATE
- **Legal Name (EN):** TECXMATE COMPANY LIMITED
- **Tax Code:** 0319431089
- **Incorporation Date:** 2026-03-06
- **Primary Business:** Software publishing

## Core Team
- **CEO / General Director:** [[Đoàn Hoàng Phương]]
  - Email: niko.tecx@gmail.com
  - Phone: 0337460602
  - Address (Current): Taipei, Taiwan
- **CTO / Founder:** [[Brian Nguyen]] (Brian Doan)
  - Nationality: Vietnamese
  - Role: Technical lead and infrastructure owner

## Official Contacts
- **General Support/Automation:** official@tecxmate.com
- **Tax/Legal Email:** niko.tecx@gmail.com

## Operational Infrastructure
- **Company OS Repository:** `nikolasdoan/tecxcorp` (private)
- **Task Management:** Linear (Canonical source of truth)
- **Code/Issues:** GitHub
- **Automation CLI:** `gog` (Google Drive/Sheets/Docs automation)
- **Deployment:**
  - `niko-pc`: Ubuntu host for scheduled jobs (Phase 1 & 2)
  - `tecxbot`: Vercel-hosted LINE bot for task alerts and approvals

## External Stakeholders
- **Clients:**
  - [[TT Human Resource Company Limited]] (hoadon1001@gmail.com)

## Workflow Patterns
- **Contract Generation:** Automated via Google Sheets -> gog -> Google Docs/PDF.
- **Task Dispatch:** LINE/Messenger alerts for new assignments.
- **Company Brain:** The `vault/` directory in the `tecxcorp` repo serves as the source of truth for procedures.
