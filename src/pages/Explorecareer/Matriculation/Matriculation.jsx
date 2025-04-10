import React from "react";

import BgFirstImage from "../../../components/BackgroundImage/BgFirstImage";

function UimatriculationModel() {
  return (
    <>
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
      <BgFirstImage whichPage="matriculation"/>
      <UimatriculationModel />
    </>
  );
}

export default Matriculation;
