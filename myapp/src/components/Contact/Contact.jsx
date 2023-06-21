import "./Contact.scss";
import { useEffect, useRef, useState } from "react";
import { TweenMax } from "gsap/all";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  const contactRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollThreshold = windowHeight * 0.2; // Adjust the threshold as desired

      if (scrollPosition > scrollThreshold) {
        const distanceFromThreshold = scrollPosition - scrollThreshold;
        const contactOffset = -(distanceFromThreshold * 0.9); // Adjust the parallax effect as desired
        const leftOffset = -(distanceFromThreshold * 0.12);
        const rightOffset = -(distanceFromThreshold * 0.02);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const description = e.target.elements.desc.value;
    // Perform your desired logic, such as sending a request to a server or performing client-side validation

    // Example of displaying the submitted data in the console
    console.log("Submitted Data:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Description:", description);

     setIsSubmitted(true);

    // Reset the form
    e.target.reset();
  
    }

  return (
    <div className="contact" id="contact" ref={contactRef}>
      <div className="wrapper">
        <div className="left" ref={leftRef}>
          <h1>CONSULTATION</h1>
          <p>Our top-rated professionals will contact you promptly.</p>
          <div className="icons">
            <LinkedInIcon className="icon" />
            <InstagramIcon className="icon" />
            <FacebookIcon className="icon" />
          </div>
        </div>
        <div className="right" ref={rightRef}>
          {isSubmitted ? (
            <div className="success-message">Form submitted successfully!</div>
          ) : (
            <form className="right" onSubmit={handleSubmit}>
              <input placeholder="Name" name="name" required />
              <input type="email" placeholder="Email" name="email" required />
              <label htmlFor="desc">What's on your mind?</label>
              <textarea
                id="desc"
                name="desc"
                placeholder="Text Here"
                required
              ></textarea>
              <button className="download" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
