/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

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
        <footer>
          <ul>
            <li>
              © {new Date().getFullYear()},{" "}
              <a href="mailto:mlambcontact@gmail.com">Email </a> any questions
            </li>
            <li>
              <Link className="smallText" to="/PrivacyPolicy/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="smallText" to="/TermsOfUse/">
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
