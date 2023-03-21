import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imgs/logo.svg'
export default function Header() {
  return (
  <>
  {/* First Header */}
<nav className="navbar bg-light ms-auto border-bottom bg-dark navbar-dark ">
  <div className="container ">
    <p className="navbar-brand ms-auto  mb-0 h1">العربية</p>
  </div>
</nav>

 {/* sec header */}
 <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
  <img className='' src={logo} alt="" />
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fw-bolder"  href="#">sign in or sign up</Link>
        </li>
        </ul>

    </div>
  </div>
</nav>

  </>
  )
}
