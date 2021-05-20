import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { slugifyConName } from "../helpers/Utils"

const Constituencies = () => {
  const data = useStaticQuery(CONSTITUENCY_LIST)

  return (
    <Layout pageTitle="Constituency List">
      <SEO title="Manitoban Constituencies" />
      <ol>
        {data.allConsJson.edges.map(edge => (
          <li>
            {edge.node.Name}
            <a href={`/${slugifyConName(edge.node.Name)}`}>
              {edge.node.Number}
            </a>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Constituencies

const CONSTITUENCY_LIST = graphql`
  query ConstituencyList {
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
