import React from "react";
import TextShow from "../../components/animation/TextShow";
import Transition from "../../components/sliderEffect/Transition";
import "./home.css";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
import CardCarousel from "../../components/sliderEffect/CardCarousel";

function SectionOne() {
  return (
    <>
      <div className="relative mt-2 md:mt-5 bg-gray-700 z-50 h-[50vh] grid place-content-center  w-full dark:bg-neutral-900">
        {/* <img src="./images/career.jpeg" alt="some public images here." */}
        {/* className="absolute top-0 left-0 w-full h-full object-cover hover:opacity-50 transform duration-500 hove:size-110" /> */}
      </div>
    </>
  );
}

function SectionTwo() {
  /**
   *  The SectionThree() component is a functional component that returns a JSX element.
   *  It is a header component that is used to display the header of the page.
   *  @returns a JSX element..
   */
  return (
    <>
      <div
        className="h-64 md:min-h-[70vh] w-full flex justify-center flex-col items-center"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <BackgroundParticles />
        <div className="text-center flex  flex-col justify-center items-center h-full relative">
          <h1
            className="text-2xl md:text-5xl text-amber-400"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            CAREER LIFT OPPORTUNITY
          </h1>
          <h1
            className="text-2xl md:text-5xl font-bold mt-2 text-amber-400"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            TO ELEVATE YOUR <span className="highlight">CAREER</span>
          </h1>
          <div className="text-center pt-2 px-5 flex flex-col relative">
            <p
              className="text-sm md:text-lg text-white dark:text-blue-600"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: "SemiBold",
              }}
            >
              Career lift is the platform where you can explore a wide range of
            </p>
            <p
              className="text-sm md:text-lg text-white dark:text-blue-600 "
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
      <div className=" relative z-50  min-h-screen bg-pink-900 dark:bg-neutral-900 py-10 w-full md:grid md:">
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
                <TextShow>
                  BUILD YOUR <span className="highlight">CAREER</span>
                </TextShow>
              </h1>
            </div>
            <TextShow>
              <p
                className="text-sm md:text-lg text-white  font-light leading-relaxed"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: "normal",
                }}
              >
                With Career Lift, you can build your career by exploring a wide
                range of career opportunities, getting guidance from AI
                assistant, and by taking skill tests to showcase your skills.
                Our platform is designed to help you grow your career by
                providing you the right tools and resources.
              </p>
            </TextShow>
            <TextShow>
              <p
                className="text-sm md:text-lg text-white  font-light leading-relaxed"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: "SemiBold",
                }}
              >
                Our platform is designed to help you grow your career by
                providing you the right
                <b className="highlight2">tools and resources.</b>
              </p>
            </TextShow>
          </div>

          <div className="md:w-1/2 grid place-items-center-safe  relative">
            <TextShow>
              <img
                src="./images/otherCareer.png"
                className="rounded-2xl relative z-50 editingImage h-80 w-70 md:h-96 md:w-96 object-cover"
              />
            </TextShow>
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
      <div className="relative h-64 md:min-h-[70vh] z-50 w-full grid place-items-center text-4xl  md:text-7xl  font-bold text-amber-400">
        <TextShow>EXPLORE US</TextShow>
      </div>
    </>
  );
}

function Home() {
  /**
   * Main function for the page here....
   */
  return (
    <>
      <Transition />
      {/* <SectionOne /> commented for some time */}
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </>
  );
}

export default Home;
