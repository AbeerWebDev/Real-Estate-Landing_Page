import React from "react";
import "./Location.scss";
import { useEffect, useRef } from "react";
import { TweenMax } from "gsap/all";

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

  return (
    <div className="location" ref={locationRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <h1>WHERE TO FIND US</h1>
          <p>
            Jumeirah Golf Estates is a prestigious residential community located
            in Dubai, United Arab Emirates. Nestled amidst lush green landscapes
            and world-class golf courses, it offers a luxurious and serene
            lifestyle for residents.
          </p>
          <button>Learn More</button>
        </div>
        <div className="right" ref={rightRef}>
          <img
            src="https://uc5ff1667436b23fc6fde6bd283d.previews.dropboxusercontent.com/p/thumb/AB-EcjldGVWvvt0HhNWQPgMQEuTF5UJsjjIp8K_2_qlswG88uF1iMBryOa7Zywxeo3enk2hXHu6aeX1eKTI3yPCAeYK9s9cvvy5DFTSVHcTzulbfRwvxoSHkv6yhSanuFcdA15v0CgDS4ELJ96sJlNJkg96utK9ksFte1K32_GSOClp3aoCqNguWGDhc5BGZG4LDz9YKT-4XxzXUUq3U-XMGcODAMs4mQOVsVv1AhCksWULkY6ISBMNc62gStcBpGyhLYv5JFeF3JsiTdMXqDvtVCHPM0vi9ZSV7eugyotIgr14vFC38T2S8pP1W_B9M-l9DIJEWkKSCwEIzLb1wzIjBbfDL3lCmFjyn2f7x9aJlxhTO42RI5_T1-Y1U9gKfSwbsv25czVKxYCw_C52WKpk-XlrIuEEIVF-3cP24hhlGBLsJdw8PpI0zQ9HrTFr6y4NWosFlT0rwZ4C040ilbtXA0wKb4dlSRFPDhba_b2hP19aaITaRnYyfcu7n8LJybiQ/p.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
