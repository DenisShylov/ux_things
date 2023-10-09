import { styled } from '@mui/material';
import { ReactComponent as Logo } from '../Header/ux_things.svg';

const MyLogo = styled(Logo)(() => ({
  fill: 'red',
  width: '125px',
  height: '35px',
  '&:hover': {
    fill: 'black',
  },
}));

const MyButton = styled('button')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black',
  fontFamily: 'san-serif',
  fontSize: '1rem',
  fontWeight: 700,
  color: 'white',
  borderRadius: '5px',
  minWidth: '160px',
  lineHeight: '30px',
  height: '35px',
}));

const MyH1 = styled('h1')(() => ({
  fontSize: '4.5 rem',
}));
export { MyLogo, MyButton, MyH1 };
