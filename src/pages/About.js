import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = () => {
  const data = useStaticQuery(ABOUT_INFO)

  return (
    <Layout pageTitle="Thanks and Attributions">
      <Seo title="About My Rep MB" />

      <p>
        This website is built and maintained as a hobby project. Thanks to those
        who are collecting and publishing the information linked to in this site
      </p>
      <p>Data source: https://www.gov.mb.ca/legislature/</p>

      <p>Data source: https://www.electionsmanitoba.ca/</p>

      <p>Data source: http://represent.opennorth.ca/</p>

      <p>Images source: unsplash</p>

      <p>Hosting: https://www.netlify.com/</p>

      <p>built with: react / gatsby</p>
      <a href="https://github.com/DarrenGrafton/my-rep-mb">Link to Github</a>

      <p>Contact us: myrepmb@gmail.ca</p>

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
