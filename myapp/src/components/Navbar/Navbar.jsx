import { useEffect, useState } from "react";
import "./Navbar.scss";
import { Link, animateScroll as scroll } from "react-scroll";


const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const isActive = () => {
    setActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    // Reset the form
    setName("");
    setEmail("");

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const scrollToAbout = () => {
    scroll.scrollTo("about", {
      smooth: true,
      duration: 500,
      offset: -50, // Adjust the offset as needed to position the section correctly
    });
  };

  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">ELIE SAAB</span>
        </div>
        <div className="links">
          <button onClick={() => setOpen(!open)}>BROCHURE</button>
          {open && (
            <div className="options">
              <h1>ELIE SAAB BROCHURE</h1>
              <div className="plans">
                <span>Masterplan</span>
                <span>Lifestyle</span>
                <span>Gallery</span>
                <span>Floor Plans</span>
              </div>
              {!showSuccess ? (
                <form onSubmit={handleDownload}>
                  <input
                    placeholder="Name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                  />
                  <button className="download" type="submit">
                    Download
                  </button>
                </form>
              ) : (
                <div className="success">Brochure downloaded successfully!</div>
              )}
            </div>
          )}
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={scrollToAbout}
            >
              <span>About</span>
            </Link>
            <Link
              to="developer"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={scrollToAbout}
            >
              <span>Developer</span>
            </Link>
            <Link
              to="location"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={scrollToAbout}
            >
              <span>Location</span>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
