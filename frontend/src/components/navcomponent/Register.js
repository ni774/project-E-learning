import React,{ useState }from 'react';
import { Link } from "react-router-dom";  
import {useNavigate} from 'react-router-dom'
import "./login.css";


export default function Register() {
    const history = useNavigate();
    const[user,setUser]= useState({
        name:"",
        email:"",
        password:"",
    });
    const [errorMsg,setErrorMsg]=useState("");
    function updateUser(value) {
         
        return setUser((prev) => {
          return { ...prev, ...value };
        });
    }

    const sendRequest = async()=>{

       const res= await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
      .catch(error => {
        window.alert(error);
        console.log("can not add");
        
        return;
      });
      if(res.status===400||!res){
        window.alert("already register");
      }else{
        window.alert("registered succesfully");
      }
      
    }
     
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!user.name || !user.email || !user.password){
            setErrorMsg("fill all field");
            return;
        }
        setErrorMsg("");
        console.log(user);
        // sendRequest();
        sendRequest().then(()=>history('/login')).catch(e=>{
            console.log(e);
          });   
    };
    return (
        <div id="form-container">
          
            <form onSubmit={handleSubmit}>
                <h1>Register here!</h1>
                <div>
                   <label> Name: </label>
                    <input type="text" placeholder="enter your name" 
                      className="form-control"
                      id="name"
                      value={user.name}
                      onChange={
                        (e)=>updateUser({name: e.target.value})}
                    />
                </div>
                <div>
                    <label>email: </label>
                     <input type="text" placeholder="enter your email"
                     className="form-control"
                     id="email"
                     value={user.email}
                     onChange={(e)=>updateUser({email: e.target.value})}
                               
                    />
                </div>
                <div>
                    <label>password: </label>
                    <input type="text" placeholder="enter your password"
                     className="form-control"
                     id="password"
                     value={user.password}
                     onChange={
                       (e)=>updateUser({password: e.target.value})}
                    />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="create account"
                    className="btn btn-primary"
                  />
                </div>
                <p>{errorMsg}</p>
            <div>if Already Register ? <Link to="/login" >Login</Link></div>
            </form>
            

        </div>
    );
}
