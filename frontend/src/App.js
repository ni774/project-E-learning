import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import Navbar from "./components/Navbar";
// import Courses from "./components/Course/Courses";
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
         <Route path="/" element={<Home/>}exact/>
         <Route path="/add" element={<AddCourse/>}exact/>
         {/* <Route path="/courses" element={<Courses/>}exact/> */}
     </Routes>
   </div>
 );
};
 
export default App;