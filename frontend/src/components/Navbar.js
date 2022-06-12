import React from 'react';
import {Link}from 'react-router-dom';
function Navbar(){
    return(
        <div><nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <Link to="/add">addCourse</Link>
      
            </ul>
           
          </div>
        </div>
      </nav></div>
    );
}
export default Navbar;