import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
}

const Accordian = ({ title, body, children }) => {
  const [isToggled, setToggled] = useState(false)
  return (
    <>
      <h2 role="button" onClick={() => setToggled(prevState => !isToggled)}>
        {title}
      </h2>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            variants={variants}
            style={{ overflow: "hidden" }}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Accordian
