import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import Layout from '../layouts/Layout'
import Index from '../pages/Index'
import Cities from '../pages/Cities'
import AboutUs from '../pages/AboutUs'

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
    ]
  }
])

export default router