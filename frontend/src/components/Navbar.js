import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./img/logo1.png";
import { useAuth } from '../context/auth';

function Navbar() {
  const [userState, setUserState] = useState('logout');
  const [islogedin, setIsLogedin] = useState(true);
  const [auth, setAuth] = useAuth();
  console.log("in navbar", auth);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      setUserState('');
      setIsLogedin(false);
    }
  }, []);

  console.log("user is logged in", userState);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">Navbar</a> */}
        <img className="logo" src={logo} width="70" height="50" alt="cant show img" style={{ zIndex: 10 }} />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/" >Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about" >About</Link>
            </li>
            {
              islogedin ?
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    User
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        to={`/dashboard/${auth && auth.user && auth.user.role === 1 ? "admin" : "user"}`}
                      >
                        Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link className="nav-link active" aria-current="page" to="/courseslist" >viewCourse</Link>
                    </li>
                    {
                      auth && auth.user && auth.user.role === 1?
                      <li>
                      <Link className="nav-link active" aria-current="page" to="/add" >AddCourse</Link>
                      </li>:
                      <li></li>
                    }
                   
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <Link className="nav-link active " aria-current="page" to="/logout" >{userState}</Link>
                    </li>
                  </ul>
                </li> : <li></li>
            }
            <li className="nav-item">
              <Link className="nav-link active " aria-current="page" to="/contact">Contact Us</Link>
            </li>
            {
              !islogedin ?
                <li className="nav-item dashboard">
                  <Link className="nav-link active" aria-current="page" to="/login" >Login</Link>
                </li> : <li></li>
            }
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;
