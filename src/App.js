import { ThemeProvider } from '@mui/material';
import './App.css'
import Layout from './comps/layout/Layout'
import theme from './comps/layout/Theme'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
