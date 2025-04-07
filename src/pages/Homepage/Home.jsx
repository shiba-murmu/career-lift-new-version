import React from "react";
import Transition from "../../components/sliderEffect/Transition";
import "./home.css";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
function SectionTwo() {
  /**
   *  The SectionThree() component is a functional component that returns a JSX element.
   *  It is a header component that is used to display the header of the page.
   *  @returns a JSX element..
   */
  return (
    <>
      <div className=" min-h-screen w-full flex justify-center flex-col items-center" style={{ position: "relative", overflow: "hidden" }}>
        <BackgroundParticles />
        <div className="text-center relative">
          <h1
            className="text-2xl  md:text-6xl font-bold"
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
        <div className="text-center relative">
          <p
            className="text-sm md:text-xl text-neutral-400"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "SemiBold",
            }}
          >
            Career lift is the platform where you can explore a wide range of
          </p>
          <p
            className="text-sm md:text-xl text-neutral-400"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "SemiBold",
            }}
          >
            opportunities to elevate your career with the
            <b className="highlight">help of AI assistant.</b>
          </p>
        </div>
      </div>
    </>
  );
}

function SectionThree() {
  /**
   * Next working for this page is to design here..
   * Pending workings here.
   */
  return (
    
    <>
      {/* <SectionThree /> */}
      <div className="pl-10 min-h-screen w-full flex justify-start flex-col items-start">
        <div className="text-start relative">
          <h1
            className="text-2xl md:text-6xl font-bold"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            Build your <span className="highlight">career</span>
          </h1>
        </div>

        <div className="text-start relative">
          <p
            className="text-sm md:text-xl text-neutral-400"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "SemiBold",
            }}
          >
            Career lift is the platform where you can explore a wide range of
          </p>
          <p
            className="text-sm md:text-xl text-neutral-400"
            style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: "SemiBold",
            }}
          >
            opportunities to elevate your career with the
            <b className="highlight">help of AI assistant.</b>
          </p>
        </div>
      </div>
    </>
  )
}

function Home() {
  return (
    <>
      <Transition />
      <SectionTwo />
      <SectionThree />
    </>
  );
}

export default Home;
