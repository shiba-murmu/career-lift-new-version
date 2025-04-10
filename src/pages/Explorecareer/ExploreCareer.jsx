import React from "react";
import MainCard from "../../components/Card/MainCard";
// import { Link } from "react-router-dom";
// import Button from "@mui/material/Button";
import "./ExploreCareer.css";
/**
 *
 * @returns Want use animation show here
 */
import TextShow from "../../components/animation/TextShow";
function ModelUI({ head, des }) {
  return (
    <>
      <MainCard heading={head} description={des} />
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
        <div className="flex justify-center md:justify-start  p-3">
          {/* Graduation div */}
          <TextShow className="text-center flex">
            <ModelUI
              head={"CAREER AFTER GRADUATION"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
        <div className="flex justify-center p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI
              head={"CAREER AFTER INTERMEDIATE"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
        <div className="flex justify-center md:justify-end p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI
              head={"CAREER AFTER INTERMEDIATE"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
        <div className="flex justify-center p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI
              head={"CAREER AFTER INTERMEDIATE"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
        <div className="flex justify-start p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI
              head={"CAREER AFTER INTERMEDIATE"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
        <div className="flex justify-center p-3">
          {/* Intermediate div */}
          <TextShow>
            <ModelUI
              head={"CAREER AFTER INTERMEDIATE"}
              des={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals."
              }
            />
          </TextShow>
        </div>
      </div>
    </>
  );
}

export default ExploreCareer;
