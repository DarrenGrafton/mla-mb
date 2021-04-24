import React from "react"
import { mapbox, linklist } from "./FeatureNav.module.css"
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
          style={{ fontSize: "150%" }}
        >
          <h2>UNDER CONTRUCTION!</h2>
          <p>Find your MLA using the map or through the lists.</p>
        </motion.div>

        <motion.div
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
          <Link to="/BrowseMap/">
            Browse <span>Map</span>
          </Link>
        </motion.div>
        <motion.ul
          className={linklist}
          transition={{ duration: 1 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 100 }}
        >
          <li>
            <Link to="/ConstituencyList/">Constituency List</Link>
          </li>
          <li>
            <Link to="/MLAList/">MLA List</Link>
          </li>
          <li>
            <Link to="/PartyList/">Party List</Link>
          </li>
          <li>
            <Link to="/BillsList/">Bills List</Link>
          </li>
        </motion.ul>
      </div>
    </AnimatePresence>
  )
}
