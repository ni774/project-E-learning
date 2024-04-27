import React, { useState } from 'react';

const UserProfileEditModal = ({ user, onClose }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [mobile, setMobile] = useState(user.mobile); // Assuming you have a mobile field in your user object

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform the update action here (e.g., send data to server)
        // After successful update, close the modal
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile</label>
                        <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                    </div>
                    <div className="flex justify-end">
                        <button type="button" onClick={onClose} className="mr-2 bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfileEditModal;
