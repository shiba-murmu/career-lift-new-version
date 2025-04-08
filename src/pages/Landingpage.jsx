import React from "react";
import { Link } from "react-router-dom";
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
        <div className="relative z-50 flex flex-col items-center justify-center  h-full bg-transparent">
          <div className="mb-4">
            <h1 className="text-5xl text-center  md:text-9xl text-white" style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bolder" }}>
              Career Lift
            </h1>
            <p className="text-md md:text-4xl text-center  text-amber-300" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "SemiBold" }}>
              Find your dream job with Career Lift
            </p>
          </div>
          <div>
            <Link to={"/home"}>
              <MyButton>Get Started</MyButton>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landingpage;
