# Intelligent Commission Qualification Engine

## Overview
The Intelligent Commission Qualification Engine is an automation tool designed to streamline and automate the monthly process of identifying and verifying sales deals eligible for commission. It integrates with NetSuite and Salesforce, applies complex business rules, and produces a verified list of qualified deals, eliminating manual, error-prone workflows.

## Key Features
- Automated data fetching from NetSuite and Salesforce
- Dynamic business rule application for deal qualification
- Multi-factor AR verification engine (cross-checks payment status)
- Persistent deduplication of previously paid deals
- Admin dashboard for review, exception handling, and finalization
- One-click report generation for Sales Lead
- Secure, scalable, and user-friendly architecture

## Technology Stack
- **Frontend:** React or Vue.js (Admin Dashboard)
- **Backend:** Python (with Pandas) or Node.js (Serverless: AWS Lambda/Google Cloud Function)
- **Database:** PostgreSQL or MongoDB
- **Integrations:** NetSuite SuiteTalk/REST API, Salesforce REST API, OCR Service API (optional)
- **Infrastructure:** AWS, GCP, or Azure

## Functional Requirements (Highlights)
- Secure OAuth 2.0 API connections
- Fetch and process invoices and deals with custom logic
- Dynamic date cutoffs for qualification
- Multi-factor rule logic for installment deals
- AR verification via Salesforce (including file/OCR checks)
- Dashboard with four deal lists: Fully Qualified, Manual Review, Disqualified, Duplicates
- Exportable report (CSV/Excel) for Sales Lead

## Non-Functional Requirements
- End-to-end process completes in under 30 minutes
- Dashboard loads in under 3 seconds
- Scalable to 3x current deal volume
- All sensitive data encrypted and securely stored
- Intuitive for non-technical finance users

## Out of Scope (v1.0)
- Sales rep-facing dashboard
- Commission calculation (qualification only)
- Scenario planning tools
- Manual override of deal status

## Getting Started
1. Clone the repository
2. Install dependencies (backend and frontend)
3. Set up environment variables and secrets (API keys, DB credentials)
4. Deploy backend (serverless or server)
5. Run frontend dashboard

## References
- [Salesforce Platform APIs](https://developer.salesforce.com/docs/atlas.en-us.api_rest.meta/api_rest/)
- [NetSuite Web Services](https://www.netsuite.com/portal/developers/resources/apis.shtml)
- [Amazon Textract](https://aws.amazon.com/textract/) / [Google Vision AI](https://cloud.google.com/vision)

## Future Considerations
- Sales rep dashboard
- Advanced analytics and trend reporting
- BI tool integration for richer reporting

## Running the Backend (FastAPI)

1. **Activate the virtual environment:**
   
   On macOS/Linux:
   ```sh
   source venv/bin/activate
   ```
   
   On Windows:
   ```sh
   venv\Scripts\activate
   ```

2. **Start the FastAPI server:**
   ```sh
   uvicorn main:app --reload
   ```
   
   The API will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000)

3. **Test the health check endpoint:**
   Visit [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health) in your browser or use curl:
   ```sh
   curl http://127.0.0.1:8000/health
   ``` 