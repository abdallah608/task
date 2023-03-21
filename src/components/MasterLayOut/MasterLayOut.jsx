import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar.jsx'
import Footer from '../Footer/Footer.jsx'
import Header from '../Header/Header.jsx'

export default function MasterLayOut() {
  return (
    <>
    <Header/>
    <NavBar/>
    
   <Outlet/>
    
    <Footer/>
    </>
  )
}
