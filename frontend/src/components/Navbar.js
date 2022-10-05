import React from 'react';
import {Link}from 'react-router-dom';
import "./Navbar.css";
function Navbar(){
    return(
        <div><nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{color:"white"}}>Home</Link>
              </li>
              <li className="nav-item space">
                <Link className="nav-link active" aria-current="page" to="/add" style={{color:"white"}}>addCourse</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active " aria-current="page" to="/login" style={{color:"white"}}>Login</Link>
              </li>
            </ul>
           
          </div>
        </div>
      </nav></div>
    );
}
export default Navbar;