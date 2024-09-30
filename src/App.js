import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Correct import from react-router-dom
import HomePage from "./components/userinterface/homepage/HomePage"; // Ensure the path is correct
import CompanyCard from "./components/userinterface/homepage/Companycard";
import CarbonData from "./components/userinterface/homepage/CarbonData";
import LargeScaleIndustryForm from "./components/userinterface/homepage/Form";
import MultiActionAreaCard from "./components/userinterface/homepage/Usercard";
import CarbonCalculator from "./components/userinterface/homepage/Calci";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/company" element={<CompanyCard />} />
        </Routes>
        <Routes>
          <Route path="/admin" element={< CarbonData  />} />
        </Routes>
        <Routes>
          <Route path="/form" element={< LargeScaleIndustryForm  />} />
        </Routes>


        <Routes>
           <Route path="/user" element={< MultiActionAreaCard  />} />
        </Routes>

        <Routes>
           <Route path="/calci" element={< CarbonCalculator />} />
        </Routes>


        
      </Router>
    </div>
  );
}

export default App;
