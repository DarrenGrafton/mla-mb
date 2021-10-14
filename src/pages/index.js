import React, { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FeatureNav } from "../components/frontpage/FeatureNav"
import { FeatureNavWind } from "../components/frontpage/FeatureNavWind"
import { useCookies } from "react-cookie"
import { graphql } from 'gatsby'

const IndexPage = ({data}) => {
  const [, , removeCookie] = useCookies([])

  useEffect(() => {
    //clear the last constituency cookie, so that from the main page we always search by location
    removeCookie("last-constituency", { path: "/" })
  }, [removeCookie])
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.pageTitle}>
      <Seo title={data.markdownRemark.frontmatter.seoTitle}/>
  
      <StaticImage
        width={1800}
        quality={50}
        src="../images/mahesh-gupta.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Manitoba Legislature"
        placeholder="tracedSVG"
        // class="object-cover w-full h-full"
        // imgClassName="object-cover w-full h-full"
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
      <FeatureNavWind />
  
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: {regex: "/src/pages/index/"}) {
      frontmatter {
        pageTitle
        seoTitle
      }
    }
  }`
