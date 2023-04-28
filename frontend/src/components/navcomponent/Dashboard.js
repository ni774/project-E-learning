import React, { useState, useEffect } from 'react';

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
    return <h3 style={{ margin :"auto" }}>Loading...</h3>;
  }

  return (
    <div style={{ color :"white" }}>
      {console.log(user)}
      <center><h2>Welcome back: {user.name}</h2></center>
      <h1>Email: {user.email}</h1>
      {/* <p>Phone: {user.phone}</p> */}
    </div>
  );
}

export default Dashboard;