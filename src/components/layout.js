/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../css/normalize.css"
import "../css/main.css"
import "../css/style.css"

const Layout = ({ children, hide, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {!hide && <Header pageTitle={pageTitle || `Title`} />}
      <div>
        <main>{children}</main>

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
