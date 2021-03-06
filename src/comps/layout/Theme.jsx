import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
      fontFamily: [

        'Open Sans Condensed',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      fontSize: 15
    }
  });

  export default theme