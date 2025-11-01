import { useState } from "react"
import { Link } from "react-router-dom"
import ProgressIndicator from "../components/ProgressIndicator"
import "./Pages.css"

function RentSummary() {
  const [downloadSuccess, setDownloadSuccess] = useState(false)

  const userName = "Kenn Jarangue"
  const breadcrumbLabels = ["Requirements", "Payment", "Confirmation"]

  const billingDetails = {
    receiptNumber: "5239-2139",
    name: "KENN JARANGUE",
    contactNumber: "09628435722380",
    paymentMethod: "GCash",
    amount: "₱500.00",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    time: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }

  const handleDownloadReceipt = () => {
    // Simulate receipt download
    const receiptContent = `
RECEIPT
=================================
Receipt #: ${billingDetails.receiptNumber}
Date: ${billingDetails.date}
Time: ${billingDetails.time}
=================================
Name: ${billingDetails.name}
Contact: ${billingDetails.contactNumber}
=================================
Payment Method: ${billingDetails.paymentMethod}
Amount: ${billingDetails.amount}
=================================
Thank you for your rental!
    `

    const element = document.createElement("a")
    const file = new Blob([receiptContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `receipt-${billingDetails.receiptNumber}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    setDownloadSuccess(true)
    setTimeout(() => setDownloadSuccess(false), 3000)
  }

  return (
    <main className="page">
      <div className="container">
        <ProgressIndicator currentStep={3} totalSteps={3} userName={userName} labels={breadcrumbLabels} />

        <section className="summary-section">
          <h1 className="section-title">Rent Summary</h1>

          <div className="summary-content">
            <div className="payment-info">
              <h2 className="subsection-title">Payment Confirmed</h2>
              <div className="payment-status-badge">✓ Success</div>
              <div className="price-display">
                <span className="price-symbol">₱</span>
                <span className="price-amount">500.00</span>
              </div>
              <div className="payment-icon-large">💳</div>
              <p className="payment-confirmation-text">Your payment has been successfully processed</p>
            </div>

            <div className="billing-details">
              <h2 className="subsection-title">Receipt Details</h2>
              <div className="billing-table">
                <div className="billing-row">
                  <span className="billing-label">Receipt Number</span>
                  <span className="billing-value receipt-number">{billingDetails.receiptNumber}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Name</span>
                  <span className="billing-value">{billingDetails.name}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Contact Number</span>
                  <span className="billing-value">{billingDetails.contactNumber}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Payment Method</span>
                  <span className="billing-value">{billingDetails.paymentMethod}</span>
                </div>
                <div className="billing-row">
                  <span className="billing-label">Date & Time</span>
                  <span className="billing-value">
                    {billingDetails.date} at {billingDetails.time}
                  </span>
                </div>
              </div>
            </div>

            {downloadSuccess && <div className="success-message">Receipt downloaded successfully!</div>}

            <div className="action-buttons">
              <button className="button secondary" onClick={handleDownloadReceipt}>
                ⬇ Download Receipt
              </button>
              <Link to="/" className="button primary">
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default RentSummary