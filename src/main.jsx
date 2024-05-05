import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import Restaurant from './pages/Restaurant.jsx'
import Login from './pages/Login.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material'
import Checkout from './pages/Checkout.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/restaurant/:id",
    element: <Restaurant />,
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);


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
