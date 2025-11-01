import "./ProgressIndicator.css"

function ProgressIndicator({ currentStep, totalSteps, labels, userName }) {
  return (
    <div className="progress-container">
      <div className="progress-track">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="progress-item">
            <div
              className={`progress-circle ${
                index + 1 <= currentStep ? "active" : ""
              } ${index + 1 === currentStep ? "current" : ""}`}
            >
              {index + 1}
            </div>
            {index < totalSteps - 1 && <div className={`progress-line ${index + 1 < currentStep ? "active" : ""}`} />}
          </div>
        ))}
      </div>
      {labels && (
        <div className="progress-labels">
          {labels.map((label, index) => (
            <span key={index} className={`progress-label ${index + 1 <= currentStep ? "active" : ""}`}>
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProgressIndicator
