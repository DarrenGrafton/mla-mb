import React from "react"
import { graphql } from "gatsby"

export default function ConTemplate({ data }) {
  const { cons, allReps, allSanityRepImage } = data

  console.log(data)
  return (
    <div className="blog-post">
      <h1>{cons?.Name}</h1>
      <h2>{cons?.Number}</h2>
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
        Name
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
