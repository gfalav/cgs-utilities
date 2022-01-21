import { CssBaseline, Grid, ThemeProvider } from '@mui/material'
import './App.css'
import SidebarMenu from './comps/layout/sidebar/SidebarMenu'
import theme from './comps/layout/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Grid container spacing={0}>
          <Grid item xs={2} sx={{bgcolor: '#233044', color: 'white', height: window.innerHeight-2, overflowY: 'scroll' }}>
            <SidebarMenu sx={{m: 0}}/>
          </Grid>
          <Grid item xs={10} sx={{bgcolor: '#1b2635', color: 'white', height: window.innerHeight-2, overflowY: 'scroll'}}>
            main area
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
