// import React from "react";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";

// function MainCard({ heading, description, redirectPath }) {
//   return (
//     <>
//       <div className="sm:w-11/12 md:w-4/5 lg:w-3/4 bg-gray-200 shadow-lg p-4 mx-auto rounded-lg">
//         <div className="card-content">
//           {/* Heading */}
//           <h2
//             className="text-blue-600 text-lg sm:text-xl md:text-2xl lg:text-3xl text-center px-2 pt-4 pb-2"
//             style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
//           >
//             {heading}
//           </h2>

//           {/* Description */}
//           <p
//             className="text-gray-700 text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-10 pt-2 pb-6 leading-relaxed text-justify"
//             style={{ fontFamily: "Raleway, sans-serif" }}
//           >
//             {description}
//           </p>

//           {/* Button */}
//           <div className="text-center">
//             <Link to={redirectPath}>
//               <Button
//                 variant="contained"
//                 size="medium"
//                 color="secondary"
//                 className="w-32 md:w-40"
//                 style={{
//                   fontFamily: "Raleway, sans-serif",
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 Explore
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainCard;

// import React from "react";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// function MainCard({ heading, description, redirectPath }) {
//   return (
//     <>
//       <div className="sm:w-3xl  md:w-5xl bg-gray-200 shadow-lg p-3">
//         <div className="card-content">
//           <h2
//             className="card-title text-blue-600 text-xl p-5 pb-0 md:text-3xl text-center"
//             style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
//           >
//             {heading}
//           </h2>
//           <p
//             className="card-description p-10 pt-5 text-sm md:text-lg"
//             style={{ fontFamily: "Raleway, sans-serif" }}
//           >
//             {description}
//           </p>
//           <div className="text-center">
//             <Link to={redirectPath}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 color="secondary"
//                 className="w-40 md:w-50"
//                 style={{
//                   fontFamily: "Raleway, sans-serif",
//                   fontWeight: "bold",
//                   marginBottom: "2rem",
//                 }}
//               >
//                 Explore
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainCard;


import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function MainCard({ heading, description, redirectPath }) {
  /**
   * This component is in used...
   */



  // State to manage expand/collapse
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Limit characters (for preview text)
  const previewText = description.slice(0, 150); // first 150 characters

  return (
    <>
      <div className="sm:w-11/12 md:w-4/5 lg:w-3/4 bg-amber-200 dark:bg-gray-200 shadow-lg p-4 mx-auto rounded-sm">
        <div className="card-content">
          {/* Heading */}
          <h2
            className="text-blue-600 text-lg sm:text-xl md:text-3xl text-center px-2 pt-4 pb-2"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
          >
            {heading}
          </h2>
          {/* Description */}
          {/* This description is use when the screen is in mobile */}
          <p
            className="card-description p-5 pt-3 text-sm  md:hidden"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {isExpanded ? description : `${previewText}...`}
          </p>
          {/* ******************************************* */}
          {/* This description is use when the screen is in desktop */}
          <p
            className="card-description p-10 pt-5 md:text-lg hidden md:block"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {description}
          </p>

          {/* Read More / Less Toggle Button */}
          {/* This button is use when the screen is in mobile */}
          <div className="text-center mb-2 md:hidden">
            <button
              onClick={toggleReadMore}
              className="text-green-600 underline text-sm font-bold"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </div>
          {/* Explore Button */}
          {/* ********************************************** */}
          {/* For small screen */}
          <div className="text-center md:hidden">
            <Link to={redirectPath}>
              <Button
                variant="contained"
                size="small"
                color="info"
                className="w-70 md:w-90"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "thin",
                  marginBottom: "1rem",
                }}
              >
                Explore
              </Button>
            </Link>
          </div>
          {/* ************************************************** */}
          {/* For bigger screen */}
          <div className="text-center hidden md:block">
            <Link to={redirectPath}>
              <Button
                variant="contained"
                size="large"
                color="info"
                className="w-70 md:w-90"
                style={{
                  fontFamily: "Raleway, sans-serif",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Explore
              </Button>
            </Link>
          </div>
          {/* **************************************************** */}
        </div>
      </div>
    </>
  );
}

export default MainCard;




// import React from "react";
// import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
// // import ReadMoreText from "./ReadMoreText"; // <-- import it
// import ReadMoreText from "../ReadMoreText/ReadMoreText";

// function MainCard({ heading, description, redirectPath }) {
//   return (
//     <>
//       <div className="sm:w-3xl  md:w-5xl bg-gray-200 shadow-lg p-3">
//         <div className="card-content">
//           {/* Heading */}
//           <h2
//             className="card-title text-blue-600 text-lg p-5 pb-0 md:text-3xl text-center"
//             style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
//           >
//             {heading}
//           </h2>

//           {/* Description with ReadMoreText component */}
//           <div className="px-4 sm:px-6 md:px-10 pt-2 pb-6 text-xs sm:text-sm md:text-base">
//             {/* <ReadMoreText text={description} limit={150} /> */}
//             {description}
//           </div>

//           {/* Explore Button */}
//           <div className="text-center">
//             <Link to={redirectPath}>
//               <Button
//                 variant="contained"
//                 size="medium"
//                 color="secondary"
//                 className="w-32 md:w-40"
//                 style={{
//                   fontFamily: "Raleway, sans-serif",
//                   fontWeight: "bold",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 Explore
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default MainCard;
