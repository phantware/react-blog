import React, { useState } from 'react'
import Home from './components/pages/home/Home'
import Single from './components/pages/home/single/Single'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div>
      <Topbar />
      <Single />
    </div>
  )
}

export default App
