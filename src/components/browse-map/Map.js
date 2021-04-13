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

//8 directional cons
//main con
// - scrolling facts
// - view more link
// - current rep
//how to message

const mapVariants = {
  initial: { opacity: 1, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, transition: { delay: 0.4, duration: 0.1 } },
  none: {},
}

const mainConVariants = {
  initial: { opacity: 0.8, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}
const mainConH1Variants = {
  initial: { opacity: 0, y: -100, x: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}
const mainConPVariants = {
  initial: { opacity: 0.8, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}
const mainConRepVariants = {
  initial: { opacity: 0.8, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}

const sideConVariants = {
  initialWest: { y: 0, x: "-15vw" }, //Not sure why I need x:-15vw here
  initialNorthWest: { y: 0, x: "-15vw" },
  initialNorth: { y: 0, x: "-15vw" },
  initialNorthEast: { y: 0, x: "-15vw" },
  initialEast: { y: 0, x: "-15vw" },
  initialSouthEast: { y: 0, x: "-15vw" },
  initialSouth: { y: 0, x: "-15vw" },
  initialSouthWest: { y: 0, x: "-15vw" },

  moveFromWest: direction => {
    if (direction !== "West") return { opacity: 0 }
    return {
      y: "-10vh",
      x: "35vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromNorthWest: direction => {
    if (direction !== "NorthWest") return { opacity: 0 }
    return {
      y: "65vh",
      x: "35vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromNorth: direction => {
    if (direction !== "North") return { opacity: 0 }
    return {
      y: "65vh",
      x: "-50vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromNorthEast: direction => {
    if (direction !== "NorthEast") return { opacity: 0 }
    return {
      y: "65vh",
      x: "-135vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromEast: direction => {
    if (direction !== "East") return { opacity: 0 }
    return {
      y: "-10vh",
      x: "-135vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromSouthEast: direction => {
    if (direction !== "SouthEast") return { opacity: 0 }
    return {
      y: "-95vh",
      x: "-140vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromSouth: direction => {
    if (direction !== "South") return { opacity: 0 }
    return {
      y: "-95vh",
      x: "-50vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
  moveFromSouthWest: direction => {
    if (direction !== "SouthWest") return { opacity: 0 }
    return {
      y: "-95vh",
      x: "35vw",
      scale: 1.8,
      transition: { delay: 0, duration: 0.5 },
    }
  },
}

export const Map = ({ latitude, longitude }) => {
  const data = useStaticQuery(BROWSE_MAP)

  const [conState, setConState] = useState({ Number: 101, direction: null })

  const createConObj = conState => {
    const mainCon = data.allCons.nodes.find(
      con => con.Number === conState.Number
    )

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

  const mainCon = createConObj(conState)

  return (
    <AnimatePresence exitBeforeEnter custom={conState.direction}>
      <motion.div
        key={conState.Number + "main"}
        custom={conState.direction}
        variants={mapVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        // transition={{
        //   x: { type: "spring", stiffness: 300, damping: 30 },
        //   opacity: { duration: 0.2 },
        // }}

        className={map}
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.5}
        onDragEnd={(e, { offset, velocity }) => {
          const xPower = (Math.abs(offset.x) * velocity.x) / 10
          const yPower = (Math.abs(offset.y) * velocity.y) / 10

          if (xPower < -100) {
            //East
            if (yPower < -100) {
              //South

              if (mainCon.SouthEast != -1)
                setConState({
                  Number: mainCon.SouthEast,
                  direction: "SouthEast",
                })
            } else if (yPower > 100) {
              //North
              if (mainCon.NorthEast != -1)
                setConState({
                  Number: mainCon.NorthEast,
                  direction: "NorthEast",
                })
            } else {
              //East
              if (mainCon.East != -1)
                setConState({ Number: mainCon.East, direction: "East" })
            }
          } else if (xPower > 100) {
            //West
            if (yPower < -100) {
              //South
              if (mainCon.SouthWest != -1)
                setConState({
                  Number: mainCon.SouthWest,
                  direction: "SouthWest",
                })
            } else if (yPower > 100) {
              //North
              if (mainCon.NorthWest != -1)
                setConState({
                  Number: mainCon.NorthWest,
                  direction: "NorthWest",
                })
            } else {
              //West
              if (mainCon.West != -1)
                setConState({ Number: mainCon.West, direction: "West" })
            }
          } else {
            if (yPower < -100) {
              //South
              if (mainCon.South != -1)
                setConState({ Number: mainCon.South, direction: "South" })
            } else if (yPower > 100) {
              //North
              if (mainCon.North != -1)
                setConState({ Number: mainCon.North, direction: "North" })
            } else {
              //West
            }
          }
        }}
      >
        <SideCon
          variants={sideConVariants}
          initial="initialWest"
          animate="none"
          exit="moveFromWest"
          key={conState.Number + "West"}
          custom={conState.direction}
          className={`${west} ${sideCon}`}
          con={mainCon.WestCon}
          onClick={() => {
            if (mainCon.West != -1)
              setConState({ Number: mainCon.West, direction: "West" })
          }}
        />
        <SideCon
          className={`${northWest} ${sideCon}`}
          con={mainCon.NorthWestCon}
          variants={sideConVariants}
          initial="initialNorthWest"
          animate="none"
          exit="moveFromNorthWest"
          key={conState.Number + "NorthWest"}
          custom={conState.direction}
          onClick={() => {
            if (mainCon.NorthWest != -1)
              setConState({ Number: mainCon.NorthWest, direction: "NorthWest" })
          }}
        />
        <SideCon
          className={`${north} ${sideCon}`}
          con={mainCon.NorthCon}
          variants={sideConVariants}
          initial="initialNorth"
          animate="none"
          exit="moveFromNorth"
          key={conState.Number + "North"}
          onClick={() => {
            if (mainCon.North != -1)
              setConState({ Number: mainCon.North, direction: "North" })
          }}
        />
        <SideCon
          className={`${northEast} ${sideCon}`}
          con={mainCon.NorthEastCon}
          variants={sideConVariants}
          initial="initialNorthEast"
          animate="none"
          exit="moveFromNorthEast"
          key={conState.Number + "NorthEast"}
          onClick={() => {
            if (mainCon.NorthEast != -1)
              setConState({ Number: mainCon.NorthEast, direction: "NorthEast" })
          }}
        />
        <SideCon
          variants={sideConVariants}
          initial="initialEast"
          animate="none"
          exit="moveFromEast"
          key={conState.Number + "East"}
          custom={conState.direction}
          className={`${east} ${sideCon}`}
          con={mainCon.EastCon}
          onClick={() => {
            if (mainCon.East != -1)
              setConState({ Number: mainCon.East, direction: "East" })
          }}
        />
        <SideCon
          className={`${southEast} ${sideCon}`}
          con={mainCon.SouthEastCon}
          variants={sideConVariants}
          initial="initialSouthEast"
          animate="none"
          exit="moveFromSouthEast"
          key={conState.Number + "SouthEast"}
          custom={conState.direction}
          onClick={() => {
            if (mainCon.SouthEast != -1)
              setConState({ Number: mainCon.SouthEast, direction: "SouthEast" })
          }}
        />
        <SideCon
          className={`${south} ${sideCon}`}
          con={mainCon.SouthCon}
          variants={sideConVariants}
          initial="initialSouth"
          animate="none"
          exit="moveFromSouth"
          key={conState.Number + "South"}
          custom={conState.direction}
          onClick={() => {
            if (mainCon.South != -1)
              setConState({ Number: mainCon.South, direction: "South" })
          }}
        />
        <SideCon
          className={`${southWest} ${sideCon}`}
          con={mainCon.SouthWestCon}
          variants={sideConVariants}
          initial="initialSouthWest"
          animate="none"
          exit="moveFromSouthWest"
          key={conState.Number + "SouthWest"}
          custom={conState.direction}
          onClick={() => {
            if (mainCon.SouthWest != -1)
              setConState({ Number: mainCon.SouthWest, direction: "SouthWest" })
          }}
        />

        <MainCon
          con={mainCon}
          mainConVariants={mainConVariants}
          mainConH1Variants={mainConH1Variants}
          mainConPVariants={mainConPVariants}
          mainConRepVariants={mainConRepVariants}
        />
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
