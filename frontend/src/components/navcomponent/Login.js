import React, { useState } from "react";



export default function Login(){
    document.getElementById('Form-id').addEventListener('submit',(event)=>{
        event.preventDefault();
    });
    return(
        <form id='Form-id'>
          <label>email</label>
          <input type='text'/>
          <label>password</label>
          <input type='text'/>
          <button className="bg-primary">submit</button>
          
        </form>

    );
}