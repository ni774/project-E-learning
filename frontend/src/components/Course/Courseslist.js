import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./Courseslist.css";


const Record = (props) => (
  <div className="card">
    <div className="img">
      <img src={props.record.thumbnail} alt=" error " />
    </div>
      <Link id="delete" to="/delete">delete</Link>
    
    <h1>{props.record.name}</h1>
    <h6 id="description">{props.record.description}</h6>
    <h6 id="auther">{props.record.author}</h6>
    <h2><span>&#8377;</span>{props.record.price}</h2>
    
    <button className="course-button">View</button>
  </div>
);


export default function Courseslist() {
  const [courses, setcourses] = useState([]);
  const history = useNavigate();
  useEffect(() => {
    async function getCourses() {
      try {
        const response = await fetch(`http://localhost:5000/courses/`);
        const course = await response.json();

        //  const result=Object.entries(courses);    // for convert to array
        const courses = course.courses;
        setcourses(courses);
        console.log(courses);
      } catch (err) {
        // const message = `An error occurred: ${response.statusText}`;
        // window.alert(message);
        history('/login');
        return;
      }

      // if (!response.ok) {

      // }   
    }

    getCourses();

    return;
  }, []);

  function recordList() {
    return courses.map((record) => {
      return (
        <Record
          record={record}
          key={record._id}
        />
      );
    });
  }
  return (
    <div className="course-container">
      <h2>course---></h2>
      <div className="card-body">
        {recordList()}
      </div>

    </div>
  );
}
