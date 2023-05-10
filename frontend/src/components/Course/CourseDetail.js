import React,{useState } from 'react';
import { useLocation } from "react-router-dom";
import "./coursedetail.css";

export default function CourseDetail() {
  const location = useLocation();
  const props = location.state;
  const [showVideo, setShowVideo] = useState(false);
  console.log(props)
  const play = () => {
      setShowVideo(true);
  };

  const close = () => {
    setShowVideo(false);
  };
  return (
    <div>
      <div className="courseDetail_card">
      {showVideo && (
      <div className="courseDetail_videoContainer">
        <button className="courseDetail_closeButton" onClick={close}>X</button>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QfxuvdmDj7Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
       </div>
     )}
        <div className="courseDetail_img">
          <img src="https://rb.gy/ezv23" alt=" error " />

          {/* <a href='https://youtu.be/QfxuvdmDj7Y' target="_blank"> */}
            <button id="courseDetail_viewButton" onClick={play}>
              <span class="material-symbols-outlined">
                play_circle
              </span>
            </button>
          {/* </a> */}


        </div>

        <h1>{props.name}</h1>
        <h6 id="courseDetail_description">{props.description}</h6>
        <h6 id="courseDetail_auther">{props.author}</h6>
        <h2><span>&#8377;</span>{props.price}</h2>

        <button className="courseDetail_course-button">buy</button>
      </div>
    </div>
  )
}
