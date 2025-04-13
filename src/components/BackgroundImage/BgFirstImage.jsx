import React from "react";

function Background({ bgImage, stream }) {
  /**
   * This is used component....
   * Actual background model is here...
   */
  return (
    <>
      <div className="w-full relative">
        <img
          src={bgImage}
          alt="background"
          className="w-full h-30 md:h-36 object-center object-fit object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            className="text-3xl md:text-6xl text-white"
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontWeight: "bolder",
            }}
          >
            {stream}
          </span>
        </div>
      </div>
    </>
  );
}
function BgFirstImage({ whichPage }) {
  /**
   * Main function component here...
   */
  switch (whichPage) {
    case "matriculation":
      return (
        <>
          <Background
            stream={"Matriculation"}
            bgImage={
              "https://images.pexels.com/photos/29139964/pexels-photo-29139964/free-photo-of-vibrant-neon-abstract-light-streaks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </>
      );
    case "intermediate":
      return (
        <>
          <Background
            stream={"Intermediate"}
            bgImage={
              "https://images.pexels.com/photos/29586678/pexels-photo-29586678/free-photo-of-abstract-blue-digital-art-landscape-for-desktop.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </>
      );
    case "graduation":
      return (
        <>
          <Background
            stream={"Graduation"}
            bgImage={
              "https://images.pexels.com/photos/29764258/pexels-photo-29764258/free-photo-of-monochromatic-abstract-sphere-on-rippling-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
          />
        </>
      );
    default:
      return null;
  }
}

export default BgFirstImage;
