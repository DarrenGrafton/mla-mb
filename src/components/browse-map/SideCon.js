import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const SideCon = ({ className, con, onClick }) => {
  return (
    <motion.div onClick={onClick} className={className}>
      {con && (
        <ConSvg
          conId={con.Number}
          width="35vw"
          height="35vh"
          fill="white"
          stroke="red"
          strokeWidth="5"
        />
      )}
    </motion.div>
  )
}
