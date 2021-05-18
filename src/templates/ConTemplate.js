import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

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

  return (
    <Layout>
      <h1>{cons.Name}</h1>
      <h2>
        {cons.CurrentRep} - {cons.Party}
      </h2>
      <div className="repInfo flex">
        <div>
          <GatsbyImage
            image={repImage?.image.asset.gatsbyImageData}
            alt={cons.CurrentRep}
          />
        </div>
        <div>
          <p>
            Constituency Office: {rep.ConstituencyOffice}
            Email: {rep.ConstituencyOfficeEmail}
            Fax: {rep.ConstituencyOfficeFax}
            Phone: {rep.ConstituencyOfficePhone}
          </p>
          <p>
            Legislative Office: {rep.Office}
            Email: {rep.Email}
            OfficeFax: {rep.OfficeFax}
            OfficePhone: {rep.OfficePhone}
          </p>
        </div>
      </div>

      <div className="electionManitoba">
        <table>
          <tbody>
            <tr>
              <td>AreaInSquareKm</td>
              <td>{cons.AreaInSquareKm}</td>
            </tr>
            <tr>
              <td>AvgFamilySize</td>
              <td>{cons.AvgFamilySize}</td>
            </tr>
            <tr>
              <td>CorrectionalFacilities</td>
              <td>{cons.CorrectionalFacilities}</td>
            </tr>
            <tr>
              <td>Hospitals</td>
              <td>{cons.Hospitals}</td>
            </tr>
            <tr>
              <td>MedianAge</td>
              <td>{cons.MedianAge}</td>
            </tr>
            <tr>
              <td>MultipleDwellings</td>
              <td>{cons.MultipleDwellings}</td>
            </tr>
            <tr>
              <td>MedianHouseholdIncome</td>
              <td>{cons.MedianHouseholdIncome}</td>
            </tr>
            <tr>
              <td>NeighbouringElectoralDivisions</td>
              <td>{cons.NeighbouringElectoralDivisions}</td>
            </tr>
            <tr>
              <td>NumberOfvotingAreas</td>
              <td>{cons.NumberOfvotingAreas}</td>
            </tr>
            <tr>
              <td>PercentCanadianCitizens</td>
              <td>{cons.PercentCanadianCitizens}</td>
            </tr>
            <tr>
              <td>PersonalCareHomes</td>
              <td>{cons.PersonalCareHomes}</td>
            </tr>
            <tr>
              <td>Plurality</td>
              <td>{cons.Plurality}</td>
            </tr>
            <tr>
              <td>PostSecondaryInstitutions</td>
              <td>{cons.PostSecondaryInstitutions}</td>
            </tr>
            <tr>
              <td>RegisteredVoters</td>
              <td>{cons.RegisteredVoters}</td>
            </tr>
            <tr>
              <td>Schools</td>
              <td>{cons.Schools}</td>
            </tr>
            <tr>
              <td>TotalPopulation</td>
              <td>{cons.TotalPopulation}</td>
            </tr>
            <tr>
              <td> VoterTurnout2019</td>
              <td>{cons.VoterTurnout2019}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bills"></div>
      <ul>
        {bills.edges.map(edge => (
          <li key={edge.node.billLink}>
            {edge.node.session} Session - {edge.node.number} -{" "}
            {edge.node.billName}
            <a href={edge.node.billLink}>Link</a>
          </li>
        ))}
      </ul>
      <div className="hansard">
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
                <a href={edge.node.link}>Link</a>
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
    allBillsJson(filter: { rep: { eq: $rep } }) {
      edges {
        node {
          number
          rep
          billLink
          billName
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
