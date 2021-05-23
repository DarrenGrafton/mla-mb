import React from "react"

export const ConDemoData = ({ cons, styles }) => {
  const nameValues = [
    { name: "Area In Square Km", value: cons.AreaInSquareKm },
    { name: "Avg Family Size", value: cons.AvgFamilySize },
    { name: "Correctional Facilities", value: cons.CorrectionalFacilities },
    { name: "Hospitals", value: cons.Hospitals },
    { name: "Median Age", value: cons.MedianAge },
    { name: "Multiple Dwellings", value: cons.MultipleDwellings },
    { name: "Median Household Income", value: cons.MedianHouseholdIncome },
    // {
    //   name: "Neighbouring Electoral Divisions",
    //   value: cons.NeighbouringElectoralDivisions,
    // },
    { name: "Number Of Voting Areas", value: cons.NumberOfvotingAreas },
    { name: "Percent Canadian Citizens", value: cons.PercentCanadianCitizens },
    { name: "Personal Care Homes", value: cons.PersonalCareHomes },
    { name: "Plurality", value: cons.Plurality },
    {
      name: "Post Secondary Institutions",
      value: cons.PostSecondaryInstitutions,
    },
    { name: "Registered Voters", value: cons.RegisteredVoters },
    { name: "Schools", value: cons.Schools },
    { name: "Total Population", value: cons.TotalPopulation },
    { name: "Voter Turnout 2019", value: cons.VoterTurnout2019 },
  ]
  return (
    <aside className={styles.conDemoData}>
      <h4>Constituency Info</h4>
      <table>
        <tbody>
          {nameValues.map(nameValue => (
            <tr>
              <th>{nameValue.name}</th>
              <td>{nameValue.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </aside>
  )
}
