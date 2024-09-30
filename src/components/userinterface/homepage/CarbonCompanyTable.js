// CarbonCompanyTable.js
import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Typography } from "@mui/material";
import BusinessIcon from '@mui/icons-material/Business'; // Company icon
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Location icon
import AssessmentIcon from '@mui/icons-material/Assessment'; // Emission level icon

const CarbonCompanyTable = ({ data }) => {
  return (
    <TableContainer component={Paper} style={{ marginTop: "20px", padding: "10px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2' }}>Company ID</Typography></TableCell>
            <TableCell><Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2' }}>Company Name</Typography></TableCell>
            <TableCell><Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2' }}>State</Typography></TableCell>
            <TableCell><Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2' }}>City</Typography></TableCell>
            <TableCell><Typography variant="h6" style={{ fontWeight: 'bold', color: '#1976d2' }}>Emission Level</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((company, index) => (
            <TableRow key={index}>
              <TableCell>{company.companyId}</TableCell>
              <TableCell>
                <Avatar style={{ backgroundColor: '#1976d2', marginRight: '10px', display: 'inline-flex' }}>
                  <BusinessIcon />
                </Avatar>
                {company.companyName}
              </TableCell>
              <TableCell>
                <Avatar style={{ backgroundColor: '#1976d2', marginRight: '10px', display: 'inline-flex' }}>
                  <LocationOnIcon />
                </Avatar>
                {company.state}
              </TableCell>
              <TableCell>
                <Avatar style={{ backgroundColor: '#1976d2', marginRight: '10px', display: 'inline-flex' }}>
                  <LocationOnIcon />
                </Avatar>
                {company.city}
              </TableCell>
              <TableCell>
                <Avatar style={{ backgroundColor: '#1976d2', marginRight: '10px', display: 'inline-flex' }}>
                  <AssessmentIcon />
                </Avatar>
                {company.emissionLevel}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CarbonCompanyTable;
