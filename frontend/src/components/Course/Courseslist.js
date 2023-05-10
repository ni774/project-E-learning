import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Courseslist.css";
import CourseDetail from "./CourseDetail";

const Record = (props) => (
  <div className="card">
    <div className="img">
      <img src="https://rb.gy/3p0ha" alt=" error " />
    </div>
    <h1>{props.record.name}</h1>
    <h6 id="description">{props.record.description}</h6>
    <h6 id="auther">{props.record.author}</h6>
    <h2>
      <span>&#8377;</span>
      {props.record.price}
    </h2>
    <button
      className="course-button"
      onClick={() => props.onClick(props.record)}
      
    >
      viewCourse
    </button>
  </div>
);

export default function Courseslist() {
  const [courses, setcourses] = useState([]);
  const history = useNavigate();
  const token = localStorage.getItem("auth_token");
  console.log("token-->", token);
  useEffect(() => {
    async function getCourses() {
      try {
        const response = await fetch(`http://localhost:5000/courses/`, {
          method: "get",
          headers: {
            Authorization: `${token}`,
          },
        });
        const course = await response.json();

        //  const result=Object.entries(courses);    // for convert to array
        let courses = course.courses;
        setcourses(courses);
        console.log(courses);
      } catch (err) {
        // const message = `An error occurred: ${response.statusText}`;
        // window.alert(message);
        history("/login");
        return;
      }

      // if (!response.ok) {

      // }
    }

    getCourses();

    return;
  }, []);

  function handleViewCourse(course) {
    history("/coursedetail", { state: course });
  }

  function recordList() {
    return courses.map((value) => {
      return (
        <Record
          record={value}
          key={value._id}
          onClick={handleViewCourse}
        />
      );
    });
  }

  return (
    <div className="course-container">
      <h2>course---></h2>
      <div className="card-body">{recordList()}</div>
    </div>
  );
}
