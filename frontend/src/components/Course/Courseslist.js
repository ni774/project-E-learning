import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";  
// import { Link } from "react-router-dom";
import "./Courseslist.css";


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
  const [islogedin,setislogedin]=useState(false);
  const [courses, setcourses] = useState([]);
  const history=useNavigate();
  useEffect(() => {
    async function getCourses() {
      try{
        const response = await fetch(`http://localhost:5000/courses/`);
        const course = await response.json();
        setislogedin(true);
        //  const result=Object.entries(courses);    // for convert to array
        const courses= course.courses;
        setcourses(courses);
        console.log(courses);
      }catch(err){
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
  if(islogedin){
    return(
        <div>
          courses are here
          <div className="card-body">
          {recordList()}
          </div>

        </div>
    );
  }
  else{
      return(
        <div>{alert("login first")}</div>
      );
  }
  
}