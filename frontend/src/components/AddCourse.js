import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./navcomponent/login.css";
import "./addCourse.css";

const AddCourse=()=>{
  const history = useNavigate();
  const [form, setForm] = useState({
       name: "",
       author: "",
       description: "",
       thumbnail: "",
       courselink: "",
       price:"",
     });
  const token = localStorage.getItem("auth_token");
    //  const handleChange=(e)=>{                
    //   // e.persist();
    //    setForm((prevState)=>({
    //      ...prevState,
    //      [e.name]:e.value
         
    //    }))
       
    //  };
    function updateForm(value) {
           return setForm((prev) => {
             return { ...prev, ...value };
           });
    }

      const sendRequest = async()=>{
      //   await axios.post("http://localhost:5000/courses",{
      //     name:String(form.name),
      //     author:String(form.author),
      //     description:String(form.description),
      //     price:Number(form.price)
      //   }).then(res=>res.data).catch(error => {
      //     console.log(error)
      // });
      await fetch("http://localhost:5000/courses/", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(form),
      })
      .catch(error => {
        window.alert(error);
        console.log("can not add",error);
        
        return;
      });
      }

     const handleSubmit=(e)=>{
       e.preventDefault();
       console.log(form);
       sendRequest();
       sendRequest().then(()=>history('/')).catch(e=>{
         console.log(e)});
     };
  return (
  <div>
    <h2 id="add-title">add course</h2>
  <div id="form-container">

      <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">creator</label>
              <input
                type="text"
                className="form-control"
                id="author"
                value={form.author}
                onChange={(e) => updateForm({ author: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                value={form.description}
                onChange={(e) => updateForm({ description: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">thumbnail</label>
              <input
                type="text"
                className="form-control"
                id="thumbnail"
                value={form.thumbnail}
                onChange={(e) => updateForm({ thumbnail: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">link</label>
              <input
                type="text"
                className="form-control"
                id="courselink"
                value={form.courselink}
                onChange={(e) => updateForm({ courselink: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">price</label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={form.price}
                onChange={(e) => updateForm({ price: e.target.value })}
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Create course"
                className="btn btn-primary"
              />
            </div>
          </form>
      </div>
      </div>
      );
}

export default AddCourse;