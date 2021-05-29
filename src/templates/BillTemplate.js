import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"

export default function BillTemplate({ data }) {
  const {
    billsJson: bill,
    allHansardBillsJson: hansardBills,

    allSanityRepImage,
  } = data

  const lastName = bill.rep.split(" ").slice(-1).join(" ")
  const fullName = bill.rep.replace(" ", "")

  const repImage = allSanityRepImage.nodes.find(
    node =>
      fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
      lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  )
  //header with  con name, back link,menu items
  return (
    <Layout pageTitle={`Bill ${bill.number}  ${bill.session} Session`}>
      {/*Tell the helmet to tell body NO Overflow on the MAP SVGs*/}
      <Seo title={`Bill ${bill.number}  ${bill.session} Session`} />

      <h2>{bill.billName}</h2>
      <div>
        <h3>Sponsored by: {bill.rep}</h3>
        <GatsbyImage
          //  className={styles.repImage}
          image={repImage?.image.asset.gatsbyImageData}
          alt={bill.rep}
        />
      </div>
      {bill.billLink && <a href={`${bill.billLink}`}>Bill on Gov MB website</a>}

      {bill.lawLink && <a href={`${bill.lawLink}`}>Law on Gov MB website</a>}
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
      {/* {note && (
        <div dangerouslySetInnerHTML={{ __html: note?.explanatoryNote }} />
      )} */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query BillDetail($billKey: String!) {
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
    allHansardBillsJson {
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
    allSanityRepImage {
      nodes {
        title
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: NONE)
          }
        }
      }
    }
  }
`
