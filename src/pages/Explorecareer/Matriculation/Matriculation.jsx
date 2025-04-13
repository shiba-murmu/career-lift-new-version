import React from "react";

import BgFirstImage from "../../../components/BackgroundImage/BgFirstImage";
import ButtonOptions from "../ButtonOptions";

function UimatriculationModel() {
  return (
    <>
      {/* Button options imported here to implement the logic for 
        UI redering according to user's click on the buttons .. */}
      <ButtonOptions />
      {/* This component is very important here all the UI will render through
          this ButtonOptions component dynamically when user will click in it. */}
    </>
  );
}

function Matriculation() {
  /**
   * Main function of the file..
   */
  return (
    <>
      <BgFirstImage whichPage="matriculation" />
      <UimatriculationModel />
    </>
  );
}

export default Matriculation;
