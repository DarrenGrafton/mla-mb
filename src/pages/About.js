import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GatsbyLogo from "../images/Gatsby-Logo.svg"
import ReactLogo from "../images/react.png"

const About = () => {
  const data = useStaticQuery(ABOUT_INFO)

  return (
    <Layout pageTitle="About">
      <Seo title="About MLA MB" />
      <div className="about">
        <p>
          The Manitoban MLAs (mlamb.ca) website is built and maintained as a
          hobby project and is not affiliated with the Government of Manitoba.
        </p>

        <h2>Thanks and Attributions</h2>
        <section>
          <h3>
            <a href=" https://www.gov.mb.ca/legislature/">
              The Legislative Assembly of Manitoba
            </a>
          </h3>

          <p>
            The Manitoban MLAs (mlamb.ca) site links directly to the Legislative
            Assembly of Manitoba site for the current session's Bills and
            Hansard transcipts. The site also has useful information about how
            government works including how provincial laws are made and how to
            present to standing committees. Thanks to those who are collecting
            and publishing the information.
          </p>
        </section>

        <section>
          <h3>
            <a href="https://www.electionsmanitoba.ca/">Elections Manitoba</a>
          </h3>

          <p>
            Elections Manitoba has useful information about electoral divisions
            and elections.
          </p>
        </section>

        <section>
          <h3>
            <a href="http://represent.opennorth.ca/">Open North</a>
          </h3>
          <p>
            Manitoban MLAs (mlamb.ca) uses the open north API to find a
            provincial electoral district based on your location. If you share
            your location with the website when you load the Map feature, it
            will send your current location to the open north website, which
            will return the name of the electoral division that contains that
            location.
          </p>
        </section>

        <section>
          <h3>Images</h3>
          <p>
            Some of the background images on the Manitoban MLAs (mlamb.ca)
            website are sourced from www.unsplash.com
          </p>
          <ul>
            <li>
              Front Page Background Image by{" "}
              <a href="https://unsplash.com/@snapper542">Mahesh Gupta</a>
            </li>

            <li>
              Map Background Image by{" "}
              <a href="https://unsplash.com/@petemcbride">Pete McBride</a>
            </li>
          </ul>
        </section>

        <section>
          <h3>Contributing and Ideas</h3>
          <p>
            The intention for the site is to make it simple for any Manitoban to
            get information about their particular MLA.
          </p>
          <p>
            If you have suggestions to make finding information through this
            site easier, please let us know.
          </p>
          <p>
            If you know of other public information that would make a useful
            addition to the site, please let us know.
          </p>

          <a href="mailto:mlambcontact@gmail.ca">
            Contact us by email at mlambcontact@gmail.ca
          </a>
        </section>
        <section>
          <h3>Technology</h3>
          <p>
            The Manitoban MLAs (mlamb.ca) website is built using a modern
            website architecture referred to as the JAMstack
          </p>
          <ul>
            <li>
              This site is hosted on{" "}
              <a href="https://www.gatsbyjs.com/products/cloud/">
                Gatsby Cloud
              </a>
            </li>

            <li>
              The code and data are stored on{" "}
              <a href="https://github.com/DarrenGrafton/my-rep-mb">GitHub</a>
            </li>
            <li>
              The site is built with{" "}
              <a href="https://reactjs.org/">
                <img className="react" src={ReactLogo} />
              </a>{" "}
              and{" "}
              <a href="https://www.gatsbyjs.com/">
                <img className="gatsby" src={GatsbyLogo} />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  )
}

export default About

const ABOUT_INFO = graphql`
  query AboutInfo {
    allConsJson(sort: { fields: Name }) {
      edges {
        node {
          Number
          Name
          CurrentRep
          Party
          NeighbouringElectoralDivisions
        }
      }
    }
  }
`
