import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../../context/Auth";

export default function Logout() {
    const hostory = useNavigate();
    const [auth, setAuth] = useAuth();

    const logout=async ()=>{
        localStorage.removeItem("auth_token");
        localStorage.setItem("login",false);
        setAuth({
            ...auth,
            user: null,
            token: "",
        })
        localStorage.removeItem("auth");
        hostory('/login');
        window.location.reload()
    }

    useEffect( ()=>{
        logout();
    },[]);
    return (
        <div>
            
        </div>
    );
}
