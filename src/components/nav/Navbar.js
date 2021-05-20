import React from "react"
import NavbarLinks from "./NavbarLinks"

import "./Navbar.css"

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
  return (
    <nav>
      <div className="nav-toggle" onClick={() => setNavbarOpen(!navbarOpen)}>
        <div
          className={navbarOpen ? "hamburger" : "hamburger hamburger-closed"}
        />
      </div>
      {navbarOpen ? (
        <div className={navbarOpen ? "nav-box" : "nav-box nav-box-closed"}>
          <NavbarLinks onClick={() => setNavbarOpen(false)} />
        </div>
      ) : (
        <div className={navbarOpen ? "nav-box" : "nav-box nav-box-closed"}>
          <NavbarLinks onClick={() => setNavbarOpen(false)} />
        </div>
      )}
    </nav>
  )
}

export default Navbar
