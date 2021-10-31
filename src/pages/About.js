import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GatsbyLogo from "../images/Gatsby-Logo.svg"
import ReactLogo from "../images/react.png"

const About = () => {
  //const data = useStaticQuery(ABOUT_INFO)

  return (
    <Layout pageTitle="About" hClass="bg-gray-100">
      <Seo title="About MLA MB" />
      <div className="p-2 lg:p-6 bg-gray-100">
        <p className="lg:w-1/2 mb-4">
          The Manitoban MLAs (mlamb.ca) website is built and maintained as a
          hobby project and is not affiliated with the Government of Manitoba.
        </p>

        <h2 className="mb-4">Thanks and Attributions</h2>
        <section>
          <h3 className="text-xl mb-2">
            <a href=" https://www.gov.mb.ca/legislature/">
              The Legislative Assembly of Manitoba
            </a>
          </h3>

          <p className="lg:w-8/12 mb-2">
            The Manitoban MLAs (mlamb.ca) site links directly to the Legislative
            Assembly of Manitoba site for the current session's Bills and
            Hansard transcipts. Thanks to those who are collecting and
            publishing the information.
          </p>
        </section>

        <section>
          <h3>
            <a
              className="text-xl mb-2"
              href="https://www.electionsmanitoba.ca/"
            >
              Elections Manitoba
            </a>
          </h3>

          <p className="lg:w-8/12 mb-2">
            Elections Manitoba has useful information about electoral divisions
            and elections.
          </p>
        </section>

        <section>
          <h3>
            <a className="text-xl mb-2" href="http://represent.opennorth.ca/">
              Open North
            </a>
          </h3>
          <p className="lg:w-8/12 mb-2">
            Manitoban MLAs (mlamb.ca) uses the open north API to find a
            provincial electoral district based on your location. If you share
            your location with the website when you load the Map feature, it
            will send your current location to the open north website, which
            will return the name of the electoral division that contains that
            location.
          </p>
        </section>

        <section>
          <h3 className="text-xl mb-2">Images</h3>
          <p className="lg:w-8/12 mb-2">
            Some of the background images on the Manitoban MLAs (mlamb.ca)
            website are sourced from www.unsplash.com
          </p>
          <ul>
            <li className="text-primary">
              Front Page Background Image by{" "}
              <a href="https://unsplash.com/@snapper542">Mahesh Gupta</a>
            </li>

            <li className="text-primary">
              Map Background Image by{" "}
              <a href="https://unsplash.com/@petemcbride">Pete McBride</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="my-4">Contributing and Ideas</h3>
          <p className="lg:w-8/12 mb-2">
            The intention for the site is to make it simple for any Manitoban to
            get information about their particular MLA.
          </p>
          <p className="lg:w-8/12 mb-2">
            If you have suggestions to make finding information through this
            site easier, please let us know.
          </p>
          <p className="lg:w-8/12 mb-2">
            We would love to include more information on the site but it must
            meet the following criteria:
          </p>
          <ul className="list-disc list-inside">
            <li className="text-primary">
              Relevant to the Member's work in the Legislature or information
              about the constituency
            </li>
            <li className="text-primary">
              Reliable Source - Information publicly available or obtained
              through a transparent process
            </li>
            <li className="text-primary">
              Appropriate to be on the same site as links to the Hansard
              transcripts, no "undignified associations"
            </li>
          </ul>

          <a className="my-2" href="mailto:mlambcontact@gmail.ca">
            Contact us by email at mlambcontact@gmail.ca
          </a>
        </section>
        <section>
          <h3 className="my-4">Technology</h3>
          <p className="lg:w-8/12 mb-2">
            The Manitoban MLAs (mlamb.ca) website is built using a modern
            website architecture referred to as the JAMstack
          </p>
          <ul>
            <li className="text-primary">
              This site is hosted on{" "}
              <a href="https://www.gatsbyjs.com/products/cloud/">
                Gatsby Cloud
              </a>
            </li>

            <li className="text-primary">
              The code and data are stored on{" "}
              <a href="https://github.com/DarrenGrafton/my-rep-mb">GitHub</a>
            </li>
            <li className="text-primary">
              The site is built with{" "}
              <a href="https://reactjs.org/">
                <img
                  className="h-6 inline border-blue-500"
                  src={ReactLogo}
                  alt="react Logo"
                />
              </a>{" "}
              and{" "}
              <a href="https://www.gatsbyjs.com/">
                <img
                  className="h-6 inline border-purple-800 "
                  src={GatsbyLogo}
                  alt="gatsby Logo"
                />
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
