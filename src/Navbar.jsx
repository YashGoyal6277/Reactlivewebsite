import React from 'react'
import { NavLink } from 'react-router-dom'
import quanta from './images/Logo.png'



export const Navbar = () => {
    return (
        <>
        <div className="container ">
        <div className="row">
          <div className="col">
          <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
    {/* <h1 className="navbar-brand" to="">Webiste Hub</h1> */}
      <div className="ba">
          <img src={quanta} className="navbar-brand w-md- " />
      </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-4 mb-2 mb-lg-0">
        <li className="nav-item ">
          <NavLink exact activeClassName="menu_active" className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
      
       
      </ul>
      
    </div>
  </div>
</nav>
          </div>
        </div>


        </div>
       
        </>
    )
}
