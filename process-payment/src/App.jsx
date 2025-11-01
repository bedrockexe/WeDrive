import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import BookingDetails from "./pages/BookingDetails"
import RentSummary from "./pages/RentSummary"

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<BookingDetails />} />
        <Route path="/summary" element={<RentSummary />} />
      </Routes>
    </div>
  )
}

export default App
