import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { async } from "@firebase/util";
import "./login.css";

export default function Login(){
    // const auth=getAuth();
    // const [loginState,setLoginState]=useState(true);
    const history=useNavigate();
    const [values,setValues]=useState(
        {
            email:"",
            password:"",
        }
    );
    const[errorMsg,setErorrMsg]=useState("");
    function updateUser(value) {
         
        return setValues((prev) => {
          return { ...prev, ...value };
        });
    }

    const sendRequest = async()=>{

        const res=await fetch("http://localhost:5000/users/login", {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(values),
       })
       .catch(error => {
         window.alert(error);
         console.log("can not get bro");
         
         return;
       });
       if(res.status===404||!res){
         window.alert("user doesn't exist or wrong email & password");
       }else{
         window.alert("login succesfully");
         localStorage.setItem('login',true);
         history('/courseslist');
         window.location.reload();
        //  setLoginState(true);
       }
       
     }

    const handleSubmitButton=(e)=>{
          e.preventDefault();
        if(!values.email ||!values.password){
            setErorrMsg("fill all field");
            window.alert("fill properly");
            return;
        }
        setErorrMsg("");
        console.log(values.email);
        sendRequest();
        // sendRequest().then(()=>history('/courseslist')).catch(e=>{
        //     console.log(e);
        //   }); 

    };
    return(
         <div id="form-container">
            
            <form onSubmit={handleSubmitButton}>
               <h1>sign in</h1>
              <div className="mb-3">
                    <label> email:</label> 
                      <input type="text" placeholder="enter your email"
                      className="form-control"
                      id="email"
                      value={values.email}
                      onChange={(e)=>updateUser({email: e.target.value})}
                                
                      />
              </div>
              <div>
                    <label>
                        password: 
                    </label>
                      <input type="text" placeholder="enter your password"
                      className="form-control"
                      id="password"
                      value={values.password}
                      onChange={
                        (e)=>updateUser({password: e.target.value})}
                      />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="login"
                  className="btn btn-primary"
                />
              </div>
              <div>create Account <Link to="/register">Register</Link></div>
              <p>{errorMsg}</p>
            </form>
        
             
         </div> 

    );
}
