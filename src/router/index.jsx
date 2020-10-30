import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import TMF from "../layout/TMF/TMF"
import TSM from "../layout/TSM/TSM"
import "../assets/theme/one.scss"

function App() {
  return (
    <Router>
      <div className="theme-one">
        <TSM></TSM>
      </div>
    </Router>
  )
}
export default App;