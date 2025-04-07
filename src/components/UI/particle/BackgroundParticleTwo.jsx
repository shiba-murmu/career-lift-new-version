import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticleConfig from "./particleConfig/ParticleConfig";

function BackgroundParticleTwo() {
  return (
    <>
      <Particles id="tsparticles" options={ParticleConfig}>
      </Particles>
    </>
  );
}

export default BackgroundParticleTwo;
