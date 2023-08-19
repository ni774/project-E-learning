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
import Dashboard from "./components/user/Dashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import CourseDetail from "./components/Course/CourseDetail";
import ContactPage from "./components/navcomponent/ContactPage"
import { useAuth } from './context/auth';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<ContactPage />} />


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
          path="/dashboard/user"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/admin"
          element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
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
  let isAuthenticated = localStorage.getItem('login') === 'true';
  return isAuthenticated ? children : <Navigate to="/login" />;
}
function AdminProtectedRoute({ children }) {
  const [auth, Setauth] = useAuth();
  let isAuthenticated = auth && auth.user && auth.user.role ===1;
  
  return isAuthenticated ? children : <Navigate to="/login" />;
}
export default App;