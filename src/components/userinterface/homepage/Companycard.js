import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import logo from '../../../assets/logo.png'
const data = [
  { month: 'Jan', carbon: 40 },
  { month: 'Feb', carbon: 35 },
  { month: 'Mar', carbon: 50 },
  { month: 'Apr', carbon: 30 },
  { month: 'May', carbon: 45 },
  { month: 'Jun', carbon: 55 },
];

export default function CompanyCard() {
  return (
    <Box 
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Card sx={{ width: 900, boxShadow: 3 }}> {/* Width increased */}
        <CardMedia
          component="img"
          // alt="Company Logo"
          height="180"
          image="largescale.jpg"// Replace with actual company logo path
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Carbon Hexaware
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Address: 123 Business Street, Banglore, India
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Established: 1990
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            CEO: John Doe
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Industry: Renewable Energy
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Description: This company is a leader in renewable energy solutions, focusing on reducing carbon footprints and promoting sustainable energy alternatives. With projects across the globe, they aim to create a greener future.
          </Typography>

          {/* Carbon Release Graph */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" component="div" gutterBottom>
              Carbon Release (tons)
            </Typography>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="carbon" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
