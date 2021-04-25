import React from "react"
import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Map } from "../components/browse-map/Map"

import { createConObj } from "../helpers/MapConstituencies"
import { parseQuery } from "../helpers/Utils"

const REPRESENT_URL =
  "https://represent.opennorth.ca/boundaries/manitoba-electoral-districts/?contains=" //49.802,-97.114

function getPosition(options) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  )
}

const BrowseMap = ({ location }) => {
  const data = useStaticQuery(BROWSE_MAP)

  //coords stores the users coordinates if they share
  const [cookies, setCookie, removeCookie] = useCookies([])
  const [conState, setConState] = useState({
    Number: null,
    direction: null,
  })

  useEffect(() => {
    async function loadConstituency() {
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
        try {
          //ask phone to get current position
          const position = await getPosition()
          //use the opennorth api to get the "boundry" (constituency) that contains our current position
          //http://represent.opennorth.ca/boundaries/manitoba-electoral-districts/?contains=49.802,-97.114
          const res = await fetch(
            REPRESENT_URL +
              position.coords.latitude +
              "," +
              position.coords.longitude
          )
          //get an object from the opennorth response
          const representBoundry = await res.json()
          if (representBoundry.objects.length > 0) {
            //if there are boundries returned that contain our position, get the name, then lookup the number based on our graphql data
            const InitialConName = representBoundry.objects[0].name
            const initialCon = data.allCons.nodes.find(
              con => con.Name == InitialConName
            )
            //load up the number and leave this init function
            setConState({ Number: initialCon.Number, direction: null })
            return
          }
        } catch (err) {
          console.error(err.message)
        }
      }

      //else it will load a random number
      console.log("random")
      setConState({
        Number: Math.floor(101 + Math.random() * 56),
        direction: null,
      })
    }
    loadConstituency()
  }, [])

  console.log(conState.Number)
  const mainCon = createConObj(conState, data)

  //if we loaded a con save it as the last con in the cooookie
  if (mainCon) setCookie("last-constituency", mainCon.Number, { path: "/" })

  return (
    <Layout>
      {/*Tell the helmet to tell body NO Overflow on the MAP SVGs*/}
      <SEO title="Browse Map" noOverflow="true" />

      <StaticImage
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
