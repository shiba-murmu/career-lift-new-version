
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
      <div className="sm:w-11/12 md:w-4/5 lg:w-3/4 bg-gray-200 dark:bg-gray-800 shadow-xl md:shadow p-4 mx-auto rounded-0">
        <div className="card-content">
          {/* Heading */}
          <h2
            className="text-blue-600 dark:text-yellow-400 text-lg sm:text-xl md:text-3xl text-center px-2 pt-4 pb-2"
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
            style={{ fontFamily: "Raleway, sans-serif" , fontWeight : "normal" }}
          >
            {description}
          </p>

          {/* Read More / Less Toggle Button */}
          {/* This button is use when the screen is in mobile */}
          <div className="text-center mb-2 md:hidden">
            <button
              onClick={toggleReadMore}
              className="text-green-600 underline text-sm font-bold rounded-0"
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
                className="w-70  md:w-90 rounded-0"
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
                fontSize="large"
                className="w-70 md:w-90 rounded-0"
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

