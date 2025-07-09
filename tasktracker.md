# Task Tracker: Intelligent Commission Qualification Engine

## Core Engine
- [ ] Securely connect to NetSuite and Salesforce APIs using OAuth 2.0
- [ ] Fetch all invoices for commission month from NetSuite (Amount, Memo, Payment Status)
- [ ] Fetch relevant deal/order data from Salesforce (Order Submission Date, Approval Date, custom fields)
- [ ] Implement Dynamic Date Calculator for cutoffs (Order Submission/Approval)
- [ ] Apply qualification logic by sales rep classification (New Sales/Renewals)
- [ ] Disqualify deals past calculated cutoffs
- [ ] Multi-factor rule logic for installment deals (SKU 'INSTL' for MY, Memo 'PDC' for PH)
- [ ] Qualify "big logo merchants" with partial payment
- [ ] Maintain persistent DB of paid Deal IDs (deduplication)

## Automated AR Verification Engine
- [ ] For "Open" NetSuite invoices, check Salesforce for payment proof
- [ ] Check Payment Status on Salesforce Order
- [ ] Inspect attached files for payment slip
- [ ] (Advanced) OCR payment slip for payment date (user confirmation)
- [ ] Queue for manual review if all checks fail

## Admin Dashboard
- [ ] Secure, password-protected web dashboard
- [ ] Display four lists: Fully Qualified, Manual Review, Disqualified (with reasons), Duplicates

## Report Generation
- [ ] "Generate Sales Lead Report" button
- [ ] Export CSV/Excel with Account Name, Order Amount, Sales Rep

## Non-Functional
- [ ] End-to-end process completes in <30 minutes
- [ ] Dashboard loads in <3 seconds
- [ ] Scalable to 3x deal volume
- [ ] Encrypt and securely store all sensitive data
- [ ] Intuitive UI for non-technical users

## Out of Scope (v1.0)
- [ ] Sales rep-facing dashboard
- [ ] Commission calculation
- [ ] Scenario planning tools
- [ ] Manual override of deal status

## Future Considerations
- [ ] Sales rep dashboard
- [ ] Advanced analytics on dashboard
- [ ] BI tool integration for richer reporting 