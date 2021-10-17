import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useCookies } from "react-cookie"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

const variants = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
}

const IndexPage = ({ data }) => {
  const [, , removeCookie] = useCookies([])

  useEffect(() => {
    //clear the last constituency cookie, so that from the main page we always search by location
    removeCookie("last-constituency", { path: "/" })
  }, [removeCookie])
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.pageTitle}>
      <Seo title={data.markdownRemark.frontmatter.seoTitle} />

      <StaticImage
        width={1800}
        quality={50}
        src="../images/mahesh-gupta.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Manitoba Legislature"
        placeholder="tracedSVG"
        className="w-full h-full bg-cover bg-no-repeat bg-right fixed inset-0"
        style={{
          zIndex: -1,
        }}
      />

      <div class="hero min-h-screen bg-transparent">
        <div class="text-center hero-content">
          <div class="max-w-md">
            <p>Find your representative at the Government of Manitoba.</p>
            <p>
              See Bill's they've sponsored, links to transcripts of thier work
              in the Legislative Assembly of Manitoba, and more!
            </p>
            <button class="btn btn-primary">Get Started</button>
            <Link to="/Map/" className="btn btn-primary">
              Find Based on Location
            </Link>

            <Link to="/MLAs/" className="btn btn-primary">
              Members of the Legislative Assembly
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <div class="hidden">
          <motion.div
            transition={{ duration: 0.9 }}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <p>Find your representative at the Government of Manitoba.</p>
            <p>
              See Bill's they've sponsored, links to transcripts of thier work
              in the Legislative Assembly of Manitoba, and more!
            </p>
          </motion.div>

          <motion.ul
            transition={{ duration: 0.9 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, y: 100 }}
          >
            <li>
              <Link to="/Map/">Find Based on Location</Link>
            </li>
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
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/src/pages/index/" }) {
      frontmatter {
        pageTitle
        seoTitle
      }
    }
  }
`
