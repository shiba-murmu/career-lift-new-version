import React from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import RotatingLettersWithGSAP from "../components/animation/RotatingLettersWithGSAP";
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
            <h1 style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: "bolder" }}>
              <RotatingLettersWithGSAP word="CAREER LIFT" />
            </h1>
            <p className="text-md md:text-3xl text-center pt-1  text-amber-300" style={{ fontFamily: "'Raleway', sans-serif", fontWeight: "SemiBold" }}>
              Explore opportunities and get guidance.
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
