import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugifyName } from "../helpers/Utils"

export default function BillTemplate({ data }) {
  const {
    billsJson: bill,
    allHansardBillsJson: hansardBills,
    allConsJson: cons,
    allImageSharp,
  } = data

  const consLink = slugifyName(
    cons.nodes.find(con => con.CurrentRep === bill.rep)?.Name
  )

  return (
    <Layout
      pageTitle={`Bill ${bill.number}  ${bill.session} Session`}
      hClass="bg-gray-100"
    >
      <Seo title={`Bill ${bill.number}  ${bill.session} Session`} />
      <div
        className="grid lg:grid-cols-4 bg-gray-100"
        style={{ minHeight: "85vh" }}
      >
        <div className="lg:col-start-1 lg:col-end-4">
          <div className="m-2 p-2 border border-secondary rounded-2xl">
            <h2 className="text-primary text-xl font-medium">
              {bill.billName}
            </h2>
            <ul>
              {bill.billLink && (
                <li>
                  <a
                    className="text-primary border-b-2 border-secondary"
                    href={`${bill.billLink}#Explanatory%20Note`}
                  >
                    Explanatory Note and Bill Details on Gov MB website.
                  </a>
                </li>
              )}
              {bill.lawLink && (
                <li>
                  <a
                    className="text-primary border-b-2 border-secondary"
                    href={`${bill.lawLink}`}
                  >
                    Law on Gov MB website
                  </a>
                </li>
              )}
            </ul>
          </div>

          <div className="m-2 p-2 border border-secondary rounded-2xl">
            <h3 className="text-primary text-xl font-medium">Hansard</h3>
            <p className="text-primary">
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
                      <a
                        className="text-primary border-b-2 border-secondary"
                        href={url}
                      >
                        {text}
                      </a>
                    </li>
                  )
                }
              })}
            </ol>
          </div>
        </div>
        <div className="m-2 p-2 border border-secondary rounded-2xl">
          <div>
            <h3 className="text-primary text-xl font-medium">Sponsored by: </h3>
            <Link
              className="text-primary border-b-2 border-secondary mb-2"
              to={`/${consLink}`}
            >
              {bill.rep}
            </Link>
          </div>
          <GatsbyImage
            className="w-12 h-18 md:w-20 md:h-30 lg:w-36 lg:h-58 rounded-t-2xl"
            image={allImageSharp?.nodes[0]?.gatsbyImageData}
            alt={bill.rep}
          />
        </div>
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
    allHansardBillsJson(
      sort: { fields: sessionDate, order: ASC }
      filter: { billKey: { eq: $billKey } }
    ) {
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
