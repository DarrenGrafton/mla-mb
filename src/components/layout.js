/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../css/normalize.css"
import "../css/main.css"
import "../css/style.css"

const Layout = ({ children, hide, pageTitle, location }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <>
      {!hide && (
        <Header
          pageTitle={pageTitle || `Title`}
          location={location}
          navbarOpen={navbarOpen}
          setNavbarOpen={setNavbarOpen}
        />
      )}
      <div className="layout">
        {children}

        {!hide && (
          <footer>
            © {new Date().getFullYear()},{" "}
            <a href="mailto:myrepmb@gmail.com">Email </a> any questions
          </footer>
        )}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
