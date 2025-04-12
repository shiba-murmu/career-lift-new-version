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
      <div>
        <img src="https://images.pexels.com/photos/28669382/pexels-photo-28669382/free-photo-of-modern-skyscraper-architecture-in-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="High buildings"
        className="w-full h-screen md:h-screen object-center object-fit object-cover imgBackground" />
      </div>
    </>
  )
}

function About() {
  /**
   * Main function of this page here to export..
   */
  return (
    <>
      <SectionOne />
    </>
  )
}

export default About;


// <div className="w-1/2 p-50 grid place-content-center">
//   <img src="https://images.pexels.com/photos/9783350/pexels-photo-9783350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="ai image" 
//   className="w-full rounded-lg"/>
// </div>