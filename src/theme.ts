import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  shape: {
    borderRadius: 8,
  },
  palette: {
    primary: {
      light: '#4F4F4F',
      main: '#333333',
    },
    secondary: {
      main: '#EB5757',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'sans-serif',
    ].join(','),
    h2: {
      fontSize: 24,
      fontWeight: 700,
    },
    h3: {
      fontSize: 16,
      fontWeight: 600,
    },
    h5: {
      fontSize: 14,
      color: "#333333",
    },
    h6: {
      fontSize: 14,
      color: '#4F4F4F'
    }
  }
});

export default theme;