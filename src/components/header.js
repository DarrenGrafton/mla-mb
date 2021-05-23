import React from "react"
import Navbar from "./nav/Navbar"

const Header = ({
  pageTitle,
  location,
  navbarOpen,
  setNavbarOpen,
  conNumber = { conNumber },
}) => (
  <header>
    <h1>{pageTitle}</h1>
    <Navbar
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
      conNumber={conNumber}
    />
  </header>
)

export default Header
