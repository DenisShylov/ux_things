import GrowingBusiness from 'Components/GrowingBusiness/GrowingBusiness';
import Header from 'Components/Header/Header';

import Reviews from 'Components/Reviews/Reviews';
import { Box, Container } from '../node_modules/@mui/material/index';

const App = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '1630px',
        paddingX: '40px',
      }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Header />
      </Box>
      <Box sx={{ mt: '50px', display: 'flex' }}>
        <GrowingBusiness />
        <Reviews />
      </Box>
    </Container>
  );
};

export default App;
