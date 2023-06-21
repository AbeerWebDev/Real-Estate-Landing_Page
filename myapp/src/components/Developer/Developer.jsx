import React from "react";
import "./Developer.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";

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

  return (
    <div className="developer" id="developer" ref={developerRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <img
            src="https://uc001c4d11e52d57de987dbe71d3.previews.dropboxusercontent.com/p/thumb/AB_mWm1A2psGV0rw3D7--fmQQU1lH45VmuL7121vy_hVsdrCcwWNIdQIvYIv1jX0ArOvQPXZ2jEM7491_nitwOZmKZPPA64VJ3rnBhbWIrVSDqyJ9J9JrVSWKueGU11ch0XqiAEHw2Fw6s3I_hqgnu38bYtywg1_l3ntBPhUrrlRz9_qAH3uZTAdTPUqf8Pxwqj64M2RP3V2Bqa4d36WMKrhltZSDDjVHrsqF6ofde9pqQg1UVGugLkGBD3LoBJccdSbSUnGaPg0pLTWK8Ia7OJhOKE0Nt2u_wN0beOmGCJ3B6cNJNUxrhPS1EuxsrYNwgZtGzF0KISSNXY31E66hYKdT6vhD9VAj7mSEDbsuXiNXHkOuV9c-4iIcNQSJOLKg7usqelkoJ0_1hNakPCY6ptgInpnWA_feYTNlC2bWqooG67wpenkeCx0sZoQFA7sPZ5MXINSEiglgi7rMLyyySZNp9YDDZFlLO_fj_EuVTeWU-9JV8_lVa_W3QzABuQkQus/p.jpeg"
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
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Developer;
