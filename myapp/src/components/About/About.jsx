import React from 'react'
import './About.scss'
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";
import { scroller } from "react-scroll";


const About = () => {
  const aboutRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.6; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const aboutOffset = -(distanceFromThreshold * 0.9); // Adjust the parallax effect as desired
        const leftOffset = -(distanceFromThreshold * 0.5);
        const rightOffset = -(distanceFromThreshold * 0.3);

        TweenMax.set(aboutRef.current, { y: aboutOffset });
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
    <div className="about" id="about" ref={aboutRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <h1>ABOUT THE PROJECT</h1>
          <p>
            Experience the epitome of luxury at ELIE SAAB, located in the heart
            of Jumeirah Golf Estates.
          </p>
          <div className="icons">
            <img
              src="https://d35bjgc7jbzjxh.cloudfront.net/jasmine-lane/s3fs-public/2023-05/landscaped%20areas.svg"
              alt=""
            />
            <img
              src="https://d35bjgc7jbzjxh.cloudfront.net/jasmine-lane/s3fs-public/2023-05/restaurants%20and%20cafes.svg"
              alt=""
            />
            <img
              src="	https://d35bjgc7jbzjxh.cloudfront.net/jasmine-lane/s3fs-public/2023-05/stores.svg"
              alt=""
            />
            <img
              src="https://d35bjgc7jbzjxh.cloudfront.net/jasmine-lane/s3fs-public/2023-05/parking.svg"
              alt=""
            />
          </div>
          <button onClick={() => scrollToSection("contact", -300)}>
            Learn More
          </button>
        </div>
        <div className="right" ref={rightRef}>
          <img
            src="https://uc7e1a62f2909403ac27038a08e9.previews.dropboxusercontent.com/p/thumb/AB-3pNiMtQ9tjT64PFr731wH1PbmbSayIYlfLrYmI9ds3BxvMHqUIQ3Okz09PwQqRyfBC7pvR1WLr5j5DGIR-qjhkZlAyTaiV2cEiN5kX1wjsaq7W-GIHoeAb_nkzzIPg6VYxYabd_Lm48E7BUYJb9eGXWUafrueuX7ie5eqrAcMGOcykDJ9LvtfGpN9kOBywptXYZmVZ7FbKYnOILfNfMQiRsVv6CGKQsy4madY2YR5QGZ7PL7jefTG-MSDJ1GrStCdKRkgdrBBzKnLEU4u-BNaOHdfKsDPcqoF_9Kr1zNqPT1g1WuLjDDVpjPKTqlkVB40hVZz-nmzgMjwPlGTwQv4t0dB-JO5MIrwb032gwHSPjW9h_3cwpNpoVf15tCicoOQsnetjm178oInRiuXGOH7esyRHDDPA-nZ7KF56Z6w86LpqTRPghwcq7tR3HyNshBG1R_atIU-3mCPdfmq-8UNGn6l2bg7lNufO6Wb4JKDL_Czhn5W-fuZgIyH5koxOtw/p.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About