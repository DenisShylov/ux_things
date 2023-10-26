import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Box, Typography } from '@mui/material';
import { MyButton } from 'Components/Header/Header.styles';
import React from 'react';

const GrowingBusiness = () => {
  return (
    <Box sx={{ width: '65%' }}>
      <Typography variant="h1" sx={{ fontSize: '4.5rem' }}>
        Unlimited design & development to support your
        <Typography
          variant="h1"
          component="span"
          sx={{
            display: 'inline-block',
            backgroundColor: 'red',
            color: '#fdffe5',
            borderRadius: '3px',
          }}
        >
          growing business
        </Typography>
      </Typography>
      <Typography variant={'h2'} sx={{ fontSize: '2rem', margin: '30px 0' }}>
        We're transforming the way businesses approach all things digital. No
        more hassles with freelancers or costly traditional agencies.
      </Typography>
      <MyButton sx={{ padding: '10px 23px' }}>
        <>
          <AutoAwesomeOutlinedIcon sx={{ mr: 1 }} />
          Work with us
        </>
      </MyButton>
    </Box>
  );
};

export default GrowingBusiness;
