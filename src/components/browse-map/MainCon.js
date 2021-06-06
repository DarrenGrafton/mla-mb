import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"
import * as styles from "./Map.module.css" //import { mainCon, conInfo, rep } from "./Map.module.css"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugifyName } from "../../helpers/Utils"

export const MainCon = ({
  con,
  mainConVariants,
  mainConH1Variants,
  mainConPVariants,
  mainConRepVariants,
}) => {
  return (
    <motion.div
      className={styles.mainCon}
      variants={mainConVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className={styles.conInfo}>
        <motion.h1
          className={styles.conName}
          variants={mainConH1Variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {con.Name}
        </motion.h1>
        <GatsbyImage
          image={con.repImage?.gatsbyImageData}
          alt={con.CurrentRep}
          className={styles.repImg}
        />
        <motion.div
          className={styles.nameAndLink}
          variants={mainConRepVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <h3 className={styles.repName}>{con.CurrentRep}</h3>
          <Link className={styles.conLink} to={"/" + slugifyName(con.Name)}>
            Read More
          </Link>
        </motion.div>
      </div>

      <ConSvg conId={con.Number} fill="white" stroke="red" strokeWidth="20" />
    </motion.div>
  )
}
