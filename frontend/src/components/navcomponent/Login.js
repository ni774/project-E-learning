import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";  
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { async } from "@firebase/util";




export default function Login(){
    // const auth=getAuth();
    // const navigate =useNavigate();
    const [values,setValues]=useState(
        {
            email:"",
            pass:"",
        }
    );
    const[errorMsg,setErorrMsg]=useState("");
    const handleSubmitButton=()=>{
        if(!values.email ||!values.pass){
            setErorrMsg("fill all field");
            return;
        }
        setErorrMsg("");
        // signInWithEmailAndPassword(auth,values.email,values.pass)
        // .then(async (res)=>{
        //     const user=res.user;
        //     navigate("/");
            
        // })
        // .catch((err)=>{
        //     setErorrMsg(err.message);
        // });
    };
    return(
        <div>
            <form id='Form-id'>
              <label>email</label>
              <input type='text' onChange={
                        (event)=>setValues((prev)=>({ ...prev,email:event.currentTarget.value}))
                    }/>
              <label>password</label>
              <input type='text' onChange={
                        (event)=>setValues((prev)=>({ ...prev,pass:event.currentTarget.value}))
                    }/>
              <div>
                <button className="bg-primary" type="submit" onClick={handleSubmitButton}>Login</button></div>
              
            </form>
             <div>create Account <Link to="/register">Register</Link></div>
             <p>{errorMsg}</p>
         </div>

    );
}