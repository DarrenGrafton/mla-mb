import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FeatureNav } from "../components/frontpage/FeatureNav"

const IndexPage = () => {
  return (
    <Layout pageTitle="Manitoba MLAs">
      <Seo title="Manitoban MLA information" />

      <StaticImage
        width={1800}
        quality={50}
        src="../images/mahesh-gupta.jpg"
        //   src="../images/under-construction.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Manitoba Legislature"
        placeholder="tracedSVG"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: -1,
          opacity: 1,
        }}
      />
      <FeatureNav />
    </Layout>
  )
}

export default IndexPage
