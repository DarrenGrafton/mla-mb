import React from "react"

export const ConDemoData = ({ cons, styles }) => {
  const nameValues = [
    { name: "Total Population", value: cons.TotalPopulation },
    { name: "Area In Square Km", value: cons.AreaInSquareKm },
    { name: "Registered Voters", value: cons.RegisteredVoters },
    { name: "Voter Turnout 2019", value: cons.VoterTurnout2019 },
    { name: "Plurality", value: cons.Plurality },
    { name: "Number Of Voting Areas", value: cons.NumberOfvotingAreas },
    { name: "Median Age", value: cons.MedianAge },
    { name: "Avg Family Size", value: cons.AvgFamilySize },
    { name: "Multiple Dwellings", value: cons.MultipleDwellings },
    { name: "Median Household Income", value: cons.MedianHouseholdIncome },
    { name: "Percent Canadian Citizens*", value: cons.PercentCanadianCitizens },
    { name: "Schools", value: cons.Schools },
    { name: "Hospitals", value: cons.Hospitals },
    { name: "Personal Care Homes", value: cons.PersonalCareHomes },
    {
      name: "Post Secondary Institutions",
      value: cons.PostSecondaryInstitutions,
    },
    { name: "Correctional Facilities", value: cons.CorrectionalFacilities },
    // {
    //   name: "Neighbouring Electoral Divisions",
    //   value: cons.NeighbouringElectoralDivisions,
    // },
  ]
  return (
    <aside className={styles.conDemoData}>
      <h4>Constituency Info</h4>
      <h5>{cons.Name}</h5>

      <table>
        <tbody>
          {nameValues.map(nameValue => (
            <tr key={nameValue.name}>
              <th>{nameValue.name}</th>
              <td>{nameValue.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>*Based on 25% sample</p>
      <p>
        Highlights compiled by Elections Manitoba of information prepared by the
        Manitoba Bureau of Statistics based on the 2016 Census information
        collected in Manitoba and results from the 2019 general election.
      </p>
      <a
        href={`https://www.electionsmanitoba.ca/en/Resources/ElectoralDivisionProfile/${cons.Number}`}
      >
        profile on www.electionsmanitoba.ca
      </a>
    </aside>
  )
}
