import React, { useState, useEffect } from "react";

function ReadMoreText({ text, limit = 150 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check screen size on load and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768); // mobile <768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // On larger screens, always show full text
  if (!isSmallScreen) {
    return (
      <p className="text-gray-700 leading-relaxed text-justify">{text}</p>
    );
  }

  return (
    <>
      <p className="text-gray-700 leading-relaxed text-justify">
        {isExpanded ? text : `${text.slice(0, limit)}...`}
      </p>
      <button
        onClick={toggleReadMore}
        className="text-blue-600 underline text-sm font-medium mt-1"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </>
  );
}

export default ReadMoreText;
