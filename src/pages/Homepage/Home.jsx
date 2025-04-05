import React from "react";
import Transition from "../../components/sliderEffect/Transition";
import "./Home.css";

function SectionTwo() {
  return (
    <>
      <div className="h-96 w-full bgGradient flex items-center">
        <div className="pl-14">
          <h1 className="text-2xl md:text-5xl font-bold">
            Career Lift an opportunity <br /> to elevate your career
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
