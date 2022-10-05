import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from "react-router";
 
// export default function Create() {
//  const [form, setForm] = useState({
//    name: "",
//    author: "",
//    description: "",
//    price:"",
//  });
//  const navigate = useNavigate();
 
//  // These methods will update the state properties.
//  function updateForm(value) {
//    return setForm((prev) => {
//      return { ...prev, ...value };
//    });
//  }
 
//  // This function will handle the submission.
//  async function onSubmit(e) {
//    e.preventDefault();
 
//    // When a post request is sent to the create url, we'll add a new record to the database.
//    const newCourse = { ...form };
 
  //  await fetch("/", {
  //    method: "POST",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(newCourse),
  //  })
  //  .catch(error => {
  //    window.alert(error);
  //    console.log("can not add");
     
  //    return;
  //  });
 
//    setForm({ name: "", author: "", description: "", price:"" });
//    navigate("/");
//  }
 
//  // This following section will display the form that takes the input from the user.
//  return (
//    <div>
//      <h3>Create New Record</h3>
//      <form onSubmit={onSubmit}>
//        <div className="form-group">
//          <label htmlFor="name">Name</label>
//          <input
//            type="text"
//            className="form-control"
//            id="name"
//            value={form.name}
//            onChange={(e) => updateForm({ name: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <label htmlFor="position">author</label>
//          <input
//            type="text"
//            className="form-control"
//            id="author"
//            value={form.author}
//            onChange={(e) => updateForm({ author: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <label htmlFor="description">description</label>
//          <input
//            type="text"
//            className="form-control"
//            id="description"
//            value={form.description}
//            onChange={(e) => updateForm({ description: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <label htmlFor="price">price</label>
//          <input
//            type="text"
//            className="form-control"
//            id="price"
//            value={form.price}
//            onChange={(e) => updateForm({ price: e.target.value })}
//          />
//        </div>
//        <div className="form-group">
//          <input
//            type="submit"
//            value="Create course"
//            className="btn btn-primary"
//          />
//        </div>
//      </form>
//    </div>
//  );
// }

const AddCourse=()=>{
  const history = useNavigate();
  const [form, setForm] = useState({
       name: "",
       author: "",
       description: "",
       price:"",
     });
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      .catch(error => {
        window.alert(error);
        console.log("can not add");
        
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
      );
}

export default AddCourse;