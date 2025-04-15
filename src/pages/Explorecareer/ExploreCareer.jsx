import React from "react";
import MainCard from "../../components/Card/MainCard";
import "./ExploreCareer.css";
import BackgroundParticles from "../../components/UI/particle/BackgroundParticles";
/**
 *
 * @returns Want use animation show here
 */
import TextShow from "../../components/animation/TextShow";
function ModelUI({ heading, description, redirectPath }) {
  /**
   * In this function props are passed
   * @param {string} heading
   * @param {string} description
   * @param {string} redirectPath
   * @returns
   */
  return (
    <>
      <MainCard
        heading={heading}
        description={description}
        redirectPath={redirectPath}
      />
    </>
  );
}

function ExploreCareer() {
  /**
   * This is the main function for this file here...to import in other places.
   */
  return (
    <>
      {/* <BackgroundParticles /> */}
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
                className="text-2xl md:text-5xl text-center text-white"
              >
                EXPLORE YOUR CAREER
              </h1>
              <p
                className="text-sm md:text-lg text-center  text-amber-300"
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
            <div></div>
          </div>
        </div>
      </div>
      <div>
        {/* Main div for the Career paths */}
        {/* ***************************************************************************************************************** */}
        <div className="flex md:pb-30 pt-10 p-3">
          {/* Graduation div */}
          <TextShow>
            <ModelUI
              heading={"CAREER AFTER GRADUATION"}
              description={
                "After completing your graduation, you have a wide range of career options to choose from. You can pursue higher education like master's or Ph.D. in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for entrepreneurship and start your own business. You can also pursue certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals. Click the button below to explore more."
              }
              redirectPath="/graduation/1"
            />
          </TextShow>
        </div>
        {/* ********************************************************************************************************************* */}
        <div className="flex justify-center md:pb-30 p-3">
          {/* Intermediate div here */}
          <TextShow>
            <ModelUI
              heading={"CAREER AFTER INTERMEDIATE"}
              description={
                "After completing your intermediate, you have a wide range of career options to choose from. You can pursue higher education like bachelor's or diplomas in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals. Click the button below to explore more."
              }
              redirectPath="/intermediate/2"
            />
          </TextShow>
        </div>
        {/* *********************************************************************************************************************** */}
        <div className="flex justify-center md:pb-30 p-3">
          {/* matriculation div here */}
          <TextShow>
            <ModelUI
              heading={"CAREER AFTER MATRICULATION"}
              description={
                "After completing your matriculation, you have a wide range of career options to choose from. You can pursue higher education like intermediate or diplomas in your desired field. You can also look for job opportunities in various sectors such as IT, finance, healthcare, education, etc. You can also opt for certifications or diplomas in various fields to enhance your skills and knowledge. You can also look for internships or volunteer opportunities to gain experience and build your network. You can also take online courses or attend workshops to improve your skills and knowledge. You can also start your own blog or YouTube channel to share your expertise and build your personal brand. You can also look for freelance opportunities to work on projects and build your portfolio. You can also take up online certifications or courses to learn new skills and upgrade your knowledge. Whatever you choose, make sure it aligns with your passion and goals. Please click the button below to explore more."
              }
              redirectPath="/matriculation/3"
            />
          </TextShow>
        </div>
        {/* *********************************************************************************************************************** */}
      </div>
    </>
  );
}

export default ExploreCareer;
