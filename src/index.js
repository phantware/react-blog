import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ContexProvider } from './context/Context'

ReactDOM.render(
  <React.StrictMode>
    <ContexProvider>
      <App />
    </ContexProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
