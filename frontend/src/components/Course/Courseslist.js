import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
 
const Course = (props) => (
 <tr>
   <td>{props.course.name}</td>
   <td>{props.course.author}</td>
   <td>{props.course.description}</td>
   <td>{props.course.price}</td>
 </tr>
);
 
export default function Courseslist() {
 const [courses, setCourses] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getCourses() {
     const response = await fetch(`http://localhost:5000/courses`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const courses = await response.json();
     setCourses(courses);
   }
 
   getCourses();
 
   return;
 }, [courses.length]);
 
 return (
  <div>
    <h3>Course List</h3>
    <table className="table table-striped" style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>author</th>
          <th>description</th>
          <th>price</th>
        </tr>
      </thead>
      <tbody>{Courseslist()}</tbody>
    </table>
  </div>
);
}