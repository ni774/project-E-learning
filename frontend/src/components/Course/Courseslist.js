import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style/coursesList.css";
import CourseDetail from "./CourseDetail";
import Record from "./Record";


export default function Courseslist({ courses, setcourses }) {
  // const [courses, setcourses] = useState([]);
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
    history("/gallary", { state: course });
  }

  function recordList() {
    return courses.map((value) => {
      return (
        <Record record={value} key={value._id} onClick={handleViewCourse} />
        // onclick is props here
      );
    });
  }

  return (
    <div className="course-container">
      <h2>course---</h2>
      <div className="card-body">{recordList()}</div>
    </div>
  );
}
