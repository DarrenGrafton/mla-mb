import React, { useState } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import Header from "./header"

const Layout = ({ children, hide, pageTitle, location, conNumber }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      {!hide && (
        <Header
          pageTitle={pageTitle || `Title`}
          location={location}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
          conNumber={conNumber}
        />
      )}
      <div className="layout">{children}</div>
      {!hide && (
        <footer className="relative top-80 bg-gray-800 h-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <ul className="flex justify-between px-4">
            <li className="text-white ">
              © {new Date().getFullYear()},{" "}
              <a
                href="mailto:mlambcontact@gmail.com"
                className="text-white border-b-2 border-primary"
              >
                Email
              </a>{" "}
              any questions
            </li>
            <li>
              <Link
                className="text-white border-b-2 border-primary"
                to="/PrivacyPolicy/"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                className="text-white border-b-2 border-primary"
                to="/TermsOfUse/"
              >
                Terms
              </Link>
            </li>
          </ul>
        </footer>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
