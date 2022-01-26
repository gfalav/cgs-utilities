import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './comps/layout/Home'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App /> }>
        <Route index element={ <Home />} />
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);
