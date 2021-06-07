import React from "react"
import NavbarLinks from "./NavbarLinks"

import * as styles from "./Navbar.module.css"
import classNames from "classnames"

const Navbar = ({ navbarOpen, setNavbarOpen, conNumber }) => {
  return (
    <nav className={styles.navBar}>
      <div
        aria-label="Open Menu"
        role="button"
        className={styles.navToggle}
        onClick={() => setNavbarOpen(!navbarOpen)}
        onKeyDown={() => setNavbarOpen(!navbarOpen)}
        tabIndex={0}
      >
        <div
          className={classNames(
            styles.hamburger,
            !navbarOpen && styles.hamburgerClosed
          )} //
        />
      </div>

      {navbarOpen ? ( //navbarOpen && styles.navBoxClosed
        <div
          className={classNames(
            styles.navBox,
            !navbarOpen && styles.navBoxClosed
          )}
        >
          <NavbarLinks
            onClick={() => setNavbarOpen(false)}
            conNumber={conNumber}
          />
        </div>
      ) : (
        <div
          className={classNames(
            styles.navBox,
            !navbarOpen && styles.navBoxClosed
          )}
        >
          <NavbarLinks
            onClick={() => setNavbarOpen(false)}
            conNumber={conNumber}
          />
        </div>
      )}
    </nav>
  )
}

export default Navbar
