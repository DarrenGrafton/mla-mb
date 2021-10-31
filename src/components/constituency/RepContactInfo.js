import React from "react"

export const RepContactInfo = ({ rep }) => {
  return (
    <aside className="collapse border rounded-box border-secondary collapse-arrow m-2 mt-0 lg:mt-2">
      <input type="checkbox" id="contact-info" className="collapse-toggle" />
      <h4 className="collapse-title font-serif text-primary text-xl">
        Contact <span className="text-base">info for {rep.Name}</span>
      </h4>
      <div className="collapse-content">
        <h5 className="text-primary text-lg">Constituency Office</h5>
        <ul>
          <li className="text-primary">{rep.ConstituencyOffice}</li>
          {rep.ConstituencyOfficeEmail && (
            <li className="text-primary">
              <span className="font-semibold">Email: </span>
              <a
                className="border-b-2 border-secondary"
                href={`mailto:${rep.ConstituencyOfficeEmail}`}
              >
                {rep.ConstituencyOfficeEmail}
              </a>
            </li>
          )}
          {rep.ConstituencyOfficeFax && (
            <li className="text-primary">
              <span className="font-semibold">Fax: </span>
              {rep.ConstituencyOfficeFax}
            </li>
          )}

          {rep.ConstituencyOfficePhone && (
            <li className="text-primary">
              <span className="font-semibold">Phone: </span>
              {rep.ConstituencyOfficePhone}
              {/* <a href={`tel:+${rep.ConstituencyOfficePhone}`}>
              {rep.ConstituencyOfficePhone}
            </a> */}
            </li>
          )}
        </ul>
        <h5 className="text-primary text-lg">Legislative Office</h5>
        <ul>
          {rep.Office && <li className="text-primary">{rep.Office}</li>}
          {rep.Email && (
            <li className="text-primary">
              <span className="font-semibold">Email: </span>
              <a
                className="border-b-2 border-secondary"
                href={`mailto:${rep.Email}`}
              >
                {rep.Email}
              </a>
            </li>
          )}
          {rep.OfficeFax && (
            <li className="text-primary">
              <span className="font-semibold">Fax: </span>
              {rep.OfficeFax}
            </li>
          )}
          {rep.OfficePhone && (
            <li className="text-primary">
              <span className="font-semibold">Phone:</span> {rep.OfficePhone}
            </li>
          )}
        </ul>
      </div>
    </aside>
  )
}
