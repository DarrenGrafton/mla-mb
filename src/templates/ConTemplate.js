import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ConDemoData } from "../components/constituency/ConDemoData"
import { RepContactInfo } from "../components/constituency/RepContactInfo"
import { ConHansardLinks } from "../components/constituency/ConHansardLinks"
import { useCookies } from "react-cookie"

export default function ConTemplate({ data }) {
  const {
    consJson: cons,
    repsJson: rep,
    allBillsJson: bills,
    allSessionsJson: sessions,
    allIndexesJson: hansardIndexes,
    allImageSharp,
  } = data

  const [, setCookie] = useCookies([])

  const smallWindow = typeof window !== `undefined` && window.innerWidth < 640
  //Set the con number page we are on, in case user pops to the map
  setCookie("last-constituency", cons.Number, { path: "/" })
  //header with  con name, back link,menu items
  return (
    <Layout pageTitle={cons.Name} conNumber={cons.Number} hClass="bg-gray-100">
      <Seo title={`${cons.Name} - ${cons.CurrentRep}`} />
      <div id="layout" className="grid lg:grid-cols-4 bg-gray-100">
        <div id="left-column">
          <div class="collapse-small-header collapse border rounded-box border-secondary collapse-arrow m-2">
            <input
              className="p-0 sm:p-1 min-h-0"
              type="checkbox"
              defaultChecked={!smallWindow}
            />
            <h2 className="collapse-title font-serif text-primary text-sm sm:text-lg md:text-xl mb-0 sm:p-2">
              <span className="text-xs sm:block">Current Rep: </span>
              {cons.CurrentRep}
            </h2>
            <div className="collapse-content flex flex-row items-center space-x-2">
              <GatsbyImage
                className="w-12 h-18 md:w-20 md:h-30 lg:w-24 lg:h-36 rounded-t-2xl mt-2"
                image={allImageSharp?.nodes[0]?.gatsbyImageData}
                alt={cons.CurrentRep}
              />
              <h3 className="text-primary text-base md:text-xl">
                {cons.Party}
              </h3>
            </div>
          </div>

          <div className="hidden lg:block">
            <RepContactInfo rep={rep} />
          </div>
        </div>
        <div id="right-column" className="lg:col-start-2 lg:col-end-5">
          <ConDemoData cons={cons} />

          <div
            id="bills"
            class="collapse border rounded-box border-secondary collapse-arrow m-2"
          >
            <input type="checkbox" />
            <h3 className="collapse-title font-serif text-primary text-base mb-0 mr-2 pr-8">
              <span className="text-xl">Bills</span> sponsored by {rep.Name} in
              current legislature
            </h3>
            <div className="collapse-content">
              {bills.edges.length > 0 ? (
                <>
                  <ul className="mt-4">
                    {bills.edges.map(edge => (
                      <li key={edge.node.billLink}>
                        <Link
                          className="text-primary text-base border-b-2 border-secondary"
                          to={`/bills/${edge.node.billKey}`}
                        >
                          <span className="font-medium">
                            Bill {edge.node.number} ({edge.node.session}{" "}
                            Session)
                          </span>{" "}
                          - {edge.node.billName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-primary mt-4">
                  None sponsored in the current legislature
                </p>
              )}
            </div>
          </div>
          <ConHansardLinks
            sessions={sessions}
            hansardIndexes={hansardIndexes}
            rep={rep}
          />
        </div>
        <div className="block lg:hidden mt-0">
          <RepContactInfo rep={rep} />
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
          width: 220
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
