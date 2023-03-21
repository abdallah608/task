import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../imgs/logo.svg'

export default function Footer() {
  return (

   <div className="footer p-5 bg-dark ">
     <div className="container">
        <div className="d-flex align-items-center justify-content-between">
        <img className='' src={logo} alt="" />
        <h3 className='w-25'>Join our Newsetter</h3>
        <form className="d-flex" role="subscribe">
  <input className="form-control me-2" type="subscribe" placeholder="subscribe" aria-label="subscribe" />
  <button className="btn btn-outline-success" type="submit">subscribe</button>
</form>

        </div>
    </div>
   </div>
  )
}
