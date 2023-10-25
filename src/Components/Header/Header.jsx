import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import { AppBar, Toolbar } from '@mui/material/';
import { MyButton, MyLogo } from 'Components/Styles/StyledComponents';
import React from 'react';
import { Box } from '../../../node_modules/@mui/material/index';

const Header = () => {
  return (
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
  );
};

export default Header;
