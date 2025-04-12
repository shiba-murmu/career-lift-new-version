import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import ParticleConfigThree from "./particleConfig/ParticleConfigThree";
function BackgroundParticleThree() {
    /**
     * This function is used to render the particle background
     * it takes the js file from the particleConfigThree.js file..
     * @returns
     */
    return (
        <>
            <Particles id="tsparticles" options={ParticleConfigThree}>
            </Particles>
        </>
    );
}