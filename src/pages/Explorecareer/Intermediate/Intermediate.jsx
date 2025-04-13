import React from "react";

import BgFirstImage from "../../../components/BackgroundImage/BgFirstImage";
import ButtonOptions from "../ButtonOptions";
function UiModelBackground() {
  return (
    <>
      <ButtonOptions />
      <div>intermediate model here</div>
    </>
  );
}

function Intermediate() {
  /**
   * Main function of the file..
   */
  return (
    <>
      <BgFirstImage whichPage={"intermediate"} />
      <UiModelBackground />
    </>
  );
}

export default Intermediate;
