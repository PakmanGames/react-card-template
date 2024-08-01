import React from 'react'
import ReactDOM from 'react-dom/client'
import Navigation from './NavigationComponent/Navigation.jsx'
import Input from './InputComponent/Input.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation />
    <Input />
  </React.StrictMode>,
)
