import { Container } from '@mui/material';
import GrowingBusiness from 'Components/GrowingBusiness/GrowingBusiness';
import Header from 'Components/Header/Header';
import './App.css';
import Reviews from 'Components/Reviews/Reviews';
const App = () => {
  return (
    <>
      <Header />
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <GrowingBusiness />
        <Reviews />
      </Container>
    </>
  );
};

export default App;
