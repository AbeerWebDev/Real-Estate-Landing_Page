import { useEffect, useState } from 'react'
import './Navbar.scss'
const Navbar = () => {
  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener('scroll', isActive)
    }
  })
  return (
    <div className={active ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <span className="text">ALH PROPERTIES</span>
        </div>
        <div className="links">
          <button onClick={() => setOpen(!open)}>BROCHURE
          {open && (
            <div className="options">
              <h1>ELIE SAAB BROCHURE</h1>
              <div className="plans">
                <span>Masterplan</span>
                <span>Lifestyle</span>
                <span>Gallery</span>
                <span>Floor Plans</span>
              </div>
              <input placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button className="download">Download</button>
            </div>
          )}
          </button>
        </div>
      </div>
      {active && (
        <>
          <hr />
          <div className="menu">
            <span>About</span>
            <span>Developer</span>
            <span>Location</span>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar