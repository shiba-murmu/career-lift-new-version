import React from "react";
import Transition from "../../components/sliderEffect/Transition";
import "./Home.css";

function SectionTwo() {
  return (
    <>
      <div className="h-96 w-full bgGradient flex items-center">
        <div className="pl-14">
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
