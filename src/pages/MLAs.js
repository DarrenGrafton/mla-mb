import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugifyConName } from "../helpers/Utils"

const MLAs = () => {
  const data = useStaticQuery(CONSTITUENCY_LIST)

  return (
    <Layout pageTitle="MLA List">
      <SEO title="Manitoban MLAs" />
      <ol>
        {data.allConsJson.edges.map(edge => (
          <li>
            {edge.node.CurrentRep}
            <a href={`/${slugifyConName(edge.node.Name)}`}>
              {edge.node.Number}
            </a>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default MLAs

const CONSTITUENCY_LIST = graphql`
  query MLAsList {
    allConsJson(sort: { fields: CurrentRep }) {
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
