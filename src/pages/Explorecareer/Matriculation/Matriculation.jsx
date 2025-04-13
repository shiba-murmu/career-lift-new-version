import React from "react";

import BgFirstImage from "../../../components/BackgroundImage/BgFirstImage";
import ButtonOptions from "../ButtonOptions";

function UimatriculationModel() {
  return (
    <>
      <ButtonOptions />
      <div>Matriculation models here.</div>
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
