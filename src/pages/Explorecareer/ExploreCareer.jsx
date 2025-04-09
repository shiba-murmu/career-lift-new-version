import React from "react";
import MainCard from "../../components/Card/MainCard";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./ExploreCareer.css";
/**
 *
 * @returns Want use animation show here
 */
import TextShow from "../../components/animation/TextShow";
function ModelUI() {
  return (
    <>
      <MainCard />
    </>
  );
}

function ExploreCareer() {
  return (
    <>
      <div>
        <div className="video-container-explore">
          <video autoPlay loop muted className="background-video">
            <source src="/videos/explore.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="overlay"></div>
          {/* Content */}
          <div className="relative z-50 flex flex-col items-center justify-center h-full bg-transparent">
            <div className="mb-4">
              <h1
                style={{
                  fontFamily: "'Open Sans', sans-serif",
                  fontWeight: "bolder",
                }}
                className="text-2xl md:text-6xl text-center text-white"
              >
                EXPLORE YOUR CAREER
              </h1>
              <p
                className="text-sm md:text-xl text-center  text-amber-300"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: "SemiBold",
                }}
              >
                it is a platform for you to explore your career. Discover a
                <br />
                platform designed to help you navigate and shape your career
                path.
              </p>
            </div>
            <div>
              {/* <Link to={"/home"}>
                <Button>Get Started</Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* Main div for the Career paths */}
        <div className="flex justify-start p-3">
          {/* Graduation div */}
          <TextShow className='text-center flex'>
            <ModelUI />
          </TextShow>
        </div>
        <div className="flex justify-end p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI />
          </TextShow>
          {/* <ModelUI /> */}
        </div>
        <div className="flex justify-center p-3">
          <TextShow>
            <ModelUI />
          </TextShow>
          {/* Matriculation div */}
          {/* <ModelUI /> */}
        </div>
        <div className="flex justify-start p-3">
          <TextShow>
            <ModelUI />
          </TextShow>
          {/* Other jobs div */}
          {/* <ModelUI /> */}
        </div>
        <div className="flex justify-center p-3">
          <TextShow>
            <ModelUI />
          </TextShow>
          {/* Other  */}
          {/* <ModelUI /> */}
        </div>
        <div className="flex justify-end p-3">
          {/* Others */}
          {/* <ModelUI /> */}
          <TextShow>
            <ModelUI />
          </TextShow>
        </div>
      </div>
    </>
  );
}

export default ExploreCareer;
