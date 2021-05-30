import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "../components/bill/Bill.module.css"
import { slugifyConName } from "../helpers/Utils"

export default function BillTemplate({ data }) {
  const {
    billsJson: bill,
    allHansardBillsJson: hansardBills,
    allConsJson: cons,
    allImageSharp,
  } = data

  const consLink = slugifyConName(
    cons.nodes.find(con => con.CurrentRep === bill.rep)?.Name
  )

  return (
    <Layout pageTitle={`Bill ${bill.number}  ${bill.session} Session`}>
      <Seo title={`Bill ${bill.number}  ${bill.session} Session`} />
      <div className={styles.mainGrid}>
        <div>
          <div className={styles.billsTemplateName}>
            <h2>{bill.billName}</h2>
            <ul>
              {bill.billLink && (
                <li>
                  <a href={`${bill.billLink}#Explanatory%20Note`}>
                    Explanatory Note and Bill Details on Gov MB website.
                  </a>
                </li>
              )}
              {bill.lawLink && (
                <li>
                  <a href={`${bill.lawLink}`}>Law on Gov MB website</a>
                </li>
              )}
            </ul>
          </div>

          <div className={styles.billsTemplateHansard}>
            <h3>Hansard</h3>
            <p>
              Links to transcripts of the debates of the Legislative Assembly of
              Manitoba and its committees.
            </p>

            <ol>
              {hansardBills.nodes.map(node => {
                const url = node.indexLink
                  ? `https://www.gov.mb.ca/legislature/hansard/${node.legislature}_${node.session}/${node.sessionLink}${node.indexLink}`
                  : `https://www.gov.mb.ca/legislature/hansard/${node.legislature}_${node.session}/${node.sessionLink}`

                const text = node.committee
                  ? `${node.sessionDate} - ${node.committee}`
                  : `${node.sessionDate} - ${node.heading2} - ${node.heading3}`

                if (
                  node.number === bill.number &&
                  node.legislature === bill.legislature &&
                  node.session === bill.session
                ) {
                  return (
                    <li key={text}>
                      <a href={url}>{text}</a>
                    </li>
                  )
                }
              })}
            </ol>
          </div>
        </div>
        <div className={styles.billSponsor}>
          <div>
            <h3>Sponsored by: </h3>
            <Link to={`/${consLink}`}>{bill.rep}</Link>
          </div>
          <GatsbyImage
            className={styles.billRepImage}
            image={allImageSharp?.nodes[0]?.gatsbyImageData}
            alt={bill.rep}
          />
        </div>
        {/* {note && (
        <div dangerousl
        ySetInnerHTML={{ __html: note?.explanatoryNote }} />
      )} */}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BillDetail($billKey: String!, $rep: String!, $repRegex: String!) {
    billsJson(billKey: { eq: $billKey }) {
      billKey
      billLink
      billName
      lawLink
      legislature
      number
      rep
      session
      sessionLink
    }
    allHansardBillsJson(sort: { fields: sessionDate, order: ASC }) {
      nodes {
        number
        sessionDate(formatString: "DD MMM, yyyy")
        legislature
        session
        billKey
        committee
        heading2
        heading3
        heading4
        sessionKey
        sessionLink
        indexLink
      }
    }
    allConsJson(filter: { CurrentRep: { eq: $rep } }) {
      nodes {
        Name
        Number
        CurrentRep
      }
    }
    allImageSharp(filter: { original: { src: { regex: $repRegex } } }) {
      nodes {
        gatsbyImageData(
          placeholder: NONE
          width: 500
          formats: [AUTO, WEBP, AVIF]
        )
        original {
          src
        }
      }
    }
  }
`
