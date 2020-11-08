/*
 * @Descripttion: 
 * @Author: tom-z(spirit108@foxmail.com)
 * @Date: 2020-11-02 19:49:39
 * @LastEditors: tom-z(spirit108@foxmail.com)
 * @LastEditTime: 2020-11-07 11:16:46
 */
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import TMF from "../layout/TMF/TMF"
import TSM from "../layout/adminPage/adminPage";
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