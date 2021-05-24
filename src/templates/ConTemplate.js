import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/constituency/Constituency.module.css"
import { ConDemoData } from "../components/constituency/ConDemoData"
import { RepContactInfo } from "../components/constituency/RepContactInfo"
import { ConHansardLinks } from "../components/constituency/ConHansardLinks"
export default function ConTemplate({ data }) {
  const {
    consJson: cons,
    repsJson: rep,
    allBillsJson: bills,
    allHansardBillsJson: hansardBills,
    allSessionsJson: sessions,
    allIndexesJson: hansardIndexes,
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
      <Seo title={`${cons.Name} - ${cons.CurrentRep}`} />
      <div className={styles.mainGrid}>
        <div className={styles.rep}>
          <h2>{cons.CurrentRep}</h2>
          <GatsbyImage
            image={repImage?.image.asset.gatsbyImageData}
            alt={cons.CurrentRep}
          />
          <h3>{cons.Party}</h3>
          <RepContactInfo styles={styles} rep={rep} />
          <ConDemoData styles={styles} cons={cons} />
        </div>
        <div>
          <div className={styles.bills}>
            <h3>Bills</h3>
            <ul>
              {bills.edges.map(edge => (
                <li key={edge.node.billLink}>
                  <a href={`/bills/${edge.node.billKey}`}>
                    Bill {edge.node.number}
                  </a>{" "}
                  ({edge.node.session} Session) - {edge.node.billName}
                </li>
              ))}
            </ul>
          </div>
          <ConHansardLinks
            styles={styles}
            sessions={sessions}
            hansardIndexes={hansardIndexes}
            rep={rep}
          />
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
    allIndexesJson(
      filter: { indexes: { elemMatch: { speaker: { eq: $rep } } } }
    ) {
      nodes {
        sessionKey
        indexes {
          heading2
          heading3
          heading4
          heading5
          index
          text
          indexLink
          speaker
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
