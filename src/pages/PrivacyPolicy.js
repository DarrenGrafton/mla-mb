import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function PrivacyPolicy() {
  return (
    <Layout pageTitle="Privacy Policy">
      <Seo title="Privacy Policy" />
      <div>
        <h2>Privacy Policy for My Rep MB</h2>
        <p>Privacy Policy Last updated: May 31, 2021</p>

        <p>
          My Reb MB does not track data personal or otherwise of site visitors
        </p>

        <p>
          We use cookies on the site to track preferences and assist in site
          navigation
        </p>

        <p>
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page. Changes
          to this Privacy Policy are effective when they are posted on this
          page.
        </p>

        <h3>Contact Us</h3>

        <p>
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <p>
          By email: <a href="mailto:myrepmb@gmail.com">myrepmb@gmail.com</a>
        </p>
      </div>
    </Layout>
  )
}
