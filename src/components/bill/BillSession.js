import React from "react"
import * as styles from "./Bill.module.css"

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
            <a href={`/bills/${edge.node.billKey}`}>
              <span className={styles.billName}>
                Bill {edge.node.number} -{" "}
              </span>
              {edge.node.billName}
            </a>
          </li>
        ))}
      </ol>
    </div>
  )
}
