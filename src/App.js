import * as React from 'react'
import { ThemeProvider } from '@mui/material';
import './App.css'
import Layout from './comps/layout/Layout'
import theme from './comps/layout/Theme'
import {onAuthStateChanged,getAuth} from 'firebase/auth'
import app from './comps/fb/fb'

function App() {
  const [user, setUser] = React.useState(null)
  const fb = app
  const auth = getAuth(fb)

  React.useEffect( ()=> {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout drawerWidth={240} user={user} />
    </ThemeProvider>
  );
}

export default App;
