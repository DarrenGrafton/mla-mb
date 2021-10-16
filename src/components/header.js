import React from "react"
import Navbar from "./nav/Navbar"
import NavbarLinks from "./nav/NavbarLinks"
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
    <h1 className="text-red-700 text-5xl font-medium font-serif flex-grow-0">
      {pageTitle}
    </h1>
    <nav  className="flex-grow">
      <div
        aria-label="Open Menu"
        role="button"
        className= "h-full cursor-pointer flex justify-end lg:hidden mr-5 z-10"
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
  
      {/* {navbarOpen ? (  */}
        <div 
        className={classNames(
          styles.navBox,
         !navbarOpen && styles.navBoxClosed
        )}
        //className={navbarOpen ? "fixed inset-0 h-full w-full flex justify-start flex-col bg-white pt-5 transition-all": "-fixed h-full w-full flex justify-start flex-col bg-white pt-5 transition-all left-full"}
        > 
          {links.map(link => (
              
              <Link
                onClick={() => setNavbarOpen(false)}
                key={link.link}
                to={`/${link.link}`}
                state={{ conNumber }}
                className="text-red-700 text-xl lg:text-2xl font-noral mr-5 last:mr-2 mt-2"
              >
                {link.name}
              </Link>
      
                ))}
        </div>
       
      {/*) : (
        <div   
        className={classNames(
          styles.navBox,
          !navbarOpen && styles.navBoxClosed
        )}
        //className={navbarOpen ? "fixed inset-0 h-full w-full flex justify-start flex-col bg-white pt-5 transition-all": "-fixed h-full w-full flex justify-start flex-col bg-white pt-5 transition-all left-full"}
        //className="w-full hidden lg:flex justify-end"
        //w-full
        //className={classNames(
            //styles.navBox,
           // !navbarOpen && styles.navBoxClosed
          //)}
        >
          {links.map(link => (
                  
            <Link
              onClick={() => setNavbarOpen(false)}
              key={link.link}
              to={`/${link.link}`}
            // activeClassName={styles.activeLink}
              state={{ conNumber }}
              className="text-red-700 text-xl lg:text-2xl font-noral mr-5 last:mr-2 mt-2"
            >
              {link.name}
            </Link> 

          ))}
        </div>
      )} */}
    </nav>
  </header>
)

export default Header
