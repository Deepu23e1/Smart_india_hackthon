import React, { useState } from 'react';
import { TextField, Button, MenuItem, Typography, Grid, Paper, Avatar } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business'; // Add a business icon from Material UI

const LargeScaleIndustryForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    address: '',
    industryType: '',
    annualEnergyConsumption: '',
    fuelType: '',
    transportation: '',
    wasteGenerated: '',
    waterConsumption: '',
    productionCapacity: '',
    emissionReductionInitiatives: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    // Add API call or data handling logic here
  };

  return (
    <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
      <Paper elevation={4} style={{ padding: '30px', width: '70%', backgroundColor: '#f8f9fa' }}>
        <Grid container justifyContent="center" alignItems="center" style={{ marginBottom: '20px' }}>
          <Avatar style={{ backgroundColor: '#1976d2', marginRight: '10px' }}>
            <BusinessIcon />
          </Avatar>
          <Typography variant="h5" align="center" style={{ fontWeight: 'bold', color: '#1976d2' }}>
            Industry Carbon Footprint Data Entry Form
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Registration Number"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Industry Type"
                name="industryType"
                value={formData.industryType}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Annual Energy Consumption (in kWh)"
                name="annualEnergyConsumption"
                value={formData.annualEnergyConsumption}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Type of Fuel Used"
                name="fuelType"
                value={formData.fuelType}
                onChange={handleChange}
                select
                fullWidth
                margin="normal"
                required
              >
                <MenuItem value="Electricity">Electricity</MenuItem>
                <MenuItem value="Natural Gas">Natural Gas</MenuItem>
                <MenuItem value="Coal">Coal</MenuItem>
                <MenuItem value="Diesel">Diesel</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Transportation (Vehicle Emissions per year in tons)"
                name="transportation"
                value={formData.transportation}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Waste Generated (tons per year)"
                name="wasteGenerated"
                value={formData.wasteGenerated}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Water Consumption (liters per year)"
                name="waterConsumption"
                value={formData.waterConsumption}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Production Capacity (tons per year)"
                name="productionCapacity"
                value={formData.productionCapacity}
                onChange={handleChange}
                fullWidth
                margin="normal"
                required
                type="number"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Emission Reduction Initiatives"
                name="emissionReductionInitiatives"
                value={formData.emissionReductionInitiatives}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default LargeScaleIndustryForm;
