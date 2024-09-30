import Header from './Header';
import Scrollimage from './scrollimage';
import { Grid, Box } from '@mui/material';
import Smallscalecard from './Smallscalecard ';
import User from './Usercard';
import Largescale from './Largescale';
import Toptable from './Toptable';
import { WidthFull } from '@mui/icons-material';
import CompanyCard from './Companycard';

export default function HomePage() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <Header />
            <Scrollimage />

            <Grid container spacing={2} alignItems="stretch">
                <Grid item xs={12} sm={3.5} md={3.5}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                        <Smallscalecard />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3.5} md={3.5}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                        <User />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Box style={{ height: '100%', marginTop: '20px' }}>
                        <Largescale />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={2} md={2}>
                    <Box style={{ height: '100%' }}>
                        <Toptable />
                    </Box>
                </Grid>
            </Grid>
            
            <Grid>
                <Grid item xs={12}>
                    <Box 
                   style={{ 
                    height: '100px', 
                    marginTop: '20px', 
                    border: '2px solid #000',  // Border specified here
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'green',
                    WidthFull // Corrected to 'backgroundColor'
                }}
                
                    >
                        <h1>Carbon Footprint Dashboard</h1>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
