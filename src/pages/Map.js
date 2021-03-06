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
import { motion } from "framer-motion"
import * as styles from "../components/browse-map/Map.module.css"
import { Link } from "gatsby"
import { RiArrowGoBackFill } from "react-icons/ri"
import { AiOutlineReload } from "react-icons/ai"

const REPRESENT_URL =
  "https://represent.opennorth.ca/boundaries/manitoba-electoral-districts-2018/?contains=" //49.802,-97.114

function getPosition(options) {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  )
}

//Not all browsers respect the timeout option, so we add our
//own timeout to a promise array and race against the geolocation call
function getUserPosition() {
  const promiseArray = []

  //Safari was not respecting the timout for navigator.geolocation, so we use our own timeout
  promiseArray.push(
    new Promise((resolve, reject) => {
      setTimeout(() => reject, 2500)
    })
  )

  const getCurrentPositionPromise = new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 2000,
        maximumAge: 2000,
        //enableHighAccuracy: true, Do not use high accuracy
      })
    } else {
      reject(new Error("Browser does not support geolocation!"))
    }
  })

  promiseArray.push(getCurrentPositionPromise)

  return Promise.race(promiseArray)
}

const BrowseMap = ({ location }) => {
  const data = useStaticQuery(BROWSE_MAP)

  const [cookies, setCookie] = useCookies([])
  const [conState, setConState] = useState({
    Number: null,
    direction: null,
    message: null,
  })

  useEffect(() => {
    async function loadConstituency() {
      //This function checks query params first to maintain the ability to link to a specific map number,
      //but the site does not pass the query params anymore.  The constituency number is stored in cookies.
      //If the query params are not present, the constituency number is retrieved from cookies.

      //Parse ForceLoc or Number=NN from query string
      const query = parseQuery(location.search)

      const loadConNumber = query["Number"] //?Number=104
      const forceLoadGeolocation = query["ForceLoc"] //?ForceLoc=true

      //If query string number provided
      if (loadConNumber) {
        setConState({ Number: loadConNumber, direction: null })
        return
      }

      //If not force, check if there is a last con Number saved in the browser
      const cookieNum = cookies["last-constituency"]
      if (cookieNum && !forceLoadGeolocation) {
        setConState({ Number: cookieNum, direction: null })
        return
      }

      //else if will ask for the geolocation to load one
      //This will block until the user has given permission to use their location
      if (window.navigator.geolocation) {
        try {
          //ask phone/browser to get current position
          //const position = await getPosition()
          const position = await getUserPosition()

          //use the opennorth api to get the "boundry" (constituency) that contains our current position
          //https://represent.opennorth.ca/boundaries/manitoba-electoral-districts-2018/?contains=49.802,-97.114
          if (position.coords.latitude && position.coords.longitude) {
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
              const initialCon = data.allConsJson.nodes.find(
                con => con.Name == InitialConName
              )
              //load up the number and leave this init function
              setConState({ Number: initialCon.Number, direction: null })
              return
            }
          }
        } catch (err) {
          console.error(err?.message)
        }
      }

      //else it will load a random number
      setConState({
        Number: Math.floor(101 + Math.random() * 56),
        direction: null,
        message: "Sorry, we could not find your location",
      })
    }
    loadConstituency()
  }, [])

  const mainCon = createConObj(conState, data)

  //if we loaded a con save it as the last con in the cooookie
  if (mainCon) setCookie("last-constituency", mainCon.Number, { path: "/" })

  return (
    <Layout hide={true}>
      {/*Tell the helmet to tell body NO Overflow on the MAP SVGs*/}
      <SEO title="Map of Provincial Consituencies" noOverflow="true" />

      <StaticImage
        width={1800}
        quality={80}
        src="../images/pete-mcbride.jpg"
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="Prairie Field"
        placeholder="tracedSVG"
        className="w-full h-full bg-cover bg-no-repeat bg-right inset-0"
        style={{ position: "absolute", zIndex: -1 }}
      />
      <Map
        mainCon={mainCon}
        data={data}
        conState={conState}
        setConState={setConState}
      />
      <Link
        to="/"
        className="absolute top-20 lg:top-16 left-3/4 lg:left-1/4 text-xl lg:text-3xl z-10 text-primary border-b-2 border-accent"
      >
        <RiArrowGoBackFill />
        Home
      </Link>

      {!mainCon && (
        <motion.button
          className={styles.reload}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 4, duration: 0.4 } }}
          onClick={() =>
            setConState({
              Number: 101,
              direction: null,
            })
          }
        >
          <AiOutlineReload />
          Reload
        </motion.button>
      )}
    </Layout>
  )
}

export default BrowseMap

const BROWSE_MAP = graphql`
  query BrowseMap {
    allConsJson {
      nodes {
        AreaInSquareKm
        CurrentRep
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
        InnerWest
        InnerEast
      }
    }
    allRepsJson {
      nodes {
        Constituency
        Name
        Party
      }
    }
    allImageSharp {
      nodes {
        gatsbyImageData(
          placeholder: NONE
          width: 500
          formats: [AUTO, WEBP, AVIF]
        )
        original {
          src
        }
      }
    }
  }
`
