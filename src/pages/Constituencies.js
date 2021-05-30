import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugifyConName } from "../helpers/Utils"

const Constituencies = () => {
  const data = useStaticQuery(CONSTITUENCY_LIST)

  return (
    <Layout pageTitle="Constituency List">
      <Seo title="Manitoban Constituencies" />
      <ol
        style={{
          display: "flex",
          height: "80vh",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        {data.allConsJson.edges.map(edge => (
          <li key={edge.node.Name}>
            <Link to={`/${slugifyConName(edge.node.Name)}`}>
              {edge.node.Name}
            </Link>
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
