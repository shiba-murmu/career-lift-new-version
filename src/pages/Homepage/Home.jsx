import React from "react";
import Transition from "../../components/sliderEffect/Transition";


function SectionTwo(){
  return (
    <>
      <div>
        <span className="text-5xl">I am the section two interface...</span>
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
