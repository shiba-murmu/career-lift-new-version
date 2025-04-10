import React from "react";
import Button from "@mui/material/Button";

const MainCard = () => {
  return (
    <>
      <div className="w-md md:w-5xl shadow-xl p-3">
        <div className="card-content">
          <h2
            className="card-title text-xl p-5 pb-0 md:text-2xl text-center"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
          >
            CAREER AFTER GRADUATION
          </h2>
          <p
            className="card-description p-10 pt-5 text-sm md:text-lg"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Career lift is designed to help graduates make informed decisions
            about their future. With an array of career paths and resources,
            this platform empowers individuals to choose a path that aligns with
            their skills and aspirations, ensuring a fulfilling and successful
            career after graduation. Whether you are looking to pursue a career
            in a traditional industry or explore emerging fields, Career lift
            provides access to valuable insights and tools to help you navigate
            the ever-changing job market. By leveraging our expertise and
            guidance, you can confidently embark on a career path that aligns
            with your goals and values.
          </p>
          <div className="text-center">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className="w-40 md:w-50"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: "bold", marginBottom : "2rem" }}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
