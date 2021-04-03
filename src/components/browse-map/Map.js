import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { motion, AnimatePresence } from "framer-motion"
import { SideCon } from "./SideCon"
import { MainCon } from "./MainCon"
import {
  map,
  main,
  west,
  northWest,
  southWest,
  north,
  south,
  east,
  northEast,
  southEast,
  sideCon,
  navInstructions,
} from "./Map.module.css"

//GRID 4 rows, 3 columns
//8 directional cons
//main con
// - scrolling facts
// - view more link
// - current rep
//how to message

const variants = {
  initial: { y: 0, x: 0 },
  initialWest: { y: 0, x: "-15vw" },
  moveFromEast: {
    y: 0,
    x: "-30vw",
    scale: 2,
    transition: { delay: 2, duration: 2 },
  },
  moveFromWest: {
    y: "-10vh",
    x: "30vw",
    scale: 2,
    transition: { delay: 2, duration: 2 },
  },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const Map = ({ latitude, longitude }) => {
  const data = useStaticQuery(BROWSE_MAP)

  const [conNumber, setConNumber] = useState(101)

  const createConObj = conNumber => {
    const mainCon = data.allCons.nodes.find(con => con.Number === conNumber)

    const sideCons = data.allCons.nodes.map(con => {
      if (mainCon.West === con.Number) mainCon.WestCon = con
      if (mainCon.NorthWest === con.Number) mainCon.NorthWestCon = con
      if (mainCon.North === con.Number) mainCon.NorthCon = con
      if (mainCon.NorthEast === con.Number) mainCon.NorthEastCon = con
      if (mainCon.East === con.Number) mainCon.EastCon = con
      if (mainCon.SouthEast === con.Number) mainCon.SouthEastCon = con
      if (mainCon.South === con.Number) mainCon.SouthCon = con
      if (mainCon.SouthWest === con.Number) mainCon.SouthWestCon = con
    })

    return mainCon
  }

  const mainCon = createConObj(conNumber)

  return (
    <AnimatePresence>
      <motion.div
        key="map"
        className={map}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        onDragEnd={(e, { offset, velocity }) => {
          if (offset.x < -100) {
            //East
            if (offset.y < -100) {
              //South
              if (mainCon.SouthEast != -1) setConNumber(mainCon.SouthEast)
            } else if (offset.y > 100) {
              //North
              if (mainCon.NorthEast != -1) setConNumber(mainCon.NorthEast)
            } else {
              //East
              if (mainCon.East != -1) setConNumber(mainCon.East)
            }
          } else if (offset.x > 100) {
            //West
            if (offset.y < -100) {
              //South
              if (mainCon.SouthWest != -1) setConNumber(mainCon.SouthWest)
            } else if (offset.y > 100) {
              //North
              if (mainCon.NorthWest != -1) setConNumber(mainCon.NorthWest)
            } else {
              //West
              if (mainCon.West != -1) setConNumber(mainCon.West)
            }
          } else {
            if (offset.y < -100) {
              //South
              if (mainCon.South != -1) setConNumber(mainCon.South)
            } else if (offset.y > 100) {
              //North
              if (mainCon.North != -1) setConNumber(mainCon.North)
            } else {
              //West
            }
          }
        }}
      >
        <SideCon
          className={`${west} ${sideCon}`}
          // variants={variants}
          // initial="initialWest"
          // animate="moveFromWest"
          con={mainCon.WestCon}
          onClick={() => {
            if (mainCon.West != -1) setConNumber(mainCon.West)
          }}
        />
        <SideCon
          className={`${northWest} ${sideCon}`}
          con={mainCon.NorthWestCon}
          onClick={() => {
            if (mainCon.NorthWest != -1) setConNumber(mainCon.NorthWest)
          }}
        />
        <SideCon
          className={`${north} ${sideCon}`}
          con={mainCon.NorthCon}
          onClick={() => {
            if (mainCon.North != -1) setConNumber(mainCon.North)
          }}
        />
        <SideCon
          className={`${northEast} ${sideCon}`}
          con={mainCon.NorthEastCon}
          onClick={() => {
            if (mainCon.NorthEast != -1) setConNumber(mainCon.NorthEast)
          }}
        />
        <SideCon
          className={`${east} ${sideCon}`}
          // variants={variants}
          // initial="initial"
          // animate="moveFromEast"
          con={mainCon.EastCon}
          onClick={() => {
            if (mainCon.East != -1) setConNumber(mainCon.East)
          }}
        />
        <SideCon
          className={`${southEast} ${sideCon}`}
          con={mainCon.SouthEastCon}
          onClick={() => {
            if (mainCon.SouthEast != -1) setConNumber(mainCon.SouthEast)
          }}
        />
        <SideCon
          className={`${south} ${sideCon}`}
          con={mainCon.SouthCon}
          onClick={() => {
            if (mainCon.South != -1) setConNumber(mainCon.South)
          }}
        />
        <SideCon
          className={`${southWest} ${sideCon}`}
          con={mainCon.SouthWestCon}
          onClick={() => {
            if (mainCon.SouthWest != -1) setConNumber(mainCon.SouthWest)
          }}
        />

        <MainCon con={mainCon} />
      </motion.div>
      <div className={navInstructions}>
        <h2>Click or Drag Map to Browse</h2>
      </div>
    </AnimatePresence>
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
        West
        NorthWest
        North
        NorthEast
        East
        SouthEast
        South
        SouthWest
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
