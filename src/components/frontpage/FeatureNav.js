import React from "react"
import * as styles from "./FeatureNav.module.css"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

export const FeatureNav = () => {
  return (
    <AnimatePresence>
      <div className="grid cols-3">
        <motion.div
          // transition={{ duration: 1 }}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <p>
            Find your MLA. The representative for your constuituency at the
            Manitoba Government.
          </p>
          <p>
            See Bill's they've sponsored, links to transcripts of thier work in
            the Legislative Assembly of Manitoba, and more!
          </p>
          <p>
            The MyRepMB website is built and maintained as a hobby project and
            is not affiliated with the Government of Manitoba
          </p>
        </motion.div>

        {/* <motion.div
          className={mapbox}
          transition={{ duration: 1 }}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          whileHover={{
            scale: 1.1,
            rotate: 2,
            transition: { duration: 0.1 },
          }}
        >
          <Link to="/Map/">
            Browse <span>Map</span>
          </Link>
        </motion.div> */}

        <div>
          <Link to="/Map/">Find Based on Location</Link>
        </div>
        <motion.ul
          className={styles.linklist}
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <li>
            <Link to="/Constituencies/">List of Constituencies</Link>
          </li>
          <li>
            <Link to="/MLAs/">Members of the Legislative Assembly</Link>
          </li>
          <li>
            <Link to="/Bills/">Current Session's Bills</Link>
          </li>
          <li>
            <Link to="/About/">About this website</Link>
          </li>
        </motion.ul>
      </div>
    </AnimatePresence>
  )
}
