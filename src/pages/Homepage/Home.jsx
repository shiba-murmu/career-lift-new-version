import React from "react";
import Transition from "../../components/sliderEffect/Transition";
import "./home.css";

function SectionTwo() {
  return (
    <>
      <div className="min-h-screen w-full flex justify-center flex-col items-center py-10">
        <div className="text-center">
          <h1
            className="text-2xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            Career Lift an opportunity
          </h1>
          <br />
          <h1
            className="text-2xl md:text-6xl font-bold mt-4"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            to elevate your <span className="highlight">career</span>
          </h1>
        </div>
        <br />
        <div className="text-center">
          <p className="text-lg md:text-2xl text-neutral-400" style={{fontFamily: "'Raleway', sans-serif", fontWeight: "SemiBold"}}>
            Career lift is the platform where you can explore a wide range of
          </p>
          <p className="text-lg md:text-2xl text-neutral-400" style={{fontFamily: "'Raleway', sans-serif", fontWeight: "SemiBold"}}>
            opportunities to elevate your career with the
            <b className="highlight">help of AI assistant.</b>
          </p>
        </div>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <Transition />
      <SectionTwo />
    </>
  );
}

export default Home;
