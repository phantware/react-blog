// import React, { useState } from 'react'
import Register from './components/register/Register'
import Write from './components/pages/write/Write'
import Settings from './components/pages/settings/Setting'
import Single from './components/pages/single/Single'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/pages/home/Home'

import Topbar from './components/topbar/Topbar'
import Login from './components/login/Login'

function App() {
  const user = false
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/register'>{user ? <Home /> : <Register />}</Route>
        <Route path='/login'>{user ? <Home /> : <Login />}</Route>
        <Route path='/write'>{user ? <Write /> : <Register />}</Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/post/:postId'>
          <Single />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
