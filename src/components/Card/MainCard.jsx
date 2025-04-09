import React from "react";
import Button from "@mui/material/Button";

const MainCard = () => {
  return (
    <>
      <div className="md:w-[50%] md:h-[50%] bg-amber-400 rounded-xl p-3">
        {/* <div className="card-image">
          <img src="https://picsum.photos/200/300" alt="card image" />
        </div> */}
        <div className="card-content">
          <h2
            className="card-title text-3xl text-center"
            style={{ fontFamily: "Open Sans, sans-serif", fontWeight: "bold" }}
          >
            Career After 10th
          </h2>
          <p
            className="card-description text-lg"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            Explore careers is a platform where you can explore different
            careers and find the one that best suits you.
          </p>
          <div className="text-center">
            <Button
              variant="contained"
              style={{ fontFamily: "Raleway, sans-serif", fontWeight: "bold" }}
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
