import React from "react"
import { Link } from "gatsby"
export const BillSession = ({ sessionName, sessionUrl, sessionBills }) => {
  return (
    <div className="p-2 lg:p-4">
      <div className="flex items-center mb-2">
        <h2 className="text-primary w-8/12">{sessionName}</h2>
        <a
          className="text-primary border-b-2 border-secondary"
          href={sessionUrl}
        >
          Gov Mb Listing
        </a>
      </div>
      <ol>
        {sessionBills.map(edge => (
          <li key={edge.node.billKey}>
            <Link
              className="text-primary border-b-2 border-secondary"
              to={`/bills/${edge.node.billKey}`}
            >
              <span className="font-semibold">Bill {edge.node.number} - </span>
              {edge.node.billName}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
