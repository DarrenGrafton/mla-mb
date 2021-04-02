import React from "react"
import { StaticImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Map } from "../components/browse-map/Map"
import { useEffect, useState } from "react"

const BrowseMap = () => {
  //coords stores the users coordinates if they share
  const [coords, setCoords] = useState({ latitude: null, longitude: null })

  useEffect(getLocation, [])
  function getLocation() {
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(setCoords)
    }
  }
  return (
    <Layout>
      {/*Tell the helmet to tell body NO Overflow on the MAP SVGs*/}
      <SEO title="Browse Map" noOverflow="true" />

      <StaticImage
        // src="../images/mahesh-gupta.jpg"
        width={1800}
        quality={15}
        //fluid={data.allSanityBackgroundImage.nodes[0].image.asset.fluid}
        src="../images/pete-mcbride.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Prairie Field"
        placeholder="tracedSVG"
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: -2,
          opacity: 1,
        }}
      />
      <Map coords={coords} />
    </Layout>
  )
}

export default BrowseMap
