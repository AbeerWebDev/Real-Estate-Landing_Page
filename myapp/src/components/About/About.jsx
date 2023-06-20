import React from 'react'
import './About.scss'
import { useEffect, useRef } from "react";
import { Controller, Scene } from "scrollmagic";
import { TweenMax } from "gsap/all";

const About = () => {

  const controller = useRef(new Controller());
  const leftScene = useRef(null);
  const rightScene = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.8; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const leftOffset = -(distanceFromThreshold * 0.5);
        const rightOffset = -(distanceFromThreshold * 0.3);

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


  return (
    <div className="about">
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
          <button>Learn More</button>
        </div>
        <div className="right" ref={rightRef}>
          <img
            src="https://uc7e1a62f2909403ac27038a08e9.previews.dropboxusercontent.com/p/thumb/AB-weNPZQr-LK5-lKKFnC_5cSaGMT9xFiDYcoD7b5aPAGBLdCnWGCFYyA582QFUqoDHxNRPb5i66Xruf6eVijk3jqjj7U7LLuh_W6tUS9XIQDgSYnxLqNbj40YRRmGeW4cD_Yi91GzARbj-Wxi1qoiSbIkv9EaW-vY6MNJ6AonJtE-xn02M7--4VaZG7tozdgxMXZs1DzTy-BPFbLvI2ckfElv9oue3STx1eROhpUw-1xQVjgT0ALomMxa_-No2UUGbySQVh93dIP3fHMBf-UfO3pRADVs--u2LJmtKdNJG5VK5GvYp4k5zTY_VvWjwmDbKpPNcNDocldAIN1WAijaTE9WaghANxSVujaYAzSx-Ou-8DeiQ7d-75q968JGLpWepJlOwX5fBQRZpTbrfDwv8eUqlalNPHxvYq4fPW07665wIXwRuDlAfml1YgT8PzksjUtDDZhe2LM0pYsGy5ClCQGnaxxIXRo14AAtcz6seeyFvO2MPHsnKKHB-IGYFU37A/p.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About