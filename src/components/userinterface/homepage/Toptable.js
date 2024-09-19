import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText } from '@mui/material';

export default function TopCompanies() {
    const [companies] = useState([
        'Apple', 
        'Microsoft', 
        'Google', 
        'Amazon', 
        'Facebook', 
        'Tesla', 
        'Netflix'
    ]);

    return (
        <Box 
            sx={{
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '16px', 
                maxWidth: '300px',
                margin: '20px auto'
            }}
        >
            <Typography variant="h6" component="div" gutterBottom>
                Top 5 Companies
            </Typography>

            <List>
                {companies.slice(0, 5).map((company, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={company} />
                    </ListItem>
                ))}
            </List>

            <Box textAlign="center">
                <Button variant="contained" color="primary" size="small">
                    See More
                </Button>
            </Box>
        </Box>
    );
}
