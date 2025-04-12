import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticleConfigTwo from "./particleConfig/ParticleConfigTwo";
function BackgroundParticleThree() {
    /**
     * This function is used to render the particle background
     * it takes the js file from the particleConfigThree.js file..
     * @returns
     */
    return (
        <>
            <Particles id="tsparticles" options={ParticleConfigTwo}>
            </Particles>
        </>
    );
}

export default BackgroundParticleThree;