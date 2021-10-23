import React from "react"
import classNames from "classnames"
import { Link } from "gatsby"

import * as styles from "./header.module.css"

const links = [
  { name: "Home", link: "" },
  { name: "Map", link: "Map" },
  { name: "Constituencies", link: "Constituencies" },
  { name: "MLAs", link: "MLAs" },
  { name: "Bills", link: "Bills" },
  { name: "About", link: "About" },
]

const Header = ({
  pageTitle,
  location,
  navbarOpen,
  setNavbarOpen,
  conNumber,
}) => (
  <header className="flex w-full pt-4 pb-2 pl-2 border-yellow-700 border-b-2">
    <h1 className="text-red-700 text-3xl sm:text-5xl font-medium font-serif flex-grow-0">
      {pageTitle}
    </h1>
    <nav className="flex-grow">
      <div
        aria-label="Open Menu"
        role="button"
        className="h-full cursor-pointer flex justify-end lg:hidden mr-5 z-10"
        onClick={() => setNavbarOpen(!navbarOpen)}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
        tabIndex={0}
      >
        <div
          className={classNames(
            styles.hamburger,
            !navbarOpen && styles.hamburgerClosed
          )}
        />
      </div>

      {navbarOpen ? (
        <div
          className={classNames(
            styles.navBox,
            !navbarOpen && styles.navBoxClosed
          )}
        >
          {links.map(link => (
            <Link
              onClick={() => setNavbarOpen(false)}
              key={link.link}
              to={`/${link.link}`}
              // activeClassName={styles.activeLink}
              state={{ conNumber }}
              className="text-red-700 text-3xl font-normal mt-8"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ) : (
        <div
          className={classNames(
            styles.navBox,
            !navbarOpen && styles.navBoxClosed
          )}
        >
          {links.map(link => (
            <Link
              onClick={() => setNavbarOpen(false)}
              key={link.link}
              to={`/${link.link}`}
              // activeClassName={styles.activeLink}
              state={{ conNumber }}
              className="text-red-700 text-xl xl:text-2xl font-normal mr-7 last:mr-2 mt-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  </header>
)

export default Header
