import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/bill/Bill.module.css"
import { BillSession } from "../components/bill/BillSession"

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

      <div className={styles.bills}>
        <BillSession
          sessionName="42nd Legislature, 3rd Session"
          sessionUrl={session3Url}
          sessionBills={thirdSessionBills}
        />
        <BillSession
          sessionName="42nd Legislature, 2nd Session"
          sessionUrl={session2Url}
          sessionBills={secondSessionBills}
        />

        <BillSession
          sessionName="42nd Legislature, 1st Session"
          sessionUrl={session1Url}
          sessionBills={firstSessionBills}
        />
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
