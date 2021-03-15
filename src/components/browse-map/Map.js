import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"

//GRID 4 rows, 3 columns
//8 directional cons
//main con
// - scrolling facts
// - view more link
// - current rep
//how to message

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const Map = ({ latitude, longitude }) => {
  const data = useStaticQuery(BROWSE_MAP)

  const [con, setCon] = useState(data.allCons.nodes[12])
  return (
    <motion.div drag>
      <motion.h2
        transition={{ duration: 1 }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: "relative", left: 300, top: 300 }}
      >
        {con.Name}
      </motion.h2>
      <motion.h3
        transition={{ duration: 1 }}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: "relative", left: 500, top: 300 }}
      >
        Total Population: {con.TotalPopulation}
      </motion.h3>
      <ConSvg
        conId={con.Number}
        width="30vw"
        height="100vh"
        fill="white"
        stroke="red"
        strokeWidth="10"
      />
    </motion.div>
  )
}

const BROWSE_MAP = graphql`
  query BrowseMap {
    allCons {
      nodes {
        AreaInSquareKm
        CurrenRep
        Name
        Number
        Party
        TotalPopulation
      }
    }
    allReps {
      nodes {
        Constituency
        Name
        Party
      }
    }
    allSanityRepImage {
      nodes {
        image {
          asset {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`
