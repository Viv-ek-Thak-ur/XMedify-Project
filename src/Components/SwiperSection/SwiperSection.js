import React from 'react';
import { Box, Card } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Swiper1And3 from '../../assets/swiper 1 and 3.png';
import Swiper2 from '../../assets/swiper 2.png';

import 'swiper/css';
import 'swiper/css/pagination';


const offerFlyers = [
  {
    id: 1,
    image: Swiper1And3,
    alt: "Medical Offers 1 & 3"
  },
  {
    id: 2,
    image: Swiper2,
    alt: "Medical Offers 2"
  },
  {
    id: 3,
    image: Swiper1And3,
    alt: "Medical Offers 1 & 3"
  },
  {
    id: 4,
    image: Swiper2,
    alt: "Medical Offers 2"
  },
  {
    id: 5,
    image: Swiper1And3,
    alt: "Medical Offers 1 & 3"
  }
];

export default function SwiperSection() {
  return (
    <Box sx={{ 
      width: '100%', 
      pt: 40, 
      backgroundColor: '#f3f3f5ff',
      mt:'-100px',
      zIndex: 1 // Lower z-index so CategorySection floats above
    }}>
      
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2 , pt: 9, pb:0}}>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2, 
            },
            768: {
              slidesPerView: 2, 
            },
            1024: {
              slidesPerView: 3, 
            },
            
          }}
          pagination={{
            clickable: true,
            dynamicBullets: false,
            hideOnClick: false,
            enabled: true,
            type: 'bullets'
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="offer-swiper"
          style={{
            paddingBottom: '60px', // Space for pagination dots
          }}
        >
          {offerFlyers.map((flyer) => (
            <SwiperSlide key={flyer.id}>
              <Card 
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  borderRadius: 2,
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={flyer.image}
                  alt={flyer.alt}
                  sx={{
                    width: '100%',
                    height: 'auto', 
                    borderRadius: 2, 
                    backgroundColor: '#fff', 
                  }}
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      
    </Box>
  );
}