import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Bills = () => {
  const data = useStaticQuery(BILLS_LIST)

  return (
    <Layout pageTitle="Bills by Session">
      <Seo title="Bills by Legislative Session" />
      <ol>
        {data.allBillsJson.edges.map(edge => (
          <li key={edge.node.billKey}>
            {edge.node.billName}
            <a href={`/bills/${edge.node.billKey}`}>{edge.node.number}</a>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default Bills

const BILLS_LIST = graphql`
  query BillsPage {
    allBillsJson(sort: { fields: session, order: DESC }) {
      edges {
        node {
          number
          rep
          billKey
          billLink
          billName
          session
          sessionLink
        }
      }
    }
  }
`
