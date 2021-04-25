import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Map } from "../components/browse-map/Map"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { parseQuery } from "../helpers/Utils"
import { graphql, useStaticQuery } from "gatsby"
import { createConObj } from "../helpers/MapConstituencies"

const BrowseMap = ({ location }) => {
  const data = useStaticQuery(BROWSE_MAP)

  //coords stores the users coordinates if they share
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [conState, setConState] = useState({
    Number: null,
    direction: null,
  })

  useEffect(getLocation, [])

  function getLocation() {
    //Parse ForceLoc or Number=NN from query string
    const query = parseQuery(location.search)

    const loadConNumber = query["Number"] //?Number=104
    const forceLoadGeolocation = query["ForceLoc"] //?ForceLoc=true

    //If query string number provided
    if (loadConNumber) {
      console.log(loadConNumber + "conNum")
      setConState({ Number: loadConNumber, direction: null })
      return
    }

    //If not force, check if there is a last map saved in the browser
    const cookieNum = cookies["last-constituency"]
    if (cookieNum && !forceLoadGeolocation) {
      console.log(cookieNum + "cookie")
      setConState({ Number: cookieNum, direction: null })
      return
    }

    //else if will ask for the geolocation to load one
    if (window.navigator.geolocation) {
      //  window.navigator.geolocation.getCurrentPosition(setCoords)
    }

    //else it will load a random number
    console.log("random")
    setConState({
      Number: Math.floor(101 + Math.random() * 56),
      direction: null,
    })
  }

  console.log(conState.Number)
  const mainCon = createConObj(conState, data)

  //if we loaded a con save it as the last con
  if (mainCon) setCookie("last-constituency", mainCon.Number, { path: "/" })

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
      <Map
        mainCon={mainCon}
        data={data}
        conState={conState}
        setConState={setConState}
      />
    </Layout>
  )
}

export default BrowseMap

const BROWSE_MAP = graphql`
  query BrowseMap {
    allCons {
      nodes {
        AreaInSquareKm
        CurrenRep
        Name
        Number
        Party
        TotalPopulation
        West
        NorthWest
        North
        NorthEast
        East
        SouthEast
        South
        SouthWest
      }
    }
    allReps {
      nodes {
        Constituency
        Name
        Party
      }
    }
    allSanityRepImage {
      nodes {
        title
        image {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: NONE)
          }
        }
      }
    }
  }
`
