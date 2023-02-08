import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import "./about.css";
import img1 from "../img/img1.jpg" ;
import img2 from "../img/img2.jpg" ;
import img3 from "../img/img3.jpg" ;

export default function About() {
    const images = [
        { url: img1 },
        { url: img2 },
        { url: img3 },
        
      ];
    return (
        <div className="about-container">
            <div id="p1">
            <span>industry Expert !</span>
                <div id="about-content">
                    
                    <h1>create your beutiful career</h1>
                    <h6> Quickly create a professional website that looks stunning on
                    desktops, tablets and even mobile devices with Website.com website builder.
                    </h6>
                </div>
            </div>
            <div id="p2">
            <SimpleImageSlider
                width={796}
                height={404}
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
            />
            <div id="services-list">
                <ul>
                    <li>software Engineering</li>
                    <li>Block Chain</li>
                    <li>Data science</li>
                    <li>Frontend Development</li>
                    <li>Finencial Education</li>
                </ul>
            </div>
            </div>
            <div id="about-footer">
                <h3>fAQ:-</h3>
                <li>how to get access of course ?</li>
                <li>what if i left in between the course ?</li>
                <li>do we ge Certificate in this courses ?</li>
                <li>is Recording available ?</li>
                <li>is there any Coupan code ?</li>
            </div>
            
        </div>
                    )
                }
