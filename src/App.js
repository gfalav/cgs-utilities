import { Grid, ThemeProvider } from '@mui/material'
import './App.css'
import SidebarMenu from './comps/layout/sidebar/SidebarMenu'
import theme from './comps/layout/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Grid container spacing={0} columns={16}>
        <Grid item xs={3} sx={{bgcolor: '#233044', color: 'white', height: window.innerHeight-2, overflowY: 'scroll' }}>
          <SidebarMenu />
        </Grid>
        <Grid item xs={13} sx={{bgcolor: '#1b2635', color: 'white', height: window.innerHeight-2}}>
          main area
        </Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
}

export default App;
