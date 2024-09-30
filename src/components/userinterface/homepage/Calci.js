import React, { useState } from "react";

const CarbonCalculator = () => {
  const [currentEmissions, setCurrentEmissions] = useState(0);
  const [scenarioImpact, setScenarioImpact] = useState(0);
  const [scenarioType, setScenarioType] = useState("afforestation"); // Default scenario

  const handleCalculate = () => {
    let impact = 0;

    // Define impact values (in tons of CO2)
    if (scenarioType === "afforestation") {
      impact = currentEmissions * 0.25; // Example: 25% reduction
    } else if (scenarioType === "deforestationStop") {
      impact = currentEmissions * 0.15; // Example: 15% reduction
    }

    setScenarioImpact(impact);
  };

  return (
    <div style={{ width: "70%", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center" }}>Carbon Emission Calculator</h2>
      <div>
        <label>
          Current Carbon Emissions (in tons):
          <input
            type="number"
            value={currentEmissions}
            onChange={(e) => setCurrentEmissions(e.target.value)}
            style={{ margin: "10px", padding: "5px", width: "100%" }}
          />
        </label>
      </div>
      <div>
        <label>
          Choose Scenario:
          <select
            value={scenarioType}
            onChange={(e) => setScenarioType(e.target.value)}
            style={{ margin: "10px", padding: "5px", width: "100%" }}
          >
            <option value="afforestation">Afforestation</option>
            <option value="deforestationStop">Stop Deforestation</option>
          </select>
        </label>
      </div>
      <button onClick={handleCalculate} style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
        Calculate Impact
      </button>
      {scenarioImpact > 0 && (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Estimated Reduction in Carbon Emissions: {scenarioImpact.toFixed(2)} tons
        </h3>
      )}
    </div>
  );
};

export default CarbonCalculator;
