import React from 'react';
import CourseTable from './CourseTable.js';
import UsersTable from './UsersTable.js';
import { Link } from 'react-router-dom';


function AdminDashboard() {
    return (
        <div>
            <h1>admin dashboard</h1>
            <Link aria-current="page" to="courses">Courses</Link>
            <br/>
            <Link aria-current="page" to="users">Users</Link>
        </div>
    )
}

export default AdminDashboard
