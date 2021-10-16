import React from "react"
import { Link } from "gatsby"
import * as styles from "./Navbar.module.css"

const links = [
  { name: "Home", link: "" },
  { name: "Map", link: "Map" },
  { name: "Constituencies", link: "Constituencies" },
  { name: "MLAs", link: "MLAs" },
  { name: "Bills", link: "Bills" },
  { name: "About", link: "About" },
]

const NavbarLinks = ({ onClick, conNumber }) => {
  //if a constituency Number was passed in
  // if (conNumber >= 101 && conNumber <= 157) {
  //   for (const link of links) {
  //     if (link.name === "Map") {
  //       link.link = `Map?Number=${conNumber}`
  //     }
  //   }
  // }
  return (
    <>
      {links.map(link => (
        <Link
          onClick={onClick}
          key={link.link}
          to={`/${link.link}`}
         // activeClassName={styles.activeLink}
          state={{ conNumber }}
          className="text-red-700 text-xl lg:text-2xl font-noral mr-5 last:mr-2 mt-2"
        >
          {link.name}
        </Link>
      ))}
    </>
  )
}

export default NavbarLinks
