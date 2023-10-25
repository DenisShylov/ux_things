import { styled } from '@mui/material';
import { ReactComponent as Logo } from '../Header/ux_things.svg';
import { Button } from '../../../node_modules/@mui/material/index';

const MyLogo = styled(Logo)(() => ({
  fill: 'red',
  width: '100%',
  height: '100%',
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
  border: 'none',
}));

export { MyButton, MyLogo };
