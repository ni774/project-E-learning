import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserProfileEditModal from './UserProfileEditModal';
import {useAuth} from "../../context/Auth";
import "../../input.css";

function Dashboard() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [user, setUser] = useState(null);
  const token = localStorage.getItem('auth_token');
  const [auth, setAuth] = useAuth();


  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  useEffect(() => {

    if (token) {
      fetch('http://localhost:5000/users/dashboard', {
        headers: {
          'Authorization': `${token}`
        }
      })
        .then(response => response.json())
        .then(data => setUser(data.data))
        .catch(error => console.log(error));
    }
  }, []);

  if (!user) {
    return <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  }

  return (
    <div className="container mx-auto p-8">
        <div className="bg-slate-400 p-2 flex space-x-10 items-center">
            <div className="mr-4 border-r-2 pr-2 border-black">
                <img src="/avatar.jpeg" alt="User Profile" className="w-20 h-20 rounded-full" />
            </div>
            <div>
                <h1 className="text-2xl font-semibold">{user.name}</h1>
                <p className="text-gray-600">{user.email}</p>          
            </div>
            <div>
              <button onClick={openEditModal} className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Edit Profile
              </button>
            </div>
        </div>

        {/* My Courses Section */}
        <div className="mt-8">
            <h2 className="text-xl font-semibold">My Courses</h2>
              <ul className="mt-4">
                {
                  (user?.courses?.length > 0)? (
                    user?.courses?.map(course => (
                        <li key={course.id} className="text-gray-700">{course.title}</li>
                    ))
                   ) :
                    <h3 className='font-serif'> Ohh! you dont have any course </h3>
                } 
            </ul>
        </div>

        {/* Edit Profile Modal */}
        {isEditModalOpen && <UserProfileEditModal user={user} onClose={closeEditModal} />}
    </div>
  );
}

export default Dashboard;