# Intelligent Commission Qualification Engine

## Overview
The Intelligent Commission Qualification Engine is an automation tool designed to streamline and automate the monthly process of identifying and verifying sales deals eligible for commission. It integrates with NetSuite and Salesforce, applies complex business rules, and produces a verified list of qualified deals, eliminating manual, error-prone workflows.

## Key Features
- Automated data fetching from NetSuite and Salesforce
- Dynamic business rule application for deal qualification
- Multi-factor AR verification engine (cross-checks payment status)
- Persistent deduplication of previously paid deals
- Admin dashboard for review, exception handling, and finalization
- One-click CSV export of qualified deals
- Real-time processing status and error tracking

## Technology Stack
- **Backend:** Python (FastAPI)
- **Frontend:** React (Vite)
- **Database:** PostgreSQL (planned)
- **APIs:** NetSuite REST API, Salesforce REST API
- **Authentication:** OAuth 2.0

## Project Structure
```
├── README.md              # Project documentation
├── tasktracker.md         # Development task breakdown
├── prd.md                 # Product Requirements Document
├── main.py                # FastAPI backend application
├── requirements.txt       # Python dependencies
├── frontend/              # React frontend application
│   ├── src/
│   │   ├── App.jsx       # Main dashboard component
│   │   └── App.css       # Dashboard styling
│   └── package.json      # Node.js dependencies
└── .gitignore            # Git ignore rules
```

## Setup and Installation

### Prerequisites
- Python 3.8+
- Node.js 18+ (installed via nvm)
- Git

### Backend Setup (FastAPI)

1. **Create and activate virtual environment:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install Python dependencies:**
   ```bash
   pip install fastapi 'uvicorn[standard]' python-dotenv
   ```

3. **Start the FastAPI server:**
   ```bash
   uvicorn main:app --reload
   ```
   
   The API will be available at [http://127.0.0.1:8000](http://127.0.0.1:8000)

4. **Test the API:**
   - Health check: [http://127.0.0.1:8000/health](http://127.0.0.1:8000/health)
   - Sample deals: [http://127.0.0.1:8000/deals](http://127.0.0.1:8000/deals)

### Frontend Setup (React)

1. **Install Node.js using nvm:**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   nvm install node
   ```

2. **Navigate to frontend directory and install dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Start the React development server:**
   ```bash
   npm run dev
   ```
   
   The frontend will be available at [http://localhost:5173](http://localhost:5173)

## Running the Full Application

1. **Start the backend** (in one terminal):
   ```bash
   source venv/bin/activate
   uvicorn main:app --reload
   ```

2. **Start the frontend** (in another terminal):
   ```bash
   cd frontend
   export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   npm run dev
   ```

3. **Access the application:**
   - Frontend Dashboard: [http://localhost:5173](http://localhost:5173)
   - Backend API: [http://127.0.0.1:8000](http://127.0.0.1:8000)
   - API Documentation: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

## Development Status

✅ **Completed:**
- Project documentation and task breakdown
- FastAPI backend with sample endpoints
- React frontend dashboard with API integration
- Professional UI/UX design
- Git repository setup and GitHub integration

🚧 **In Progress:**
- Database schema design
- NetSuite and Salesforce API integration
- Business rule engine implementation

📋 **Planned:**
- User authentication system
- Advanced filtering and search
- Report generation and export
- Email notifications
- Audit trail and logging

## API Endpoints

### Current Endpoints
- `GET /health` - API health check
- `GET /deals` - Retrieve sample deals

### Planned Endpoints
- `POST /deals/import` - Import deals from external systems
- `GET /deals/qualified` - Get qualified deals for commission
- `POST /deals/process` - Process deals through qualification engine
- `GET /reports/monthly` - Generate monthly commission report

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is proprietary and confidential.

## Support

For questions or issues, please refer to the task tracker or create an issue in the repository. 