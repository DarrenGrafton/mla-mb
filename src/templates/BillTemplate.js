import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Accordian from "../components/constituency/Accordian"
import SEO from "../components/seo"

export default function BillTemplate({ data }) {
  const {
    billsJson: bill,
    billNotesJson: note,

    // allSanityRepImage,
  } = data

  // const lastName = cons.CurrentRep.split(" ").slice(-1).join(" ")
  // const fullName = cons.CurrentRep.replace(" ", "")

  // const repImage = allSanityRepImage.nodes.find(
  //   node =>
  //     fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
  //     lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  // )

  //header with  con name, back link,menu items
  return (
    <Layout pageTitle={`Bill ${bill.number}  ${bill.session} Session`}>
      {/*Tell the helmet to tell body NO Overflow on the MAP SVGs*/}
      <SEO title={`Bill ${bill.number}  ${bill.session} Session`} />

      <h2>{bill.billName}</h2>
      {note && (
        <div dangerouslySetInnerHTML={{ __html: note?.explanatoryNote }} />
      )}
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
    billNotesJson(billKey: { eq: $billKey }) {
      billKey
      explanatoryNote
      number
    }
  }
`
