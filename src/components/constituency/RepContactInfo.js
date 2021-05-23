import React from "react"

export const RepContactInfo = ({ styles, rep }) => {
  return (
    <aside className={styles.repInfo}>
      <h4>Contact</h4>
      <h5>Constituency Office</h5>
      <ul>
        <li>{rep.ConstituencyOffice}</li>
        <li>
          <span>Email:</span> {rep.ConstituencyOfficeEmail}
        </li>
        <li>
          <span>Fax:</span> {rep.ConstituencyOfficeFax}
        </li>
        <li>
          <span>Phone:</span>
          {rep.ConstituencyOfficePhone}
          {/* <a href={`tel:+${rep.ConstituencyOfficePhone}`}>
              {rep.ConstituencyOfficePhone}
            </a> */}
        </li>
      </ul>
      <h5>Legislative Office</h5>
      <ul>
        <li>{rep.Office}</li>
        <li>
          <span>Email:</span> {rep.Email}
        </li>
        <li>
          <span>Fax:</span> {rep.OfficeFax}
        </li>
        <li>
          <span>Phone:</span> {rep.OfficePhone}
        </li>
      </ul>
    </aside>
  )
}
