import React,{ useState }from 'react';
import { Link } from "react-router-dom";  
// import {createUserWithEmailAndPassword} from "firebase/auth";
// import {auth} from "../firebase";

export default function Register() {
    
    const[values,setValues]= useState({
        name:"",
        email:"",
        pass:"",
    });
    const [errorMsg,setErrorMsg]=useState("");
     
    const handleSubmission=(event)=>{
        event.preventDefault();
        if(!values.name || !values.email || !values.pass){
            setErrorMsg("fill all field");
            return;
        }
        setErrorMsg("");
        // createUserWithEmailAndPassword(auth,values.email,values.pass)
        // .then((res)=>{console.log(res);
        // }).catch((err)=>console.log("error",err));
    
};
    return (
        <div>
            <form>
                <label>
                    Name: <input type="text" placeholder="enter your name" onChange={
                        (event)=>setValues((prev)=>({ ...prev,name:event.currentTarget.value}))
                    }/>
                </label>
                <label>
                    email: <input type="text" placeholder="enter your email" onChange={
                        (event)=>setValues((prev)=>({ ...prev,email:event.currentTarget.value}))
                    }/>
                </label>
                <label>
                    password: <input type="text" placeholder="enter your password" onChange={
                        (event)=>setValues((prev)=>({ ...prev,pass:event.currentTarget.value}))
                    }/>
                </label>
                <button onClick={handleSubmission}>signUp</button>
            </form>
            <p>{errorMsg}</p>
            <div>if Already Register ? <Link to="/login" >Login</Link></div>

        </div>
    );
    }
