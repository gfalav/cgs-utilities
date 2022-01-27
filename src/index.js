import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comps/layout/Home'
import SignIn from './comps/auth/SignIn'
import SignUp from './comps/auth/SignUp'
import ResetPwd from './comps/auth/ResetPwd'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App /> }>
        <Route index element={ <Home />} />
        <Route path='/auth/SignIn' element={ <SignIn />} />
        <Route path='/auth/SignUp' element={ <SignUp />} />
        <Route path='/auth/Reset' element={ <ResetPwd />} />

      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
