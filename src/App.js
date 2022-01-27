import React, { useState } from 'react'
import Home from './components/pages/home/Home'
import Setting from './components/pages/settings/Setting'
// import Single from './components/pages/single/Single'
// import Write from './components/pages/write/Write'
import Topbar from './components/topbar/Topbar'

function App() {
  return (
    <div>
      <Topbar />
      <Setting />
    </div>
  )
}

export default App
