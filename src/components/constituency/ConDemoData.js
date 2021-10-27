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
    <aside>
      <h4 className="text-primary font-serif text-2xl">Constituency Info</h4>
      <h5 className="text-primary text-lg">{cons.Name}</h5>

      <table>
        <tbody>
          {nameValues.map(nameValue => (
            <tr key={nameValue.name}>
              <th className="text-left text-primary">{nameValue.name}</th>
              <td className="text-right text-primary">{nameValue.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="w-full shadow stats">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-8 h-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-info">2.6M</div>
          <div class="stat-desc">21% more than last month</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-info">
            <div class="avatar online">
              <div class="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                <img
                  src="/tailwind-css-component-profile-5@56w.png"
                  alt="Avatar Tailwind CSS Component"
                  class="mask mask-squircle"
                />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-info">31 tasks remaining</div>
        </div>
      </div>
      <p>*Based on 25% sample</p>
      <p style={{ marginBottom: 0 }}>
        Information sourced from highlights compiled by Elections Manitoba of:
      </p>

      <ol style={{ listStyle: "initial", marginLeft: 20 }}>
        <li>
          information prepared by the Manitoba Bureau of Statistics based on the
          2016 Census information collected in Manitoba
        </li>
        <li> results from the 2019 general election.</li>
      </ol>
      <a
        href={`https://www.electionsmanitoba.ca/en/Resources/ElectoralDivisionProfile/${cons.Number}`}
      >
        profile on www.electionsmanitoba.ca
      </a>
    </aside>
  )
}
