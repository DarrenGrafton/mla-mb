import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Accordian from "../components/constituency/Accordian"
import SEO from "../components/seo"
import * as styles from "../components/constituency/Constituency.module.css"
import { ConDemoData } from "../components/constituency/ConDemoData"
import { RepContactInfo } from "../components/constituency/RepContactInfo"

export default function ConTemplate({ data }) {
  const {
    consJson: cons,
    repsJson: rep,
    allBillsJson: bills,
    allHansardBillsJson: hansardBills,
    allSessionsJson: sessions,
    allSanityRepImage,
  } = data

  const lastName = cons.CurrentRep.split(" ").slice(-1).join(" ")
  const fullName = cons.CurrentRep.replace(" ", "")

  const repImage = allSanityRepImage.nodes.find(
    node =>
      fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
      lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  )

  //header with  con name, back link,menu items
  return (
    <Layout pageTitle={cons.Name} conNumber={cons.Number}>
      <SEO title={`${cons.Name} - ${cons.CurrentRep}`} />
      <div className={styles.mainGrid}>
        <div>
          <h2>
            {cons.CurrentRep}
            <br /> {cons.Party}
          </h2>
          <GatsbyImage
            image={repImage?.image.asset.gatsbyImageData}
            alt={cons.CurrentRep}
          />
          <RepContactInfo styles={styles} rep={rep} />
          <ConDemoData styles={styles} cons={cons} />
        </div>
        <div>
          <div className={styles.bills}>
            <h3>Bills</h3>
            <ul>
              {bills.edges.map(edge => (
                <li key={edge.node.billLink}>
                  {edge.node.session} Session - {edge.node.number} -{" "}
                  {edge.node.billName}
                  <a href={`/bills/${edge.node.billKey}`}>Link</a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.hansard}>
            <h3>Hansard</h3>

            <ul>
              {sessions.edges.map(edge => {
                const referencedBills = hansardBills.edges.reduce(function (
                  arr,
                  item
                ) {
                  if (
                    item.node.sessionKey === edge.node.key &&
                    !arr.includes(item.node.billNumber)
                  ) {
                    arr.push(item.node.billNumber)
                  }
                  return arr
                },
                [])

                return (
                  <li key={`session${edge.node.key}`}>
                    {edge.node.legislature} {edge.node.session} Session -{" "}
                    {edge.node.volume}- {edge.node.date} - {edge.node.committee}
                    <a href={`/session/${edge.node.key}`}>Link</a>
                    {referencedBills && (
                      <ul>
                        {referencedBills.map(billNumber => {
                          return (
                            <li key={`bill${billNumber}`}>Bill {billNumber}</li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ConDetail($slug: Int!, $rep: String!) {
    consJson(Number: { eq: $slug }) {
      Name
      Number
      AreaInSquareKm
      AvgFamilySize
      CorrectionalFacilities
      CurrentRep
      East
      Hospitals
      MLA
      MedianAge
      MultipleDwellings
      MedianHouseholdIncome
      NeighbouringElectoralDivisions
      North
      NorthEast
      NorthWest
      NumberOfvotingAreas
      Party
      PercentCanadianCitizens
      PersonalCareHomes
      Plurality
      PostSecondaryInstitutions
      RegisteredVoters
      Schools
      South
      SouthEast
      SouthWest
      TotalPopulation
      VoterTurnout2019
      West
    }
    repsJson(Name: { eq: $rep }) {
      Constituency
      ConstituencyOffice
      ConstituencyOfficeEmail
      ConstituencyOfficeFax
      ConstituencyOfficePhone
      Email
      Name
      Office
      OfficeFax
      OfficePhone
      Party
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
    allBillsJson(
      sort: { order: DESC, fields: session }
      filter: { rep: { eq: $rep } }
    ) {
      edges {
        node {
          number
          rep
          billLink
          billName
          billKey
          session
          sessionLink
        }
      }
    }
    allSessionsJson(
      filter: { speakers: { in: [$rep] } }
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          committee
          date(formatString: "MMM DD, yyyy")
          link
          legislature
          key
          session
          type
          volume
        }
      }
    }
    allHansardBillsJson(filter: { rep: { eq: $rep } }) {
      edges {
        node {
          billNumber
          paragraphIndex
          sessionKey
        }
      }
    }
  }
`
