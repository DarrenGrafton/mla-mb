import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"
import * as styles from "./Map.module.css"

export const SideCon = ({ con, ...other }) => {
  return (
    <motion.div {...other}>
      {con && (
        <>
          <ConSvg
            conId={con.Number}
            width="35vw"
            height="35vh"
            fill="white"
            stroke="red"
            strokeWidth="5"
          />
          <h4 className={styles.sideConName}>{con.Name}</h4>
        </>
      )}
    </motion.div>
  )
}
