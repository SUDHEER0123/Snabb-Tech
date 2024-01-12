import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginHome from "./components/loginResigterResetForget/Home";
import ResetPassword from "./components/loginResigterResetForget/ResetPsassword";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginHome />} />
          <Route path="/login/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
