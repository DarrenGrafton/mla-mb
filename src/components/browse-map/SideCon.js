import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"

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
          <h4 className="absolute pointer-events-none z-20 text-primary text-xs lg:text-xl text-shadow">
            {con.Name}
          </h4>
        </>
      )}
    </motion.div>
  )
}
