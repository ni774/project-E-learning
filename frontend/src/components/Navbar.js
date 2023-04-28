import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./img/logo1.png";
function Navbar() {
  const [login, setLogin] = useState('logout');
  if(localStorage.getItem('login')===false){
    setLogin('login');
  }
  console.log("user is loged in",login);
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
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/add" style={{ color: "white" }}>AddCourse</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/about" style={{ color: "white" }}>About</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/dashboard" style={{ color: "yellow" }}>Dashboard</Link>
              </li>
              <li className="nav-item logout">
                  <Link className="nav-link active " aria-current="page" to="/logout" style={{ color: "white" }}>{login}</Link>
                </li>
              {/* {
                
                login ? 
                <li className="nav-item logout">
                  <Link className="nav-link active " aria-current="page" to="/logout" style={{ color: "white" }}>Logout</Link>
                </li> :
                <li className="login">
                <Link className="nav-link active " aria-current="page" to="/login" style={{ color: "white" }}>Login</Link>
                </li>
              } */}
             
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;