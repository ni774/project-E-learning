import React,{useState} from 'react'
import axios from 'axios';

function Search({courses,setcourses}) {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = async (e) => {
        try {
          setSearchInput(e.target.value);
        //   const response = await axios.get(`http://localhost:5000/courses//search?keyword=${e.target.value}`);
          const response = await fetch(`http://localhost:5000/courses/search?course=${e.target.value}`, {
          method: "get",
        //   headers: {
        //     Authorization: `${token}`,
        //   },
        });
          console.log(response);
        } catch (error) {
          console.log(error);
        }
    };
    

  return (
    <div>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                onChange={handleChange}
                value={searchInput}
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    </div>
  )
}

export default Search;