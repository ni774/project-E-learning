import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Courseslist.css";
 
// const Course = (props) => (
//  <div className="card">
//    <h1>{props.course.name}</h1>
//    <h3>{props.course.auther}</h3>
//    <h3>{props.course.description}</h3>
//    <h2>{props.course.price}</h2>
//    <div>
//      <Link className="btn btn-link" to={`/edit/${props.course._id}`}>Edit</Link> |
//      <button className="btn btn-link"
//        onClick={() => {
//          props.deletecourse(props.course._id);
//        }}
//      >
//        Delete
//      </button>
//    </div>
//  </div>
// );
 
// export default function Courseslist() {
//  const [courses, setcourses] = useState([]);
 
 // This method fetches the courses from the database.




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
  
      const courses = await response.json();
     const result=Object.entries(courses);    // for convert to array
      setcourses(result[0]);
     console.log(result[0]);
     
     
    }
  
    getCourses();
  
    return;
  }, []);
  return (
    <div>
      courses are here
       <div className="card-body">
         {courses.map((product)=>{
            <div className="card">
              <h1>{product.name}</h1>
              <h4>{product.description}</h4>
              <h2>{product.author}</h2>
              <h1>{product.price}</h1>
            </div>
          })}
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