import React from "react";
import Button from "@mui/material/Button";

function MainCard({ heading, description }) {
  return (
    <>
      <div className="sm:w-3xl  md:w-5xl bg-gray-600 shadow-xl p-3">
        <div className="card-content">
          <h2
            className="card-title text-xl p-5 pb-0 md:text-2xl text-center"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
          >
            {heading}
          </h2>
          <p
            className="card-description p-10 pt-5 text-sm md:text-lg"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            {description}
          </p>
          <div className="text-center">
            <Button
              variant="contained"
              size="large"
              color="secondary"
              className="w-40 md:w-50"
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: "bold",
                marginBottom: "2rem",
              }}
            >
              Explore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCard;
