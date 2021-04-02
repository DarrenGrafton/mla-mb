import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"
import { mainCon, conInfo } from "./Map.module.css"
import { Link } from "gatsby"

const variants = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const MainCon = ({ con }) => {
  return (
    <div className={mainCon}>
      <div className={conInfo}>
        <motion.h1
          transition={{ duration: 1 }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {con.Name}
        </motion.h1>
        <motion.p
          transition={{ duration: 1 }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Total Population: {con.TotalPopulation}
          <br />
          Area In Square Km: {con.AreaInSquareKm}
        </motion.p>
        <Link to="#">Read More</Link>
        <div className="rep">
          <h3>{con.CurrenRep}</h3>
        </div>
      </div>

      <ConSvg conId={con.Number} fill="white" stroke="red" strokeWidth="20" />
    </div>
  )
}
