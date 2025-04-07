import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import BuildingContextProvider from './context/BuildingContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <BuildingContextProvider>
  //     <App />
  // </BuildingContextProvider>
)
