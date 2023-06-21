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
            src="https://uc7e1a62f2909403ac27038a08e9.previews.dropboxusercontent.com/p/thumb/AB91BydsYvzceuqDQFLII2Cl6kHH7iBkrIWHPBPWsF0hMQrTrhiat7IU38I3oTl3fAFdG2Z1BfXPOCDz9LmMuaZrH5uqg25iMYjrRKU3GNemfsftkW8aWdrfol9tqjhMIWloSon374efBictGJzZrXhPmlw1DpPJFG2Hskv4COJmF17w5eZK6KHFDF-FLhkzVE56jrezU9DzGNC_VdoZMyIONtg-JEoXaeCjESZJw6fJS1y6BtVmR652qBiv5g8lQXooaGN-3du3dL7Ykw2uu7E_uXd2xxJbsuZTZeoOOa_JsZkAd9HMROa_n4CQRuNwdha3SvPONPysG1gsMQlWWRszC449c0TYvG3xgXmaUbgQcQk116RM4XE0TUn83LvGajemzsRrNwQerogg152rKq-tLpEg4M2X4vt8LWVcxqbF_aE75WJkIXeeyy0NcABBz80qM9N6jPL_8_6fVy7bNfohJln3zs_UiDsj_1eRRSFt-74nGWr5iSpyrc8W9PG9PnM/p.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About