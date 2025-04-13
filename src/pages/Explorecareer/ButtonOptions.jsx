import React from "react";
// import Button from
import './btnOptionsStyles.css';
function ButtonOptions() {
  /**
   * These buttons collection is commons to all the courses
   * And these button will change the interface
   * according to options clicked
   */

 
  return (
    <>
      <div className="block md:flex flex-wrap p-2 justify-center  text-white text-center bg-gradient-to-b from-gray-900 to-gray-600">
        <div className="flex-1/3 border-b-2 md:border-b-0">
          <button  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:scale-105 hover:scale-105 transition duration-300 text-white md:font-medium font-light text-md md:text-lg  rounded-0 py-2">
            EXPLORE HIGHER COURSES
          </button>
        </div>
        <div className="flex-1/3 border-b-2 md:border-b-0">
          <button className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:scale-105 hover:scale-105 transition duration-300 text-white md:font-medium font-light text-md md:text-lg  rounded-0 py-2">
            EXPLORE JOBS
          </button>
        </div>
        <div className="flex-1/3">
          <button className="bg-gray-500 btnOptionClick  w-full hover:bg-gray-700 md:hover:scale-105 hover:scale-105 transition duration-300 text-white md:font-medium font-light text-md md:text-lg  rounded-0 py-2">
            EXPLORE COMPETITIVE EXAMS
          </button>
        </div>
      </div>
    </>
  );
}

export default ButtonOptions;
