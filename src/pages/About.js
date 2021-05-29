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
          The MyRepMB website is built and maintained as a hobby project. Thanks
          to those who are collecting and publishing the information linked to
          from this site
        </p>
      </section>
      <h2>Thanks and Attributions</h2>
      <section>
        <a href=" https://www.gov.mb.ca/legislature/">
          The Legislative Assembly of Manitoba
        </a>
        <p>
          This website has an abundance of information. The MyRepMB site links
          directly to this site for the current session's Bills and Hansard
          transcipts. The site also has useful information about how government
          works including how provincial laws are made and how to present to
          standing committees.
        </p>
      </section>

      <section>
        <a href="https://www.electionsmanitoba.ca/">
          Elections Manitoba website
        </a>
        <p>
          Thier website was very helpful to learn about electoral divisions with
          links to many useful resources.
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

      <section>Images source: unsplash</section>

      <section>
        Technology: This site is hosted on Netlify. https://www.netlify.com/.
        The code and data is stored on GitHub
        <a href="https://github.com/DarrenGrafton/my-rep-mb">Link to Github</a>
        The site is built with react / gatsby
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
