import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"
import { mainCon, conInfo, rep } from "./Map.module.css"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugifyConName } from "../../helpers/Utils"

export const MainCon = ({
  con,
  mainConVariants,
  mainConH1Variants,
  mainConPVariants,
  mainConRepVariants,
}) => {
  return (
    <motion.div
      className={mainCon}
      variants={mainConVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={conInfo}>
        <motion.h1
          variants={mainConH1Variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {con.Name}
        </motion.h1>
        <motion.p
          variants={mainConPVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          Total Population: {con.TotalPopulation}
          <br />
          Area In Square Km: {con.AreaInSquareKm}
        </motion.p>
        <Link to={"/" + slugifyConName(con.Name)}>Read More</Link>
        <motion.div
          className={rep}
          variants={mainConRepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <GatsbyImage
            image={con.repImage?.image.asset.gatsbyImageData}
            alt={con.CurrenRep}
          />
          <h3>{con.CurrenRep}</h3>
        </motion.div>
      </div>

      <ConSvg conId={con.Number} fill="white" stroke="red" strokeWidth="20" />
    </motion.div>
  )
}
