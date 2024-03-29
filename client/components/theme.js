import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#A2D2FF',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#ffc3af',
      main: '#FF865E',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    blue: {
      light: '#d1e9ff',
      main: '#A2D2FF',
      dark: '#516980'
    },
    blueCream: {
      light: '#ffffff',
      main: '#eff3fe',
      dark: '#787a7f'
    },
    cream: {
      light: '#ffffff',
      main: '#FEF9EF',
      dark: '#7f7d78'
    },
    orange: {
      light: '#ffc3af',
      main: '#FF865E',
      dark: '#80432f'
    },
    yellow: {
      light: '#fffad9',
      main: '#FEE440',
      dark: '#b2a02d'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;
