import React from "react";
// import Button from 
function ButtonOptions() {
  /**
   * These buttons collection is commons to all the courses
   * And these button will change the interface
   * according to options clicked
   */
  return (
    <>
      <div className="flex flex-wrap p-5 justify-center  text-white text-center">
        <div className="flex-1/3 bg-amber-300">
            Higher studies
        </div>
        <div className="flex-1/3 bg-amber-950">
            Jobs
        </div>
        <div className="flex-1/3 bg-blue-950">
            
        </div>
      </div>
    </>
  );
}

export default ButtonOptions;
