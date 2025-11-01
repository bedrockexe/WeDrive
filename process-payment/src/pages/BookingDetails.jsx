import { useState } from "react"
import { Link } from "react-router-dom"
import ProgressIndicator from "../components/ProgressIndicator"
import "./Pages.css"

function BookingDetails() {
  const [selectedPayment, setSelectedPayment] = useState(null)

  const userName = "Kenn Jarangue"
  const breadcrumbLabels = ["Requirements", "Payment", "Confirmation"]

  const paymentMethods = [
    { id: 1, name: "Credit/Debit Card", icon: "💳" },
    { id: 2, name: "Credit/Debit Card", icon: "💳" },
    { id: 3, name: "Credit/Debit Card", icon: "💳" },
    { id: 4, name: "Credit/Debit Card", icon: "💳" },
    { id: 5, name: "Credit/Debit Card", icon: "💳" },
    { id: 6, name: "Credit/Debit Card", icon: "💳" },
  ]

  return (
    <main className="page">
      <div className="container">
        <ProgressIndicator currentStep={2} totalSteps={3} userName={userName} labels={breadcrumbLabels} />

        <section className="booking-section">
          <h1 className="section-title">Booking Details</h1>

          <div className="booking-content">
            <div className="user-info">
              <p className="user-name-large">Kenn Jarangue</p>
              <p className="price-large">₱500.00</p>
              <p className="amount-label">Amount to Pay</p>
            </div>

            <div className="payment-section">
              <h2 className="section-subtitle">Select Payment Method</h2>
              <div className="payment-grid">
                {paymentMethods.map((method) => (
                  <button
                    key={method.id}
                    className={`payment-card ${selectedPayment === method.id ? "selected" : ""}`}
                    onClick={() => setSelectedPayment(method.id)}
                  >
                    <span className="payment-icon">{method.icon}</span>
                    <span className="payment-name">{method.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="action-buttons">
              <Link to="/" className="button secondary">
                Back
              </Link>
              <Link
                to="/summary"
                className={`button primary ${selectedPayment ? "" : "disabled"}`}
                onClick={(e) => !selectedPayment && e.preventDefault()}
              >
                Continue
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BookingDetails