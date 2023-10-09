import React from 'react';
import { Box } from '@mui/material/';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { MyLogo, MyButton } from 'Components/Styles/StyledComponents';

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingY: '30px ',
      }}
    >
      <MyLogo className="header_logo" />
      <MyButton variant="contained">
        <>
          <TextsmsOutlinedIcon sx={{ mr: 1 }} />
          Schedule a call
        </>
      </MyButton>
    </Box>
  );
};

export default Header;
