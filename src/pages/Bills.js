import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Bills = () => {
  const data = useStaticQuery(BILLS_LIST)

  const session3Url = "https://web2.gov.mb.ca/bills/42-3/index.php"
  const session2Url = "https://web2.gov.mb.ca/bills/42-2/index.php"
  const session1Url = "https://web2.gov.mb.ca/bills/42-1/index.php"

  const fourthSessionBills = data.allBillsJson.edges.filter(
    edge => edge.node.session === "4th"
  )
  const thirdSessionBills = data.allBillsJson.edges.filter(
    edge => edge.node.session === "3rd"
  )

  const secondSessionBills = data.allBillsJson.edges.filter(
    edge => edge.node.session === "2nd"
  )

  const firstSessionBills = data.allBillsJson.edges.filter(
    edge => edge.node.session === "1st"
  )

  return (
    <Layout pageTitle="Bills by Session">
      <Seo title="Bills by Legislative Session" />

      <div>
        <h2>3rd Session</h2>
        <a href={session3Url}>Gov Mb Listing</a>
        <ol>
          {thirdSessionBills.map(edge => (
            <li key={edge.node.billKey}>
              <a href={`/bills/${edge.node.billKey}`}>
                <span>Bill {edge.node.number} - </span>
                {edge.node.billName}
              </a>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2>2nd Session</h2>
        <a href={session2Url}>Gov Mb Listing</a>
        <ol>
          {secondSessionBills.map(edge => (
            <li key={edge.node.billKey}>
              {edge.node.billName}
              <a href={`/bills/${edge.node.billKey}`}>{edge.node.number}</a>
            </li>
          ))}
        </ol>
      </div>

      <div>
        <h2>1st Session</h2>
        <a href={session1Url}>Gov Mb Listing</a>
        <ol>
          {firstSessionBills.map(edge => (
            <li key={edge.node.billKey}>
              {edge.node.billName}
              <a href={`/bills/${edge.node.billKey}`}>{edge.node.number}</a>
            </li>
          ))}
        </ol>
      </div>
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
