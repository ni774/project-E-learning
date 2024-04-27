import React, { useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { async } from "@firebase/util";
import {useAuth} from "../../context/Auth";
import "./style/login.css";

export default function Login() {
  // const auth=getAuth();
  // const [loginState,setLoginState]=useState(true);
  const history = useNavigate();
  const [values, setValues] = useState(
    {
      email: "",
      password: "",
    }
  );
  const [auth, setAuth] = useAuth();
  const [errorMsg, setErorrMsg] = useState("");
  
  function updateUser(value) {

    return setValues((prev) => {
      return { ...prev, ...value };
    });
  }
 
  const sendRequest = async () => {
    try {
      const res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (res.status === 404 || !res) {
        window.alert("user doesn't exist or wrong email & password");
      }
      else {
        const data = await res.json();
        console.log("response is heare", data);
        setAuth({
          ...auth,
          user:data.user,
          token:data.token,
        })
        // localStorage.setItem("user",data.user);
        localStorage.setItem('login','true');

        // window.alert("login succesfully");
        localStorage.setItem("auth_token",data.token); 
        localStorage.setItem('auth',JSON.stringify(data));
        history('/dashboard/user');
        window.location.reload();
       
      }

    } catch (err) {
      window.alert(err);
      console.log(err);
      return;
    };

  }

  const handleSubmitButton = (e) => {
    e.preventDefault();
    if (!values.email || !values.password) {
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
return (
  <div id="login-body">
    <div className="login-formContainer">
    <form onSubmit={handleSubmitButton}>
      <h1>sign in</h1>
      <div className="mb-3">
        <label> email:</label>
        <input type="text" placeholder="enter your email"
          className="form-control"
          id="email"
          value={values.email}
          onChange={(e) => updateUser({ email: e.target.value })}

        />
      </div>
      <div>
        <label>
          password:
                    </label>
        <input type="password" placeholder="enter your password"
          className="form-control"
          id="password"
          value={values.password}
          onChange={
            (e) => updateUser({ password: e.target.value })}
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
      <div>forgot password <Link to="/reset_password">Reset</Link></div>
      <p>{errorMsg}</p>
    </form>
  </div>

</div>

);
}
