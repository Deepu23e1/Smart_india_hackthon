import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="userscale.jpg"
          alt="userscale"
        />
        <CardContent>
      
          <Typography gutterBottom variant="h5" component="div">User Scale Industries</Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
           Register your Industries To recieve your carbon efficiency
           
          </Typography>
        
        </CardContent>
      </CardActionArea>
      <CardActions>
        
    
          <Button variant="contained" size="small" color="success">
            Register
          </Button>
      
      </CardActions>
    </Card>
  );
}
