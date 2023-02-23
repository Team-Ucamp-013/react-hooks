import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contacts'
import Rick from './components/Hooks/Rick'
import Info from './components/Hooks/IrnfoRicks'
import Gif from './components/Hooks/Gifts'
import 'bootstrap/dist/css/bootstrap.min.css';
import Estados from './components/Estados'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'contacts/:contactid',
        element: <Contact />
      }
    ]
  },
{
  path: '/rick',
  element: <Rick />,
},
{
  path: '/info/:id',
  element: <Info />
},{
  path: '/gifs',
  element: <Gif />
},
{
  path:'/estados',
  element: <Estados />
}
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
