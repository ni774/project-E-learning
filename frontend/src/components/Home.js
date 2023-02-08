import React from 'react';
import "./Home.css";
import {Link}from 'react-router-dom';

function Home(){
    return(
        <div className="main_header">
            {/* <h1>Welcome to E-learning</h1> */}
            <div className="home-content">
                <h2>Academic university</h2>
                <h6>We belief in Education</h6>
            </div>
        
            <div className="home-button">
                <Link className="home_link" aria-current="page" to="/courseslist">view courses</Link>
            </div>
                
                  
            
        </div>
    );
}
export default Home;