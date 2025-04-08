// components/RotatingLettersWithGSAP.jsx

import { useEffect, useRef, useState, React } from "react";
import { gsap } from "gsap";

const RotatingLettersWithGSAP = ({ word = "STUDENT", interval = 0.5 }) => {
  const lettersRef = useRef([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    word.split("").forEach((_, i) => {
      timeline.to(lettersRef.current[i], {
        opacity: 1,
        scale: 1.5,
        duration: 0.3,
        ease: "power2.inOut",
      });
      timeline.to(
        lettersRef.current[i],
        {
          opacity: 0.3,
          scale: 1,
          duration: 0.3,
          ease: "power2.inOut",
        },
        `+=${interval}`
      );
    });
  }, [word, interval]);

  return (
      <div className="flex justify-center items-center space-x-3 text-4xl md:text-9xl font-bold text-white">
        {word.split("").map((char, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="opacity-30 transform transition-transform duration-500"
          >
            {char}
          </span>
        ))}
      </div>
  );
};

export default RotatingLettersWithGSAP;
