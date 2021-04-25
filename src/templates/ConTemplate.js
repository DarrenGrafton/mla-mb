import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

export default function ConTemplate({ data }) {
  const { cons, allReps, allSanityRepImage } = data

  console.log(data)

  const lastName = cons.CurrentRep.split(" ").slice(-1).join(" ")
  const fullName = cons.CurrentRep.replace(" ", "")

  const repImage = allSanityRepImage.nodes.find(
    node =>
      fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
      lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  )
  const rep = allReps.nodes.find(
    node =>
      cons.Name.localeCompare(node.Constituency, "en", {
        sensitivity: "base",
      }) === 0
  )

  return (
    <div>
      <h1>{cons.Name}</h1>
      <h2>{cons.Number}</h2>

      <GatsbyImage
        image={repImage?.image.asset.gatsbyImageData}
        alt={cons.CurrentRep}
      />
      <h3>{cons.CurrentRep}</h3>
      <h3>{cons.Party}</h3>
      <p>ConstituencyOffice: {rep.ConstituencyOffice}</p>
      <p>ConstituencyOfficeEmail: {rep.ConstituencyOfficeEmail}</p>
      <p>ConstituencyOfficeFax: {rep.ConstituencyOfficeFax}</p>
      <p>ConstituencyOfficePhone: {rep.ConstituencyOfficePhone}</p>
      <p>Email: {rep.Email}</p>
      <p>Office: {rep.Office}</p>
      <p>OfficeFax: {rep.OfficeFax}</p>
      <p>OfficePhone: {rep.OfficePhone}</p>

      <table>
        {/* <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr> */}
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
  )
}

export const pageQuery = graphql`
  query ConDetail($slug: Int!) {
    cons(Number: { eq: $slug }) {
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
    allReps {
      nodes {
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
