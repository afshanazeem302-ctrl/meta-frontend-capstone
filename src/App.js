import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import ConfirmedBooking from "./components/ConfirmedBooking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;