import React from "react"
import Navbar from "./nav/Navbar"

const Header = ({ pageTitle, location, navbarOpen, setNavbarOpen }) => (
  <header>
    <h1>{pageTitle}</h1>
    <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
  </header>
)

export default Header
