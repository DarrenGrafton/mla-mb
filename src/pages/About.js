import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const data = useStaticQuery(ABOUT_INFO)

  return (
    <Layout pageTitle="About">
      <Seo title="About My Rep MB" />

      <section>
        <p>
          The MyRepMB website is built and maintained as a hobby project and is
          not affiliated with the Government of Manitoba. Thanks to those who
          are collecting and publishing the information linked to from this site
        </p>
      </section>
      <h2>Thanks and Attributions</h2>
      <section>
        <a href=" https://www.gov.mb.ca/legislature/">
          The Legislative Assembly of Manitoba
        </a>
        <p>
          The MyRepMB site links directly to the Legislative Assembly of
          Manitoba site for the current session's Bills and Hansard transcipts.
          The site also has useful information about how government works
          including how provincial laws are made and how to present to standing
          committees.
        </p>
      </section>

      <section>
        <a href="https://www.electionsmanitoba.ca/">
          Elections Manitoba website
        </a>
        <p>
          Elections Manitoba has useful information about electoral divisions
          and elections.
        </p>
      </section>

      <section>
        <a href="http://represent.opennorth.ca/">Open North</a>
        <p>
          MyRepMB uses the open north API to find a provincial electoral
          district based on your location. When you load the Map feature, if you
          share your location with the website, it will send your current
          location to the open north website, which will return the name of the
          electoral division that contains that location.
        </p>
      </section>

      <section>
        <h3>Images</h3>
        <p>
          Some of the background images on the MyRepMB website are sourced from
          www.unsplash.com
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
        <h3>Technology</h3>
        <p>
          The MyRepMB webiste is built using a modern website architecture
          referred to as the JAMstack
        </p>
        <ul>
          <li>
            This site is hosted on{" "}
            <a href="https://www.netlify.com/">Netlify</a>
          </li>

          <li>
            The code and data are stored on{" "}
            <a href="https://github.com/DarrenGrafton/my-rep-mb">GitHub</a>
          </li>
          <li>
            The site is built with <a href="https://reactjs.org/">React</a> and{" "}
            <a href="https://www.gatsbyjs.com/">Gatsby</a>
          </li>
        </ul>
      </section>

      <section>Contact us: myrepmb@gmail.ca</section>

      {/* <p>
        ACCURACY OF CONTENTS All attempts have been mande to ensure the accuracy
        of the content in this web site. However, in the event of a discrepancy
        between the data on this website and information in the hard copies, the
        latter shall prevail. To obtain hard copies of publications, records,
        and reports please contact us.
      </p>

      <p>
        EXTERNAL LINKS Our Web site has links to related sites of interest
        outside the electionsmanitoba.ca domain. The content and policies of all
        external sites are completely independent of Elections Manitoba. You
        should refer to that site's own privacy policy and legal disclaimers.
        Elections Manitoba cannot guarantee the currency and accuracy of
        information on external sites.
      </p>
      <p>
        {" "}
        PRIVACY This website does not automatically gather any specific personal
        information from you. Elections Manitoba does monitor web traffic to
        gather statistical information on site usage using Google Analytics.
      </p> */}
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
