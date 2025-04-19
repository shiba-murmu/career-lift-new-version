import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./btnOptionsStyles.css";

/************Graduation files*********/
import GraduationExams from "./Graduation/GraduationData/GraduationExams";
import GraduationJobs from "./Graduation/GraduationData/GraduationJobs";
import GraduationHigherCourses from "./Graduation/GraduationData/GraduationHigherCourses";
// ********************************** //
/****************Intermediate files******** */
import IntermediateExams from "./Intermediate/IntermediateData/IntermediateExams";
import IntermediateJobs from "./Intermediate/IntermediateData/IntermediateJobs";
import IntermediateHigherCourses from "./Intermediate/IntermediateData/IntermediateHigherCourses";
/******************************************** */
/****************Matriculation files******** */
import MatriculationHigherCourses from "./Matriculation/MatriculationData/MatriculationHigherCourses";
import MatriculationJobs from "./Matriculation/MatriculationData/MatriculationJobs";
import MatriculationExams from "./Matriculation/MatriculationData/MatriculationExams";
/******************************************** */

function ButtonOptions() {
  /**
   * This is the main and parent function for this file
   * here the file name and function name is based on buttons
   *
   * but it will render both button and UI parts also..
   *
   * Reasons behind this type functions creation is to render the UI dynamicallly .
   */

  /**
   * These buttons collection is commons to all the courses
   * And these button will change the interface
   * according to options click
   * ed
   */
  const { id } = useParams();

  /************For graduation useState*************************************/
  const [getContent, setContent] = useState("higherCourse"); // default state is set as here.
  /********************************************************************** */
  const NestButtonOptions = (id) => {
    switch (id) {
      case "1":
        /**
         * This part only render graduation options
         *
         */
        return (
          <>
            <div className="block md:flex flex-wrap p-2 md:px-40 justify-center md:gap-5 text-white text-center">
              <div className="flex-1/4 mb-1 md:mb-0 md:border-b-0">
                <button
                  onClick={() => setContent("higherCourse")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:rounded-lg md:hover:scale-105 transition duration-600 text-white font-light text-md md:text-sm  rounded-sm py-2"
                >
                  <span>EXPLORE HIGHER COURSES</span>
                </button>
              </div>
              <div className="flex-1/4 mb-1 md:mb-0  md:border-b-0">
                <button
                  onClick={() => setContent("jobs")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:scale-105 transition duration-600 text-white  font-light text-md md:text-sm rounded-sm py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE JOBS</span>
                </button>
              </div>
              <div className="flex-1/4  md:border-b-0">
                <button
                  onClick={() => setContent("exams")}
                  className="bg-gray-500 btnOptionClick  w-full hover:bg-gray-700 md:hover:scale-105 transition duration-300 text-white rounded-sm font-light text-md md:text-sm  py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE COMPETITIVE EXAMS</span>
                </button>
              </div>
            </div>
            {/* Logic based content will render here.. */}
            <div className="h-screen">
              {getContent === "higherCourse" && <GraduationHigherCourses />}
              {getContent === "jobs" && <GraduationJobs />}
              {getContent === "exams" && <GraduationExams />}
            </div>
          </>
        );
      case "2":
        /**
         * This parts only render to the intermediate parts
         */
        return (
          <>
            <div className="block md:flex flex-wrap p-2 md:px-40 justify-center md:gap-5 text-white text-center">
              <div className="flex-1/4 mb-1 md:mb-0 md:border-b-0">
                <button
                  onClick={() => setContent("higherCourse")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:rounded-lg md:hover:scale-105 transition duration-600 text-white font-light text-md md:text-sm  rounded-sm py-2"
                >
                  <span>EXPLORE HIGHER COURSES</span>
                </button>
              </div>
              <div className="flex-1/4 mb-1 md:mb-0  md:border-b-0">
                <button
                  onClick={() => setContent("jobs")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:scale-105 transition duration-600 text-white  font-light text-md md:text-sm rounded-sm py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE JOBS</span>
                </button>
              </div>
              <div className="flex-1/4  md:border-b-0">
                <button
                  onClick={() => setContent("exams")}
                  className="bg-gray-500 btnOptionClick  w-full hover:bg-gray-700 md:hover:scale-105 transition duration-300 text-white rounded-sm font-light text-md md:text-sm  py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE COMPETITIVE EXAMS</span>
                </button>
              </div>
            </div>
            {/* Logic based content will render here */}
            <div className="h-screen">
              {getContent == "higherCourse" && <IntermediateHigherCourses />}
              {getContent == "jobs" && <IntermediateJobs />}
              {getContent == "exams" && <IntermediateExams />}
            </div>
          </>
        );
      case "3":
        /**
         * This parts only render to the matriculations parts here.
         */
        return (
          <>
            {/* <div>Matriculatins</div> */}
            <div className="block md:flex flex-wrap p-2 md:px-40 justify-center md:gap-5 text-white text-center">
              <div className="flex-1/4 mb-1 md:mb-0 md:border-b-0">
                <button
                  onClick={() => setContent("higherCourse")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:rounded-lg md:hover:scale-105 transition duration-600 text-white font-light text-md md:text-sm  rounded-sm py-2"
                >
                  <span>EXPLORE HIGHER COURSES</span>
                </button>
              </div>
              <div className="flex-1/4 mb-1 md:mb-0  md:border-b-0">
                <button
                  onClick={() => setContent("jobs")}
                  className="bg-gray-500 btnOptionClick w-full hover:bg-gray-700 md:hover:scale-105 transition duration-600 text-white  font-light text-md md:text-sm rounded-sm py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE JOBS</span>
                </button>
              </div>
              <div className="flex-1/4  md:border-b-0">
                <button
                  onClick={() => setContent("exams")}
                  className="bg-gray-500 btnOptionClick  w-full hover:bg-gray-700 md:hover:scale-105 transition duration-300 text-white rounded-sm font-light text-md md:text-sm  py-2 md:hover:rounded-lg"
                >
                  <span>EXPLORE COMPETITIVE EXAMS</span>
                </button>
              </div>
            </div>
            {/* Logic based content will render here.. */}
            <div className="h-screen">
              {getContent == "higherCourse" && <MatriculationHigherCourses />}
              {getContent == "jobs" && <MatriculationJobs />}
              {getContent == "exams" && <MatriculationExams />}
            </div>
          </>
        );
    }
  };
  return <>{NestButtonOptions(id)}</>;
}

export default ButtonOptions;
