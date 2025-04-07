import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticleConfig from "./particleConfig/ParticleConfig";

function BackgroundParticleTwo() {
    /**
     * This function is used to render the particle background
     * it takes the js file from the particleConfig.js file..
     * @returns
     */
  return (
    <>
      <Particles id="tsparticles" options={ParticleConfig}>
      </Particles>
    </>
  );
}

export default BackgroundParticleTwo;
