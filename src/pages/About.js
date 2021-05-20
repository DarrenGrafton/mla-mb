import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugifyConName } from "../helpers/Utils"

const About = () => {
  //const data = useStaticQuery(ABOUT_INFO)

  return (
    <Layout pageTitle="Thanks and Attributions">
      <SEO title="About My Rep MB" />
      <p>
        Thanks for checking out this site! It's under construction, but Watch
        this space
      </p>

      <a href="https://github.com/DarrenGrafton/my-rep-mb">Link to Github</a>
    </Layout>
  )
}

export default About

const ABOUT_INFO = graphql`
  query AboutInfo {
    allConsJson(sort: { fields: Name }) {
      edges {
        node {
          Number
          Name
          CurrentRep
          Party
          NeighbouringElectoralDivisions
        }
      }
    }
  }
`
