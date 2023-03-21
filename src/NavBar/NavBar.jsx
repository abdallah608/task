import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
   <>
   <nav className="navbar navbar-expand-lg bg-secondary navbar-dark">
  <div className="container">
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          News  
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="#">Allnews </NavLink></li>
            <li><NavLink className="dropdown-item bg-transparent text-dark" href="#">Olympia Tournaments</NavLink></li>
         
          </ul>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Courses</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" href="#">E-books</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className="nav-link" href="#">Contact Us</NavLink>
        </li>
        
      </ul>
    <div className="d-flex justify-content-center align-items-center text-white">
    
    
          <NavLink className="nav-link " href="#"> <i className="fa-solid fa-cart-shopping me-2" />Cart</NavLink>
        
    </div>

    </div>
  </div>
</nav>

   </>
  )
}
