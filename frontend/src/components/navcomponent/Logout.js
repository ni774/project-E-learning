import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';

export default function Logout() {
    const hostory = useNavigate();

    const logout=async ()=>{
        try{
            
        const res=await fetch("http://localhost:5000/users/logout", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          })
          .catch(error => {
            window.alert(error);
            console.log("can not loggedout bro");
            
            return;
          });
            if(res===401 || !res ){
                window.alert('please logout later');
            }else{
                window.alert("successfully logged out");
                localStorage.setItem('login',false);
                hostory('/login');
                // window.location.reload()
            }

        }catch(err){
            console.log(err);
        }
    }

    useEffect( ()=>{
        logout();
    },[]);
    return (
        <div>
            
        </div>
    );
}
