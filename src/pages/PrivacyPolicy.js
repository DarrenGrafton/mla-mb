import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function PrivacyPolicy() {
  return (
    <Layout pageTitle="Privacy Policy" hClass="bg-gray-100">
      <Seo title="Privacy Policy" />
      <div className="p-2 lg:p-6 bg-gray-100" style={{ minHeight: "85vh" }}>
        <h2>Privacy Policy for MLA MB</h2>
        <p className="lg:w-8/12 mb-2">
          Privacy Policy Last updated: Oct 29, 2021
        </p>

        <p className="lg:w-8/12 mb-2">
          Manitoban MLAs (mlamb.ca) does not track personal data. We use Google
          Analytics to track how visitors interact with the site.
        </p>

        <p className="lg:w-8/12 mb-2">
          We use cookies on the site to track preferences and assist in site
          navigation
        </p>

        <p className="lg:w-8/12 mb-2">
          We may update Our Privacy Policy from time to time. We will notify You
          of any changes by posting the new Privacy Policy on this page. Changes
          to this Privacy Policy are effective when they are posted on this
          page.
        </p>

        <h3>Contact Us</h3>

        <p className="lg:w-8/12 mb-2">
          If you have any questions about this Privacy Policy, You can contact
          us:
        </p>
        <p>
          By email:{" "}
          <a href="mailto:mlambcontact@gmail.com">mlambcontact@gmail.com</a>
        </p>
      </div>
    </Layout>
  )
}
