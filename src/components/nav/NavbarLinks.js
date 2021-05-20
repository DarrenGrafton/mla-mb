import React from "react"
import { Link } from "gatsby"

const links = [
  { name: "Home", link: "" },
  { name: "Map", link: "Map" },
  { name: "Constituencies", link: "Constituencies" },
  { name: "MLAs", link: "MLAs" },
  { name: "Bills", link: "Bills" },
  { name: "About", link: "About" },
]

const NavbarLinks = ({ onClick }) => {
  return (
    <>
      {links.map(link => (
        <Link onClick={onClick} key={link.link} to={`/${link.link}`}>
          {link.name}
        </Link>
      ))}
    </>
  )
}

export default NavbarLinks
