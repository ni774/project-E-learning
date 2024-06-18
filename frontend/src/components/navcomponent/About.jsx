import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./style/about.css";
import "../../../src/input.css"
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";

export default function About() {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },

    ];
    return (
        <div className="about-container ">
            {/*............top section..........*/}
            <div className='about-layout'>
                <SimpleImageSlider
                        width="100%"
                        height={500}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                        autoPlayDelay={10}
                        useGPURender={true}
                />

                <div className=' absolute top-52 left-64 w-72'>
                    <span className='font-serif text-5xl text-red-500'> <h1>Guide up!</h1></span>
                    <div id="about-content" className='text-white mt-8'>
                        <h1 className='text-red-600'> Quickly Learn whatever you want to </h1> 
                        <h2> that looks stunning when student learn from E-learning</h2>
                        <h6>Learn in Fast pace</h6>
                        
                    </div>
                </div>
            </div>

            {/*............bottom section..........*/}
            <div className="about-footer">
                <div className="about-footer-list" id="services-list">
                    <ul>
                        <li title="faq">software Engineering</li>
                        <li>Block Chain</li>
                        <li>Data science</li>
                        <li>Frontend Development</li>
                        <li>Finencial Education</li>
                    </ul>
                </div>
                <div className="about-footer-list" id="about-faq">
                    <h3>fAQ:-</h3>
                    <li>how to get access of course ?</li>
                    <li>what if i left in between the course ?</li>
                    <li>do we ge Certificate in this courses ?</li>
                    <li>is Recording available ?</li>
                    <li>is there any Coupan code ?</li>
                </div>

            </div>

        </div>
    )
}

