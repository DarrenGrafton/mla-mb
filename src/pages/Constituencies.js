import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugifyName } from "../helpers/Utils"

const Constituencies = () => {
  const data = useStaticQuery(CONSTITUENCY_LIST)

  return (
    <Layout pageTitle="Constituency List" hClass="bg-gray-100">
      <Seo title="Manitoban Constituencies" />
      <div className="bg-gray-100" style={{ minHeight: "85vh" }}>
        <ol className="flex flex-wrap flex-col h-850 lg:h-600">
          {data.allConsJson.edges.map(edge => (
            <li key={edge.node.Name}>
              <Link
                className="text-primary text-lg border-b-2 border-secondary"
                to={`/${slugifyName(edge.node.Name)}`}
              >
                {edge.node.Name}
              </Link>
            </li>
          ))}
        </ol>
      </div>
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
        }
      }
    }
  }
`
