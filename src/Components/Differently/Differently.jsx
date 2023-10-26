import React from 'react';
import {
  Box,
  Container,
  Typography,
} from '../../../node_modules/@mui/material/index';

const Differently = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#ff4949',
          color: '#fdffe5',
          borderRadius: '1rem',
        }}
      >
        <Box sx={{ margin: '10px' }}>
          <Box sx={{ width: '300px' }}>
            <Typography variant="h2">
              We like to do things{' '}
              <div>
                <Typography
                  variant="span"
                  sx={{
                    backgroundColor: '#fdffe5',
                    color: 'black',
                    padding: '5px',
                  }}
                >
                  differently
                </Typography>
                .
              </div>
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography variant="span" sx={{ fontSize: '2.25rem' }}>
              {' '}
              Simple, yet effective.
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '1.5rem' }}>
              Trello for task management and Slack Connect for seamless
              communication.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Differently;
