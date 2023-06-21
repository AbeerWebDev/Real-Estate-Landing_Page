import React from "react";
import "./Developer.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";
import { scroller } from "react-scroll";

const Developer = () => {
  const developerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.45; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const developerOffset = -(distanceFromThreshold * 0.9); // Adjust the parallax effect as desired
        const leftOffset = -(distanceFromThreshold * 0.4);
        const rightOffset = -(distanceFromThreshold * 0.2);

        TweenMax.set(developerRef.current, {
          y: developerOffset,
        });

        TweenMax.set(leftRef.current, {
          y: leftOffset,
        });

        TweenMax.set(rightRef.current, {
          y: rightOffset,
        });
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
    <div className="developer" id="developer" ref={developerRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <img
            src="https://uc001c4d11e52d57de987dbe71d3.previews.dropboxusercontent.com/p/thumb/AB9jT7n4_Q4SFVaQ8vPpjnhpxpY4373ctfNogfALOCvHtARUA-OuMJrdlSdiEw7mNSWgUiSkWHcSkUK-livjERMkxfemk_U4whCCr8uxAioOVYu_ruLxiPoKTk8H6AfRihQuWWfYd204yEU6HnvglDKCTkudh6RFVLUKbClyrrgNKv3BImrDdNXoGeCKW0NTv6eHRh3kODxQRsDbeqlRl-0YU-RerXzuL1QpYI_2konnMTSMbkbmr5PF9KlHnpqOfIUgPANwXm4YtPLSy-Z_MavwJ4rKF1RZKTTXso7oPqT3xubm9NGjz34rz9s5nVs-Tf0UDNluon7M6hFUfGvbFZBE1-f_bHDqdGPyGloVVMkjT-SZq5491p0Tc7MN-POuwQVur-_Nmfl2vhSayCRiF6KNB6fizgZtkgXYCyh-bkW0SmyeDuoGF9w-4PAEmy-PSHQ2K_tts8tDGUWJw51JCjNYwoALh_GvDnFn01DoPiNNwKQKPrDHWBgMvlEJDil6jiU/p.jpeg"
            alt=""
          />
        </div>
        <div className="right" ref={rightRef}>
          <h1>RELIABLE DEVELOPER</h1>
          <p>
            ELIE SAAB properties is a distinguished real estate developer
            renowned for its exceptional residential and commercial projects in
            the UAE. With a strong focus on innovation and quality, ELIE SAAB
            has established itself as a trusted name in the industry.
          </p>
          <button onClick={() => scrollToSection("contact", -300)}>
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
