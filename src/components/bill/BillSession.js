import React from "react"
import * as styles from "./Bill.module.css"
import { Link } from "gatsby"
export const BillSession = ({ sessionName, sessionUrl, sessionBills }) => {
  return (
    <div className={styles.bills}>
      <div className={styles.sessionheader}>
        <h2>{sessionName}</h2>
        <a href={sessionUrl}>Gov Mb Listing</a>
      </div>
      <ol>
        {sessionBills.map(edge => (
          <li key={edge.node.billKey}>
            <Link to={`/bills/${edge.node.billKey}`}>
              <span className={styles.billName}>
                Bill {edge.node.number} -{" "}
              </span>
              {edge.node.billName}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
