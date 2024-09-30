// App.js
import React from "react";
import CarbonCompanyTable from "./CarbonCompanyTable";
import { Container, Typography } from "@mui/material";

const carbonData = [
  {
    companyId: "C101",
    companyName: "Eco Green Co.",
    state: "Maharashtra",
    city: "Mumbai",
    emissionLevel: "High",
  },
  {
    companyId: "C102",
    companyName: "Carbon Neutral Ltd.",
    state: "Delhi",
    city: "New Delhi",
    emissionLevel: "Low",
  },
  {
    companyId: "C103",
    companyName: "Green Energy Solutions",
    state: "Karnataka",
    city: "Bangalore",
    emissionLevel: "Moderate",
  },
  {
    companyId: "C104",
    companyName: "CleanAir Pvt. Ltd.",
    state: "Tamil Nadu",
    city: "Chennai",
    emissionLevel: "High",
  },
  {
    companyId: "C105",
    companyName: "EcoFuel Industries",
    state: "Gujarat",
    city: "Ahmedabad",
    emissionLevel: "Low",
  },
  {
    companyId: "C106",
    companyName: "BioCarbon Corp.",
    state: "West Bengal",
    city: "Kolkata",
    emissionLevel: "Moderate",
  },
  {
    companyId: "C107",
    companyName: "Sustainable Earth Ltd.",
    state: "Rajasthan",
    city: "Jaipur",
    emissionLevel: "Low",
  },
  {
    companyId: "C108",
    companyName: "EcoWave Technologies",
    state: "Punjab",
    city: "Chandigarh",
    emissionLevel: "High",
  },
  {
    companyId: "C109",
    companyName: "Solaris Power",
    state: "Kerala",
    city: "Thiruvananthapuram",
    emissionLevel: "Low",
  },
  {
    companyId: "C110",
    companyName: "WindSail Renewable",
    state: "Andhra Pradesh",
    city: "Vijayawada",
    emissionLevel: "Moderate",
  },
  // Add more entries as needed...
];

const App = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" style={{ margin: "20px 0", color: "#1976d2", fontWeight: "bold" }}>
        Carbon Emission Companies Table
      </Typography>
      <CarbonCompanyTable data={carbonData} />
    </Container>
  );
};

export default App;
