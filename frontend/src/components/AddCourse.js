import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./navcomponent/style/login.css";
import "./style/addCourse.css";
import axios from "axios";

const AddCourse = () => {
  const history = useNavigate();
  const [form, setForm] = useState({
    name: "",
    creator: "",
    description: "",
    thumbnail: null,
    courselink: "",
    price: ""
  });

  const token = localStorage.getItem("auth_token");

  const formData = new FormData();

  formData.append("name", form.name);
  formData.append("creator", form.creator);
  formData.append("description", form.description);
  formData.append("thumbnail", form.thumbnail);
  formData.append("courselink", form.courselink);
  formData.append("price", form.price);

  const updateForm = (value) => {
    setForm((prev) => {
      return { ...prev, ...value };
    });
  };

  const sendRequest = async () => {
    try { 
      const response = await axios.post(
        "http://localhost:5000/courses/add",
        formData,
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "multipart/form-data", // Important for handling file uploads
          },
        }
      );

      console.log("response", response);

      // window.alert("Successfully created course");
      // history("/"); // Navigate to the desired route after successful submission
    } catch (error) {
      window.alert(error);
      console.log("Cannot add", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is", form);
    sendRequest();
  };
  return (
  <div>
    <h2 id="add-title">add course</h2>
  <div id="form-container">

      <form onSubmit={handleSubmit} enctype="multipart/form-data">
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
                value={form.creator}
                onChange={(e) => updateForm({ creator: e.target.value })}
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
              <label htmlFor="thumbnail">Thumbnail</label>
              <input
                type="file"
                className="form-control"
                id="thumbnail"
                onChange={(e) => updateForm({ thumbnail: e.target.files[0] })}
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