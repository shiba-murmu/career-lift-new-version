import React from "react";
import { Link } from "react-router-dom";
// import MyButton from "../components/UI/button/MyButton";
import MyButton from "../components/UI/button/MyButton";
import "./Landingpage.css";
function Landingpage() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src="/videos/landing.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="overlay"></div>
        {/* Content */}
        <div className="content">
          <h1 className="text-5xl md:text-9xl font-extrabold"  style={{fontFamily: "'Open Sans', sans-serif", fontWeight: "bold"}}>Career Lift</h1>
          <p className="text-lg md:text-2xl">Explore opportunities to elevate your career with Career Lift</p>
          <Link to="/home">
            <MyButton className="btn-grad">Get Started</MyButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
