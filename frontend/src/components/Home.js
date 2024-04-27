import React from "react";
import "./style/home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main_header">
      <div className="home-content">
        <h2>Academic university</h2>
        <h6>We belief in Education</h6>
      </div>

        <div className="home-button">
            <Link to="/courseslist" id="view-courseButton">
              <div className="home_link" aria-current="page">
                view courses
              </div>
            </Link>
        </div>
    </div>
  );
}
export default Home;
