// import React ,{useEffect} from 'react';
// import {useNavigate} from 'react-router-dom';
// export default function Protectedroute(component: Component) {
//    
//     const navigate = useNavigate();
//     useEffect(()=>{
//         let login = localStorage.getItem('login');
//         if(!login){
//             window.alert("pahle login karo")
//             navigate('/login');
//         }

//     });
//     return (
//         <div>
            
//           {Component {...props}}
//         </div>
//     )
// }



// import React from "react";
// import { Navigate, Route, Routes } from "react-router-dom";

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//     const isAuthenticated = localStorage.getItem("isAuthenticated");
//     console.log("this", isAuthenticated);

//     return (
//         <Routes>
//             <Route
//                 {...restOfProps}
//                 render={(props) =>
//                     isAuthenticated ? <Component {...props} /> : <Navigate to="/login" />
//                 }
//             />
//         </Routes>

//     );
// }

// export default ProtectedRoute;

