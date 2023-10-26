import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  breakpoints: {
    xl: '1630px',
  },
  components: {
    MuiToolbar: {
      defaultProps: {
        padding: '100px',
      },
    },
    MuiAppBar: {
      defaultProps: {
        color: 'transparent',
      },
    },
  },
});

export default theme;
