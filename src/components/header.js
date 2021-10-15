import React from "react"
import Navbar from "./nav/Navbar"

const Header = ({
  pageTitle,
  location,
  navbarOpen,
  setNavbarOpen,
  conNumber,
}) => (
  <header className="flex w-full pt-4 pb-2 pl-2 border-yellow-700 border-b-2">
    <h1 className="text-red-700 text-5xl font-medium font-serif">
      {pageTitle}
    </h1>
    <Navbar
      navbarOpen={navbarOpen}
      setNavbarOpen={setNavbarOpen}
      conNumber={conNumber}
    />
  </header>
)

export default Header
