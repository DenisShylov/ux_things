import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { AppBar, Box, Toolbar } from '@mui/material/';
import { MyButton, MyLogo } from 'Components/Header/Header.styles';
import React from 'react';

const Header = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ flexGrow: 1, width: '70%' }}>
        <AppBar position="sticky" sx={{ boxShadow: 'none' }}>
          <Toolbar>
            <Box sx={{ width: '150px', float: 'left' }}>
              <MyLogo />
            </Box>
            <Box sx={{ ml: 'auto' }}>
              <MyButton sx={{ gap: '10px' }}>
                <TextsmsOutlinedIcon />
                Schedule a call
              </MyButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Box>
  );
};

export default Header;
