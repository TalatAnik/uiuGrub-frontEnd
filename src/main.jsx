import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/login',
    element: <Login />
  }
])

const theme = createTheme({
  palette: {
    primary: {
      main: "#F68B1F"
    },
    secondary: {
      main: "#EECEAE"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>    
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
