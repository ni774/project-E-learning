import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('auth_token');

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
    return <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  }

  return (
    <div style={{ color: "white" }}>
      {console.log(user)}
      <center><h2>Welcome back: {user.name}</h2></center>
      <h1>Email: {user.email}</h1>
      {/* <p>Phone: {user.phone}</p> */}
      <div className="home-button">
        <Link className="home_link" aria-current="page" to="/courseslist">view courses</Link>
      </div>
    </div>
  );
}

export default Dashboard;