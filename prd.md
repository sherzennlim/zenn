Intelligent Commission Qualification Engine
- Document Version: 1.0
- Date: July 8, 2025
- Status: Finalized for Development
- Author: PRD (Product Requirements Document Generator System)
- Stakeholders: Finance/Operations Process Owner, Head of Sales

1. Introduction & Overview

This document outlines the requirements for the "Intelligent Commission Qualification Engine," a custom-built automation tool. The primary purpose of this tool is to completely automate the monthly process of identifying and verifying sales deals eligible for commission. The engine will integrate directly with NetSuite and Salesforce to fetch data, apply a complex and evolving set of business rules, and produce a verified list of qualified deals, thereby eliminating a highly manual, time-consuming, and error-prone workflow. The goal is to create a "better than best-in-class" solution tailored specifically to our unique operational needs.
2. Problem Statement

The current monthly sales commission qualification process requires approximately one full day of manual work for a single employee. This process involves extracting multiple reports from NetSuite and Salesforce and performing complex data massaging and cross-referencing. This creates a significant operational bottleneck, results in a high key-person dependency, and, most critically, leads to potential underpayment errors. These errors occur due to a known data lag between when a customer's payment is received and when it is officially marked as "Paid" in NetSuite by the Accounts Receivable (AR) team, causing frustration and potential distrust from the sales team.
3. Goals & Objectives

The success of this project will be measured against the following SMART goals:
This content is only supported in a Lark Docs

4. Target Audience & Personas

- Primary Persona: The Finance/Operations Administrator
  - Needs: A reliable, automated system that handles all the complex rules. A clear dashboard to review the results, manage the few true exceptions, and finalize the list with confidence.
  - Frustrations: Wasting time on repetitive manual tasks, chasing the AR team for payment confirmations, and dealing with complaints from sales reps about missing commissions.
- Secondary Persona: The Sales Team Lead
  - Needs: A timely and accurate list of their team's qualified deals for the month to review and approve.
  - Frustrations: Delays in receiving the commission report, which impacts their ability to forecast and manage their team.

5. User Stories & Functional Requirements

5.1. Core: Automated Multi-System Qualification Engine

- User Story: "As an Admin, I want the system to automatically connect to NetSuite and Salesforce at the start of the month to pull all the data needed for commission processing so I don't have to manually run reports."
- FR-1: The system MUST securely connect to NetSuite and Salesforce APIs using OAuth 2.0 credentials.
- FR-2: The system MUST fetch all invoices within the commission month from NetSuite, including fields like Amount, Memo, and Payment Status.
- FR-3: The system MUST fetch relevant deal/order data from Salesforce, including Order Submission Date, Order Approval Date, and custom fields.
- FR-4: The system MUST implement a Dynamic Date Calculator to determine the cutoffs for "Order Submission Date" (first working day of the next month) and "Order Approval Date" (third working day of the next month).
- FR-5: The system MUST apply qualification logic based on source (New Sales/Renewals) by looking up the sales rep classification.
- FR-6: The system MUST check for and disqualify deals past the calculated cutoffs.
- FR-7: The system MUST implement Multi-Factor Rule Logic to identify installment deals: by SKU ('INSTL') for MY region and by Memo containing 'PDC' for PH region.
- FR-8: The system MUST implement a rule to correctly qualify "big logo merchants" where partial payment is sufficient to cover software costs.
- FR-9: The system MUST maintain a persistent database of all previously paid Deal IDs and automatically disqualify any new invoice that is a duplicate.

5.2. Key Feature: The Automated AR Verification Engine

- User Story: "As an Admin, when NetSuite shows an invoice as 'Open', I want the system to automatically check Salesforce for other proof of payment so that valid deals aren't incorrectly disqualified."
- FR-10: For any deal that meets all criteria except for a "Paid" status in NetSuite, the system MUST automatically initiate a deep-dive check in Salesforce.
- FR-11: The system MUST check the Payment Status field on the corresponding Salesforce Order. If "Paid," the deal MUST be moved to the "Fully Qualified" list.
- FR-12: If FR-11 fails, the system MUST inspect the files attached to the Salesforce Order to verify the existence of a payment slip (e.g., file named "payment_slip*").
- FR-13 (Advanced): Upon user confirmation, implement OCR (Optical Character Recognition) to read the payment date from the attached file to confirm it's within the commission month. If confirmed, the deal MUST be moved to the "Fully Qualified" list.
- FR-14: Only if all automated checks (FR-11, FR-12, FR-13) fail, the deal should be placed in a "Manual Review Required" queue.

5.3. Interface: The Admin Review & Finalization Dashboard

- User Story: "As an Admin, I want a single dashboard where I can clearly see the results of the automation, review any exceptions, and finalize the monthly commission list."
- FR-15: The system MUST provide a secure, password-protected web dashboard for the administrator.
- FR-16: The dashboard MUST display the results in four distinct lists:
  1. ✅ Fully Qualified Deals
  2. ⚠️ Manual Review Required (deals that failed automated AR verification)
  3. ⛔ Disqualified Deals (with the specific reason for failure clearly listed for each)
  4. 🔄 Duplicate Deals (deals correctly excluded from the current run)

5.4. Output: One-Click Sales Lead Report

- User Story: "As an Admin, I want to be able to generate the final report for the Sales Lead with a single click."
- FR-17: The dashboard MUST feature a "Generate Sales Lead Report" button.
- FR-18: Clicking this button MUST generate a CSV/Excel file containing ONLY the deals from the "Fully Qualified" list.
- FR-19: The report MUST contain only three columns: Account Name, Sum of Order Amount, Sales Rep.

6. Non-Functional Requirements

- Performance: The entire automated process should complete within 30 minutes. The Admin Dashboard should load in under 3 seconds.
- Scalability: The architecture must handle a 3x growth in deal volume over the next two years without significant degradation in performance.
- Security: All API keys, credentials, and sensitive data must be encrypted and stored in a secure vault (e.g., AWS Secrets Manager).
- Usability: The Admin Dashboard must be intuitive, requiring minimal training for a non-technical finance user.

7. Out-of-Scope (for Version 1.0)

- A sales rep-facing dashboard.
- Commission calculation (the engine only qualifies deals; it does not calculate the commission amount).
- "What-if" scenario planning tools.
- Manual override capabilities to force a disqualified deal into the qualified list (all changes must follow the defined logic).

8. Proposed Technology Stack & Architecture

- Implementation Approach: Full-Code Development
- Front-end (Dashboard): React or Vue.js
- Back-end (Engine): Python (with Pandas) or Node.js, deployed as a serverless function (AWS Lambda / Google Cloud Function).
- Database (Deduplication & State): PostgreSQL or MongoDB.
- Infrastructure: AWS, GCP, or Azure.
- Key Integrations: NetSuite SuiteTalk/REST API, Salesforce REST API, an OCR Service API (e.g., Amazon Textract) if FR-13 is implemented.

9. Implementation Resources for Development Team

The development team should index and reference the official API documentation for the following services:
- Salesforce: Salesforce Platform APIs (REST API for data, Connect API for files).
- NetSuite: NetSuite Web Services Platform (SuiteTalk / REST Web Services).
- OCR (if applicable): Amazon Textract or Google Vision AI documentation.

10. Future Considerations (Phase 2)

- Developing a simple, read-only dashboard for individual sales reps to see their own qualified deals.
- Adding more advanced analytics on the Admin Dashboard to show trends in deal qualification over time.
- Integrating with a business intelligence tool for richer reporting.