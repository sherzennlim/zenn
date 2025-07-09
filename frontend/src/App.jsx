import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [deals, setDeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchDeals()
  }, [])

  const fetchDeals = async () => {
    try {
      setLoading(true)
      const response = await fetch('http://127.0.0.1:8000/deals')
      if (!response.ok) {
        throw new Error('Failed to fetch deals')
      }
      const data = await response.json()
      setDeals(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const checkHealth = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/health')
      const data = await response.json()
      alert(`API Health: ${data.status}`)
    } catch (err) {
      alert(`API Error: ${err.message}`)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🏢 Intelligent Commission Qualification Engine</h1>
        <p>Admin Dashboard</p>
        <button onClick={checkHealth} className="health-btn">
          Check API Health
        </button>
      </header>

      <main className="main-content">
        <section className="deals-section">
          <h2>📊 Deals Overview</h2>
          
          {loading && <p>Loading deals...</p>}
          {error && <p className="error">Error: {error}</p>}
          
          {!loading && !error && (
            <div className="deals-grid">
              {deals.length === 0 ? (
                <p>No deals found</p>
              ) : (
                deals.map(deal => (
                  <div key={deal.id} className="deal-card">
                    <h3>{deal.account_name}</h3>
                    <p><strong>Amount:</strong> ${deal.amount.toLocaleString()}</p>
                    <p><strong>Sales Rep:</strong> {deal.sales_rep}</p>
                    <p><strong>Status:</strong> 
                      <span className={`status ${deal.status.toLowerCase().replace(' ', '-')}`}>
                        {deal.status}
                      </span>
                    </p>
                  </div>
                ))
              )}
            </div>
          )}
        </section>

        <section className="actions-section">
          <h2>⚡ Quick Actions</h2>
          <div className="action-buttons">
            <button onClick={fetchDeals} className="action-btn">
              🔄 Refresh Deals
            </button>
            <button className="action-btn" disabled>
              📥 Import from NetSuite
            </button>
            <button className="action-btn" disabled>
              📊 Generate Report
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
