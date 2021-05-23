import React from "react"

export const RepContactInfo = ({ styles, rep }) => {
  return (
    <aside className={styles.repInfo}>
      <h4>Contact</h4>
      <h5>Constituency Office</h5>
      <ul>
        <li>{rep.ConstituencyOffice}</li>
        {rep.ConstituencyOfficeEmail && (
          <li>
            <span>Email:</span> {rep.ConstituencyOfficeEmail}
          </li>
        )}
        {rep.ConstituencyOfficeFax && (
          <li>
            <span>Fax:</span> {rep.ConstituencyOfficeFax}
          </li>
        )}

        {rep.ConstituencyOfficePhone && (
          <li>
            <span>Phone:</span>
            {rep.ConstituencyOfficePhone}
            {/* <a href={`tel:+${rep.ConstituencyOfficePhone}`}>
              {rep.ConstituencyOfficePhone}
            </a> */}
          </li>
        )}
      </ul>
      <h5>Legislative Office</h5>
      <ul>
        {rep.Office && <li>{rep.Office}</li>}
        {rep.Email && (
          <li>
            <span>Email:</span> {rep.Email}
          </li>
        )}
        {rep.OfficeFax && (
          <li>
            <span>Fax:</span> {rep.OfficeFax}
          </li>
        )}
        {rep.OfficePhone && (
          <li>
            <span>Phone:</span> {rep.OfficePhone}
          </li>
        )}
      </ul>
    </aside>
  )
}
