import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { SideCon } from "./SideCon"
import { MainCon } from "./MainCon"
import * as styles from "./Map.module.css"
import classNames from "classnames"
import { Link } from "gatsby"
import { RiArrowGoBackFill } from "react-icons/Ri"
//8 directional cons (plus interior east/west to make it 10 )
//main con
// - scrolling facts - todo
// - view more link
// - current rep
//how to message

//the whole map
const mapVariants = {
  initial: { opacity: 1, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, transition: { delay: 0.4, duration: 0.1 } },
  none: {},
}

//the current constituency
const mainConVariants = {
  initial: { opacity: 0.8, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}

const mainConH1Variants = {
  initial: { opacity: 0, y: 0, x: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}
const mainConPVariants = {
  initial: { opacity: 0.8, y: 0, x: 0 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { delay: 0, duration: 0.4 } },
}
const mainConRepVariants = {
  initial: { opacity: 0, y: 0, x: 0 },
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
const navInstructionVariants = {
  initial: { opacity: 0.0, y: 0, x: 0 },
  animate: { opacity: 1, y: 0, transition: { delay: 5, duration: 0.4 } },
  exit: { opacity: 0 },
}

export const Map = ({ mainCon, data, conState, setConState }) => {
  return (
    <AnimatePresence exitBeforeEnter custom={conState.direction}>
      {mainCon && (
        <motion.div
          key={conState.Number + "main"}
          custom={conState.direction}
          variants={mapVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={styles.map}
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

                if (mainCon.SouthEast !== -1)
                  setConState({
                    Number: mainCon.SouthEast,
                    direction: "SouthEast",
                  })
              } else if (yPower > 100) {
                //North
                if (mainCon.NorthEast !== -1)
                  setConState({
                    Number: mainCon.NorthEast,
                    direction: "NorthEast",
                  })
              } else {
                //East
                if (mainCon.East !== -1)
                  setConState({ Number: mainCon.East, direction: "East" })
              }
            } else if (xPower > 100) {
              //West
              if (yPower < -100) {
                //South
                if (mainCon.SouthWest !== -1)
                  setConState({
                    Number: mainCon.SouthWest,
                    direction: "SouthWest",
                  })
              } else if (yPower > 100) {
                //North
                if (mainCon.NorthWest !== -1)
                  setConState({
                    Number: mainCon.NorthWest,
                    direction: "NorthWest",
                  })
              } else {
                //West
                if (mainCon.West !== -1)
                  setConState({ Number: mainCon.West, direction: "West" })
              }
            } else {
              if (yPower < -100) {
                //South
                if (mainCon.South !== -1)
                  setConState({ Number: mainCon.South, direction: "South" })
              } else if (yPower > 100) {
                //North
                if (mainCon.North !== -1)
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
            className={classNames(styles.west, styles.sideCon)}
            con={mainCon.WestCon}
            onClick={() => {
              if (mainCon.West !== -1)
                setConState({ Number: mainCon.West, direction: "West" })
            }}
          />
          <SideCon
            className={classNames(styles.northWest, styles.sideCon)}
            con={mainCon.NorthWestCon}
            variants={sideConVariants}
            initial="initialNorthWest"
            animate="none"
            exit="moveFromNorthWest"
            key={conState.Number + "NorthWest"}
            custom={conState.direction}
            onClick={() => {
              if (mainCon.NorthWest !== -1)
                setConState({
                  Number: mainCon.NorthWest,
                  direction: "NorthWest",
                })
            }}
          />
          <SideCon
            className={classNames(styles.north, styles.sideCon)}
            con={mainCon.NorthCon}
            variants={sideConVariants}
            initial="initialNorth"
            animate="none"
            exit="moveFromNorth"
            key={conState.Number + "North"}
            onClick={() => {
              if (mainCon.North !== -1)
                setConState({ Number: mainCon.North, direction: "North" })
            }}
          />
          <SideCon
            className={classNames(styles.northEast, styles.sideCon)}
            con={mainCon.NorthEastCon}
            variants={sideConVariants}
            initial="initialNorthEast"
            animate="none"
            exit="moveFromNorthEast"
            key={conState.Number + "NorthEast"}
            onClick={() => {
              if (mainCon.NorthEast !== -1)
                setConState({
                  Number: mainCon.NorthEast,
                  direction: "NorthEast",
                })
            }}
          />
          <SideCon
            variants={sideConVariants}
            initial="initialEast"
            animate="none"
            exit="moveFromEast"
            key={conState.Number + "East"}
            custom={conState.direction}
            className={classNames(styles.east, styles.sideCon)}
            con={mainCon.EastCon}
            onClick={() => {
              if (mainCon.East !== -1)
                setConState({ Number: mainCon.East, direction: "East" })
            }}
          />
          <SideCon
            className={classNames(styles.southEast, styles.sideCon)}
            con={mainCon.SouthEastCon}
            variants={sideConVariants}
            initial="initialSouthEast"
            animate="none"
            exit="moveFromSouthEast"
            key={conState.Number + "SouthEast"}
            custom={conState.direction}
            onClick={() => {
              if (mainCon.SouthEast !== -1)
                setConState({
                  Number: mainCon.SouthEast,
                  direction: "SouthEast",
                })
            }}
          />
          <SideCon
            className={classNames(styles.south, styles.sideCon)}
            con={mainCon.SouthCon}
            variants={sideConVariants}
            initial="initialSouth"
            animate="none"
            exit="moveFromSouth"
            key={conState.Number + "South"}
            custom={conState.direction}
            onClick={() => {
              if (mainCon.South !== -1)
                setConState({ Number: mainCon.South, direction: "South" })
            }}
          />
          <SideCon
            className={classNames(styles.southWest, styles.sideCon)}
            con={mainCon.SouthWestCon}
            variants={sideConVariants}
            initial="initialSouthWest"
            animate="none"
            exit="moveFromSouthWest"
            key={conState.Number + "SouthWest"}
            custom={conState.direction}
            onClick={() => {
              if (mainCon.SouthWest !== -1)
                setConState({
                  Number: mainCon.SouthWest,
                  direction: "SouthWest",
                })
            }}
          />

          <MainCon
            con={mainCon}
            mainConVariants={mainConVariants}
            mainConH1Variants={mainConH1Variants}
            mainConPVariants={mainConPVariants}
            mainConRepVariants={mainConRepVariants}
          />
          {/* <motion.h2
            className={styles.navInstructions}
            variants={navInstructionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            Click or Drag Map to Browse
          </motion.h2> */}
        </motion.div>
      )}
      <Link to="/" className={styles.linkHome}>
        <RiArrowGoBackFill />
        Home
      </Link>
    </AnimatePresence>
  )
}
