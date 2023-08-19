import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from "../../context/auth";

function Dashboard() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('auth_token');
  const [auth, setAuth] = useAuth();


  useEffect(() => {

    if (token) {
      fetch('http://localhost:5000/users/dashboard', {
        headers: {
          'Authorization': `${token}`
        }
      })
        .then(response => response.json())
        .then(data => setUser(data.data))
        .catch(error => console.log(error));
    }
  }, []);

  if (!user) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  }

  return (
    <div>
      {console.log(user)}
      <center><h2>Welcome back: {user.name}</h2></center>
      <h1>Email: {user.email}</h1>
     
      <div>{JSON.stringify(auth,null,4)}</div>
      {/* <p>Phone: {user.phone}</p> */}
      <div className="home-button">
        <Link className="home_link" aria-current="page" to="/courseslist">view courses</Link>
      </div>
    </div>
  );
}

export default Dashboard;