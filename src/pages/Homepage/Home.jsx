import React from "react";
import TextShow from "../../components/animation/TextShow";
import Transition from "../../components/sliderEffect/Transition";
import "./home.css";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
import MyButton from "../../components/UI/button/MyButton";
function SectionTwo() {
  /**
   *  The SectionThree() component is a functional component that returns a JSX element.
   *  It is a header component that is used to display the header of the page.
   *  @returns a JSX element..
   */
  return (
    <>
      <div
        className="h-64 md:min-h-screen w-full flex justify-center flex-col items-center"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <BackgroundParticles />
        <div className="text-center flex  flex-col justify-center items-center h-full relative">
          <h1
            className="text-2xl md:text-5xl text-white"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            CAREER LIFT OPPORTUNITY
          </h1>
          <h1
            className="text-2xl md:text-5xl font-bold mt-2 text-white"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            TO ELEVATE YOUR <span className="highlight">CAREER</span>
          </h1>
          <div className="text-center pt-2 px-5 flex flex-col relative">
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
      <div className=" relative min-h-screen bg-gray-900 py-10 w-full md:grid md:">
        {/* <BackgroundParticles /> */}
        <div className="md:flex px-5 md:justify-center md:items-center">
          <div className="text-start relative md:w-1/2 px-10 flex flex-col h-96 justify-center">
            <div>
              {/* For heading divs */}
              <h1
                className="text-2xl md:text-5xl font-bold text-white"
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bolder",
                }}
              >
                BUILD YOUR <span className="highlight">CAREER</span>
              </h1>
            </div>
            <p
              className="text-sm md:text-xl text-neutral-400"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "SemiBold",
              }}
            >
              With Career Lift, you can build your career by exploring a wide
              range of job opportunities, getting guidance from AI assistant,
              and by taking skill tests to showcase your skills. Our platform is
              designed to help you grow your career by providing you the right
              tools and resources.
            </p>
            <p
              className="text-sm md:text-xl text-neutral-400"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "SemiBold",
              }}
            >
              Our platform is designed to help you grow your career by providing
              you the right
              <b className="highlight2">tools and resources.</b>
            </p>
          </div>

          <div className="md:w-1/2 grid place-items-center-safe  relative">
            {/* <img
              src="https://img.freepik.com/premium-photo/fun-illustration-cartoon-backpacker_183364-55759.jpg?semt=ais_hybrid&w=740"
              alt="Bulding images"
              className="rounded-4xl"
            /> */}
            <img
              src="https://img.freepik.com/free-psd/marketing-character-composition-rendering_23-2151703489.jpg?semt=ais_hybrid&w=740"
              className="rounded h-60 w-80 md:h-90 md:w-96 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SectionFour() {

  /**
   * By the help of gsap library we can animate the text
   * From this function...
   *
   */

  return (
    <>
      <div className=" relative min-h-screen w-full grid place-items-center text-9xl  font-bold r from-[#ff7e5f] to-[#feb47b]">
        <TextShow>EXPLORE US</TextShow>
      </div>
    </>
  );
}

function Home() {
  return (
    <>
      <Transition />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default Home;
