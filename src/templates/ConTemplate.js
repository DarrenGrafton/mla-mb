import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/constituency/Constituency.module.css"
import { ConDemoData } from "../components/constituency/ConDemoData"
import { RepContactInfo } from "../components/constituency/RepContactInfo"
import { ConHansardLinks } from "../components/constituency/ConHansardLinks"
import { ConBills } from "../components/constituency/ConBills"
export default function ConTemplate({ data }) {
  const {
    consJson: cons,
    repsJson: rep,
    allBillsJson: bills,
    //allHansardBillsJson: hansardBills,
    allSessionsJson: sessions,
    allIndexesJson: hansardIndexes,
    allImageSharp,
  } = data

  // console.log(allImageSharp)

  //header with  con name, back link,menu items
  return (
    <Layout pageTitle={cons.Name} conNumber={cons.Number}>
      <Seo title={`${cons.Name} - ${cons.CurrentRep}`} />
      <div className={styles.mainGrid}>
        <div>
          <div className={styles.repCard}>
            <h2>{cons.CurrentRep}</h2>
            <GatsbyImage
              className={styles.repImage}
              //image={repImage?.image.asset.gatsbyImageData}
              image={allImageSharp?.nodes[0]?.gatsbyImageData}
              alt={cons.CurrentRep}
            />
            <h3>{cons.Party}</h3>
          </div>
          <div className={styles.hideMobile}>
            <RepContactInfo styles={styles} rep={rep} />
            <ConDemoData styles={styles} cons={cons} />
          </div>
        </div>
        <div>
          <ConBills styles={styles} bills={bills} />
          <ConHansardLinks
            styles={styles}
            sessions={sessions}
            hansardIndexes={hansardIndexes}
            rep={rep}
          />
        </div>
        <div className={styles.showMobile}>
          <RepContactInfo styles={styles} rep={rep} />
          <ConDemoData styles={styles} cons={cons} />
        </div>
      </div>
    </Layout>
  )
}

//(filter: {original: {src: {regex: "/danielle-adams/"}}})
export const pageQuery = graphql`
  query ConDetail($slug: Int!, $rep: String!, $repRegex: String!) {
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
  }
`
