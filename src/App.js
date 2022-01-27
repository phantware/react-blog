import React, { useState } from 'react'
import Home from './components/pages/home/Home'
import Single from './components/pages/single/Single'
import Write from './components/pages/write/Write'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div>
      <Topbar />
      {/* <Single /> */}
      <Write />
    </div>
  )
}

export default App
