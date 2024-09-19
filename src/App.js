import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import from react-router-dom
import HomePage from "./components/userinterface/homepage/HomePage"; // Ensure the path is correct

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
