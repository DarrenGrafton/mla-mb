import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FeatureNav } from "../components/frontpage/FeatureNav"

const IndexPage = () => {
  // const data = useStaticQuery(LANDING_PAGE)
  // const image = getImage(
  //   data.allSanityBackgroundImage.nodes[0].image.asset.fluid
  // )
  // console.log(data.allSanityBackgroundImage.nodes[0].image.asset.fluid)
  // console.log(image)

  return (
    <Layout overflow="hidden">
      <SEO title="Home" />

      <StaticImage
        width={1800}
        quality={50}
        //  src="../images/mahesh-gupta.jpg"
        src="../images/under-construction.jpg"
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

const LANDING_PAGE = graphql`
  query LandingPage {
    allSanityBackgroundImage(
      filter: { title: { eq: "Manitoba Legislature" } }
    ) {
      nodes {
        image {
          caption
          asset {
            title
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
