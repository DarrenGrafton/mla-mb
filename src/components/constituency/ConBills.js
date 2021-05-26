import React from "react"

export const ConBills = ({ styles, bills }) => {
  return (
    <div className={styles.bills}>
      <h3>Bills</h3>
      {bills.edges.length > 0 ? (
        <>
          <p>Bills sponsored in the current legislature:</p>
          <ul>
            {bills.edges.map(edge => (
              <li key={edge.node.billLink}>
                <a
                  className={styles.billLink}
                  href={`/bills/${edge.node.billKey}`}
                >
                  <span className={styles.billName}>
                    Bill {edge.node.number} ({edge.node.session} Session)
                  </span>{" "}
                  - {edge.node.billName}
                </a>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p>None sponsored in the current legislature</p>
      )}
    </div>
  )
}
