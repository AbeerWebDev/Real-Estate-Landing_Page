import React from "react";
import "./Contact.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";

const Contact = () => {
  const contactRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.3; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const contactOffset = -(distanceFromThreshold * 0.9); // Adjust the parallax effect as desired
        const leftOffset = -(distanceFromThreshold * 0.4);
        const rightOffset = -(distanceFromThreshold * 0.2);

        TweenMax.set(contactRef.current, { y: contactOffset });
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
    <div className="contact" ref={contactRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <h1>CONSULTATION</h1>
          <p>Our top-rated professionals will contact you promptly.</p>
          <button>Learn More</button>
        </div>
        <div className="right" ref={rightRef}>
          <input placeholder="Name" />
          <input type="email" placeholder="Email" />
          <label for="desc">Whats on your mind?</label>

          <textarea id="desc" name="desc" placeholder="Text Here">
          </textarea>
          <button className="download">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
