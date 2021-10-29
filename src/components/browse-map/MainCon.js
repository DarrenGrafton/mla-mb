import React from "react"

import { motion } from "framer-motion"
import { ConSvg } from "./ConSvg"
import * as styles from "./Map.module.css" //import { mainCon, conInfo, rep } from "./Map.module.css"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { slugifyName, classNames } from "../../helpers/Utils"

export const MainCon = ({
  con,
  mainConVariants,
  mainConH1Variants,
  mainConPVariants,
  mainConRepVariants,
}) => {
  return (
    <motion.div
      className={classNames("relative top-15vh left-0", styles.mainCon)} //Main Con class used to style the SVG
      variants={mainConVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="z-10 absolute top-5vh left-10vw md:left-20vw card ">
        <motion.h1
          className="font-serif text-primary text-xl md:text-4xl text-shadow"
          variants={mainConH1Variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {con.Name}
        </motion.h1>
        <div className="flex flex-row items-center space-x-2 ">
          <div className="avatar">
            <GatsbyImage
              image={con.repImage?.gatsbyImageData}
              alt={con.CurrentRep}
              className="mask mask-squircle w-12 h-18 md:w-20 md:h-30 lg:w-24 lg:h-36"
            />
          </div>
          <motion.div
            className="flex flex-col flex-wrap"
            variants={mainConRepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <h3 className="text-primary text-base md:text-xl text-shadow">
              {con.CurrentRep}
            </h3>
            <Link
              className="btn btn-outline btn-primary px-2 bg-white bg-opacity-70 text-xs h-8 min-h-0"
              to={"/" + slugifyName(con.Name)}
            >
              Read More
            </Link>
          </motion.div>
        </div>
      </div>

      <ConSvg conId={con.Number} strokeWidth="6" />
    </motion.div>
  )
}
