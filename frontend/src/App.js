import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddCourse from "./components/AddCourse";
import Navbar from "./components/Navbar";
import Courseslist from "./components/Course/Courseslist";
import Login from "./components/navcomponent/Login";
import Logout from "./components/navcomponent/Logout";
import Register from "./components/navcomponent/Register";
import About from "./components/navcomponent/About"
// import Protectedroute from "./components/Protectedroute";
import {Navigate} from 'react-router-dom';
import Dashboard from "./components/navcomponent/Dashboard";
import CourseDetail from "./components/Course/CourseDetail";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />


        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddCourse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courseslist"
          element={
            <ProtectedRoute>
              <Courseslist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <ProtectedRoute>
              <Logout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
         <Route
          path="/coursedetail"
          element={
            <ProtectedRoute>
              <CourseDetail  />
            </ProtectedRoute>
          }
        />

      </Routes>
        
   </div >
 );
};

function ProtectedRoute({ children }) {
  let isAuthenticated = localStorage.getItem('login');
    //  let isAuthenticated=true;
  return isAuthenticated ? children : <Navigate to="/login" />;
}
export default App;