import React from "react";
import "./Location.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";
import { scroller } from "react-scroll";

const Location = () => {
  const locationRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.3; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const locationOffset = -(distanceFromThreshold * 0.9); // Adjust the parallax effect as desired
        const leftOffset = -(distanceFromThreshold * 0.4);
        const rightOffset = -(distanceFromThreshold * 0.2);

        TweenMax.set(locationRef.current, { y: locationOffset });
        TweenMax.set(leftRef.current, { y: leftOffset });
        TweenMax.set(rightRef.current, { y: rightOffset });
      }
    };

    handleScroll(); // Initial setup

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId, offset) => {
    scroller.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
      offset: offset,
    });
  };


  return (
    <div className="location" id="location" ref={locationRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <h1>WHERE TO FIND US</h1>
          <p>
            Jumeirah Golf Estates is a prestigious residential community located
            in Dubai, United Arab Emirates. Nestled amidst lush green landscapes
            and world-class golf courses, it offers a luxurious and serene
            lifestyle for residents.
          </p>
          <button onClick={() => scrollToSection("contact", -400)}>
            Learn More
          </button>
        </div>
        <div className="right" ref={rightRef}>
          <img
            src="https://uc5ff1667436b23fc6fde6bd283d.previews.dropboxusercontent.com/p/thumb/AB_JAq7n7g0riad55O0O0TWoE-yujdZdpYTc_HTfMy3YDei5AuixXSEOP3jEgXzNATEmRHMwk1ibDITEv_v87-aWiSVyw8DPUSYqZbrSm6_Wrs_LTqD1Mc3Y4nutSa8xn7fCyvXCKcIFCd7-dMioyq64zPXbqVGplvxr0ovkR9JVy4gYVExhaKMkfOWFDeVrTcLSOAr4dcVQ1CNXzRT0QDsmbQi5O9rS5l4Yy77fActQNA2woLzqOtsali7Z-RTgFnJitO2YbM-F_IoxtkAt3pFcj1qtnlK08S2JGtphDA70JfQWqNfjVeG2WnQOctIbJRf1Q5NDJZDtvrLtAXml6fGhs8xlHLPmyhBMsX5kN-c8KcKxIQkoJ_R1b3Dlv-e7tMptaDE1E15FyuX_FZ9GsGQifI0VVxPmE4XWDxCnP-O6E6O_In6TyNdLUkGUhRYHLtn9zZMCNTK7nAwJ-OD2WFQkddbka_T3pYDs4R1yMhMLpVln1mmh-LvHWSTOeE4rOuI/p.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
