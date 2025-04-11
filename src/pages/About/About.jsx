import React from "react"

function AboutUSheading() {
  return (
    <>
      <div>
        <span style={{fontFamily: "Open Sans"}}>About Us</span>
      </div>
    </>
  )
}
function SectionOne() {
  return(
    <>
      <div className="felx-col md:flex md:h-[90vh] bg-gray-900">
        <div className="w-1/2 p-50 grid place-content-center">
          <img src="https://images.pexels.com/photos/9783350/pexels-photo-9783350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="ai image" 
          className="w-full rounded-lg"/>
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-4xl font-bold mb-4 text-white">Keep it simple</h2>
          <p className="pr-30 text-lg text-white">
          CareerLift is a company that specializes in helping individuals navigate their career journeys. Our team of experts has years of experience in the field of career development and has designed this website with the purpose of providing a comprehensive resource for individuals looking to advance their careers. We believe that everyone deserves to have a fulfilling career and we are committed to helping individuals achieve their career goals. This website is designed to provide a user-friendly interface that allows individuals to easily navigate and find the resources they need. Whether you are just starting out in your career or are looking to make a change, we have the tools and resources you need to succeed. Our team is dedicated to providing the best possible experience for our users and we are constantly working to improve and expand our website. We hope that you find this website to be a valuable resource in your career journey.
          </p>
        </div>
      </div>
    </>
  )
}

function About() {
  return (
    <>
      <SectionOne />
    </>
  )
}

export default About