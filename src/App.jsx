import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home"
import Facilities from "./components/Facilities/Facilities"
import Rooms from "./components/Rooms/Rooms"
import ContactUs from "./components/ContactUs/ContactUs"
import "../src/App.css"

function App() {

  return (

    <>
      <div className="main" id="top">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Facilities" element={<Facilities />} />
            <Route path="/Rooms" element={<Rooms />} />
            <Route path="/Contact" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
