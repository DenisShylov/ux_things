import { Box, Typography } from '@mui/material';
import { MyButton } from 'Components/Styles/StyledComponents';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import React from 'react';

const GrowingBusiness = () => {
  return (
    <Box style={{ maxWidth: '60%' }}>
      <Typography variant="h1" sx={{ fontSize: '4.5rem' }}>
        Unlimited design & development to support your
        <Typography
          variant="span"
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
      <Typography variant={'h2'} sx={{ fontSize: '2rem' }}>
        We're transforming the way businesses approach all things digital. No
        more hassles with freelancers or costly traditional agencies.
      </Typography>
      <MyButton>
        <>
          <AutoAwesomeOutlinedIcon sx={{ mr: 1 }} />
          Work with us
        </>
      </MyButton>
    </Box>
  );
};

export default GrowingBusiness;
