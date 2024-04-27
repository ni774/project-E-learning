import React, { useState } from 'react';
import axios from 'axios';
import './style/ContactPage.css';

const ContactPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = {
      firstName,
      lastName,
      email,
      mobileNo,
      subject,
      message
    };
	  console.log(formData);
    try {
      const response = await axios.post('/api',formData, {
		  headers: {
		  	'Content-Type': 'application/json'
		  }
	    })

      if (response.ok) {
        console.log('Form data sent successfully!');
        // Reset form fields
        setFirstName('');
        setLastName('');
        setEmail('');
        setMobileNo('');
        setSubject('');
        setMessage('');
      } else {
        console.error('Failed to send form data.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return ( 
	<div className="contact-container overflow-y-scroll">
    <div className='ml-14'>
      <img className='object-fill h-72 w-auto' src='/supportImg.png' alt="error"/>
    </div>

    <div>
      <div className="py-2 px-4 max-w-screen-md border-2 border-black rounded-md"> 
        <h2 className="mb-4 text-4xl font-extrabold 
                  text-center text-gray-900"> 
          Contact Us 
        </h2> 
        <p className="mb-4 font-light text-left 
                  text-gray-500 sm:text-xl"> 
          Got an issue? Want to send feedback? 
          Need details about our Courses? Let us know. 
        </p> 
	    <div className=''>
        <form onSubmit={handleSubmit}> 
          <div className="flex flex-row"> 
            <div className="w-1/2 pr-2 "> 
              <label htmlFor="firstName"
                className="block my-2 text-left 
                text-sm font-medium text-gray-900"> 
                First Name 
              </label> 
              <input type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="shadow-sm bg-gray-50 border 
                border-gray-300 text-gray-900 
                text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter First Name"
                required/> 
            </div> 
            <div className="w-1/2 pl-2"> 
              <label htmlFor="lastName"
                className="block my-2 text-left text-sm 
                font-medium text-gray-900"> 
                Last Name 
              </label> 
              <input type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-sm bg-gray-50 border 
                            border-gray-300 text-gray-900 
                            text-sm rounded-lg block w-full p-2.5"
                            placeholder="Enter Last Name"/> 
            </div> 
          </div> 
          <div className="flex flex-row">
            <div className='w-1/2 pr-2'>
              <label htmlFor="email"
                className="block my-2 text-left text-sm 
                font-medium text-gray-900"> 
                Your email 
              </label> 
              <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-sm bg-gray-50 border 
                border-gray-300 text-gray-900 
                text-sm rounded-lg block w-full p-2.5"
                placeholder="abc@elearning.com"
                required 
                /> 
            </div>
            <div className="w-1/2 pl-2"> 
              <label htmlFor="mobileNo"
                className="block my-2 text-left text-sm 
                font-medium text-gray-900"> 
                Mobile 
              </label> 
              <input type="text"
                value={mobileNo}
                onChange={(e) => setLastName(e.target.value)}
                className="shadow-sm bg-gray-50 border 
                border-gray-300 text-gray-900 
                text-sm rounded-lg block w-full p-2.5"
                placeholder="Enter Mobile No"/> 
            </div>  
          </div> 
          <div> 
            <label htmlFor="subject"
              className="block my-2 text-left 
              text-sm font-medium text-gray-900"> 
              Subject 
            </label> 
            <input type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="block p-3 w-full text-sm 
              text-gray-900 bg-gray-50 rounded-lg 
              border border-gray-300 shadow-sm "
              placeholder="What issue/suggestion do you have?"
              required /> 
          </div> 
          <div> 
            <label htmlFor="message"
              className="block my-2 text-left 
                          text-sm font-medium text-gray-900 "> 
              Your message 
            </label> 
            <textarea rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="block p-2.5 w-full text-sm 
                text-gray-900 bg-gray-50 rounded-lg 
                            shadow-sm border border-gray-300 "
                placeholder="Query/Suggestion..."/> 
          </div> 
          <button type="submit"
                  className="mt-2 p-2 float-right text-white 
                  rounded-lg border-green-600 
                  bg-green-600 hover:scale-105"> 
            Send message 
          </button> 
        </form> 
	    </div>
    </div> 
  </div>
	</div>
  );
};

export default ContactPage;
