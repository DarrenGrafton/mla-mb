import * as React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { slugifyName } from "../helpers/Utils"

const MLAs = () => {
  const data = useStaticQuery(CONSTITUENCY_LIST)

  return (
    <Layout pageTitle="MLA List" hClass="bg-background">
      <Seo title="Manitoban MLAs" />
      <div className="p-4 lg:p-10" style={{ minHeight: "85vh" }}>
        <ol className="flex flex-wrap flex-col h-850 lg:h-600">
          {data.allConsJson.edges.map(edge => (
            <li key={edge.node.Name}>
              <Link
                className="text-primary text-lg border-b-2 border-secondary"
                to={`/${slugifyName(edge.node.Name)}`}
              >
                {edge.node.CurrentRep}
              </Link>
            </li>
          ))}
        </ol>
      </div>
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
