import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import User from './getUser/User.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <User/>
  </StrictMode>,
)
