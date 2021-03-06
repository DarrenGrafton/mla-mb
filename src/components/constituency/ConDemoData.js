import React from "react"

export const ConDemoData = ({ cons, styles, className, defaultChecked }) => {
  const nameValues = [
    // { name: "Total Population", value: cons.TotalPopulation },
    // { name: "Area In Square Km", value: cons.AreaInSquareKm },
    // { name: "Registered Voters", value: cons.RegisteredVoters },
    // { name: "Voter Turnout 2019", value: cons.VoterTurnout2019 },
    // { name: "Plurality", value: cons.Plurality },
    // { name: "Number Of Voting Areas", value: cons.NumberOfvotingAreas },
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
    <aside className={className}>
      <input type="checkbox" defaultChecked={defaultChecked} />
      <h4 className="collapse-title text-primary font-serif text-2xl">
        {cons.Name} Constituency Info
      </h4>
      <div className="collapse-content ">
        <div className="border stats border-secondary shadow-lg stats grid-flow-row sm:grid-flow-col mt-2">
          <div
            id="population"
            className="stat bg-transparent border-b lg:border-b-0 lg:border-r"
          >
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
            </div>
            <div className="stat-title" style={{ opacity: 0.8 }}>
              Total Population
            </div>
            <div className="stat-value text-primary">
              {cons.TotalPopulation}
            </div>
            <div className="stat-desc" style={{ opacity: 0.8 }}>
              {cons.RegisteredVoters} Registered Voters
            </div>
          </div>
          <div
            id="area"
            className="stat bg-background border-b lg:border-b-0 lg:border-r"
          >
            <div className="stat-figure text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </div>
            <div className="stat-title" style={{ opacity: 0.8 }}>
              Area in{" "}
              <span className="text-base">
                km<sup>2</sup>
              </span>
            </div>
            <div className="stat-value text-accent">{cons.AreaInSquareKm}</div>
            <div className="stat-desc" style={{ opacity: 0.8 }}>
              {(
                parseInt(cons.TotalPopulation.replace(",", "")) /
                parseFloat(cons.AreaInSquareKm.replace(",", ""))
              ).toFixed(2)}{" "}
              people
              <br />
              per square km
            </div>
          </div>

          <div id="voter-turnout" className="stat bg-background">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </svg>
            </div>
            <div className="stat-title" style={{ opacity: 0.8 }}>
              Voter Turnout 2019
            </div>
            <div className="stat-value text-primary">
              {cons.VoterTurnout2019}
            </div>
            <div className="stat-desc" style={{ opacity: 0.8 }}>
              {cons.NumberOfvotingAreas} voting areas <br />
              Plurality {cons.Plurality}
            </div>
          </div>
        </div>

        <div className="my-4">
          <dl className="grid lg:grid-cols-2">
            {nameValues.map((nameValue, i) => (
              <div
                key={nameValue.name}
                className={
                  "px-1 py-0 grid grid-cols-3 sm:gap-4 " +
                  (i % 2 == 0
                    ? "bg-background"
                    : "bg-background-200 lg:bg-background")
                }
              >
                <dt className="text-left text-primary text-sm font-semibold col-start-1 col-end-3">
                  {nameValue.name}
                </dt>
                <dd className="text-right text-primary mt-1 text-sm sm:mt-0 col-start-3 col-end-4 align-middle">
                  {nameValue.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <p className="text-primary text-xs">*Based on 25% sample</p>
        <p className="text-primary text-xs">
          Information sourced from highlights compiled by Elections Manitoba of:
        </p>

        <ul className="list-disc list-inside">
          <li className="text-primary text-xs">
            information prepared by the Manitoba Bureau of Statistics based on
            the 2016 Census information collected in Manitoba
          </li>
          <li className="text-primary text-xs">
            {" "}
            results from the 2019 general election.
          </li>
        </ul>
        <a
          className="text-primary text-xs border-b-2 border-secondary "
          href={`https://www.electionsmanitoba.ca/en/Resources/ElectoralDivisionProfile/${cons.Number}`}
        >
          profile on www.electionsmanitoba.ca
        </a>
      </div>
    </aside>
  )
}
