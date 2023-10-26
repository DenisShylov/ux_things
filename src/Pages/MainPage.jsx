import { Box, Container } from '@mui/material';
import Differently from 'Components/Differently/Differently';
import GrowingBusiness from 'Components/GrowingBusiness/GrowingBusiness';
import Header from 'Components/Header/Header';
import Reviews from 'Components/Reviews/Reviews';
import React from 'react';

const MainPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1630px',
        paddingX: '40px',
      }}
    >
      <Header />

      <Box sx={{ mt: '50px', display: 'flex' }}>
        <GrowingBusiness />
        <Reviews />
      </Box>
      {/* <OurWork /> */}
      <Differently />
    </Container>
  );
};

export default MainPage;
