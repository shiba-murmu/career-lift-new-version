import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
/**
 *
 * This is this animation that is used to animate the text.
 * In any part of the website..
 */
function TextShow({ children }) {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true,
        },
      }
    );
  }, []);

  return <div ref={textRef}>{children}</div>;
}

export default TextShow;

// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// function TextShow({ children }) {
//   const textRef = useRef(null);

//   useEffect(() => {
//     const element = textRef.current;

//     gsap.fromTo(
//       element,
//       { y: 50, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: element,
//           start: window.innerWidth < 768 ? 'top 95%' : 'top 80%', // more suitable for smaller screens
//           toggleActions: "play none none none",
//           once: true, // important for mobile
//           markers: true,
//         },
//       }
//     );

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return <div ref={textRef}>{children}</div>;
// }

// export default TextShow;
