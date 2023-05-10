import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./img/logo1.png";

function Navbar() {
  const [userState, setUserState] = useState('logout');
  const [islogedin, setIsLogedin] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      setUserState('login');
      setIsLogedin(false);
    }
  }, []);

  console.log("user is logged in", userState);

  return (
    <div id="nav">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <img className="logo" src={logo} alt="cant show img" />
            <ul className="navbar-nav me-auto mb-1 mb-lg-0 ">
              <li className="nav-item home ">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
              </li>

              {/* if user is logged in then only show these component  */}
              {
                islogedin ?
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/add" style={{ color: "white" }}>AddCourse</Link>
                  </li> : <li></li>
              }
              {
                islogedin ?
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/courseslist" style={{ color: "white" }}>viewCourse</Link>
                  </li> : <li></li>
              }

              <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/about" style={{ color: "white" }}>About</Link>
            </li>
            {
              islogedin ?
                <li className="nav-item dashboard">
                  <Link className="nav-link active" aria-current="page" to="/dashboard" style={{ color: "yellow" }}>Dashboard</Link>
                </li> : <li></li>
            }

            <li className="nav-item logout">
              <Link className="nav-link active " aria-current="page" to="/logout" style={{ color: "white" }}>{userState}</Link>
            </li>
            </ul>
        </div>
        </div>
      </nav>
    </div >
  );
}

export default Navbar;
