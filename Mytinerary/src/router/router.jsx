import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import Layout from '../layouts/Layout'
import Index from '../pages/Index'
import Cities from '../pages/Cities'
import AboutUs from '../pages/AboutUs'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Details from '../pages/Details'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {path: "/",
    element: <Index />},
      {path: "/cities",
    element: <Cities />},
      {path: "/about",
    element: <AboutUs />},
      {path: "/login",
    element: <Login />},
      {path: "/register",
    element: <Register />},
      {path: '/:id/details',
    element: <Details />}
    ]
  }
])

export default router