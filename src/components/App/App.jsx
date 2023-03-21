import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '../../App.css';
import Home from '../Home/Home.jsx';
import MasterLayOut from '../MasterLayOut/MasterLayOut.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function App() {
  
const route = createBrowserRouter([{
  path:"/",
  element:<MasterLayOut/>,
  errorElement: <NotFound/>,
  children:[
    {path:'/',element:<Home/>}
  ]
}])
  return (
    <>
    <RouterProvider router={route}/>
    </>
  )
}
