import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Box } from '@mui/material';


export default function OfferScroll() {
  const scrollRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
  };

  const data = ['1.jpeg', '2.jpeg', '3.jpeg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg', '8.jpeg'];

  const showImages = () => {
    return data.map((item) => (
      <div key={item} style={{ padding: '0 10px' }}>
        <img src={`/${item}`} alt={item} style={{ width: '100%', borderRadius: 20 }} />
      </div>
    ));
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: 'green' }}> {/* Added padding and background color */}
      <Box sx={{ marginBottom: '40px' }}>
        <Slider ref={scrollRef} {...settings}>
          {showImages()}
        </Slider>
      </Box>

      <Box sx={{ display: 'flex' }}> {/* Centering the card */}




      </Box>
    </Box>
  );
}
