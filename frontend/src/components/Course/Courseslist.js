import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import "./Courseslist.css";
 

 
// export default function Courseslist() {
//  const [courses, setcourses] = useState([]);
 
 // This method fetches the courses from the database.

 const Record = (props) => (
  <div className="card">
    <h1>{props.record.name}</h1>
    <h4>{props.record.description}</h4>
    <h2>{props.record.price}</h2>
    <h3>{props.record.author}</h3>
    <button className="course-button">View</button>
  </div>
 );


export default function Courseslist() {
  const [courses, setcourses] = useState([]);
  useEffect(() => {
    async function getCourses() {
      const response = await fetch(`http://localhost:5000/courses/`);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const course = await response.json();
    //  const result=Object.entries(courses);    // for convert to array
    const courses= course.courses;
      setcourses(courses);
     console.log(courses);
     
     
     
    }
  
    getCourses();
  
    return;
  },[]);

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
    <div>
      courses are here
       <div className="card-body">
      
         {/* {courses.map((product)=>{
            <div className="card">
              <h1>{product.name}</h1>
              <h4>{product.description}</h4>
              <h2>{product.author}</h2>
              <h1>{product.price}</h1>
            </div>
          })} */}
         {recordList()}
       </div>

    </div>
  );
}

 
 // This method will delete a course
//  async function deletecourse(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });
 
//    const newcourse = courses.filter((el) => el._id !== id);
//    setcourses(newcourse);
//  }
  /* {courses.map((product)=>{
            <div className="card">
              <h1>{product.name}</h1>
              <h4>{product.description}</h4>
              <h2>{product.author}</h2>
              <h1>{product.price}</h1>
            </div>
          })} */
//  // This method will map out the courses on the table
//  function courseList() {
//    return courses.map((course) => {
//      return (
//        <Course
//          course={course}
//          deletecourse={() => deletecourse(course._id)}
//          key={course._id}
//        />
//      );
//    });
//  }
 
//  // This following section will display the table with the courses of individuals.
//  return (
//    <div className="container">
  
      
//   <div className="card-body">
//       {courseList()}
//   </div>
// </div>
   
     
//  );
// }