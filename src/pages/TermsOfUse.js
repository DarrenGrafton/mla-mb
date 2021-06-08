import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

export default function TermsOfUse() {
  return (
    <Layout pageTitle="Terms of Use">
      <Seo title="Terms of Use" />
      <div>
        <h2>Terms of Use MLA MB</h2>
        <p>Last updated: May 31, 2021</p>

        <p>
          Use of this site constitutes acceptance of our Terms of Use and
          <Link to="/PrivacyPolicy/"> Privacy Policy</Link>.
        </p>

        <p>
          The Site and its original content may not be reproduced, distributed,
          transmitted, cached or otherwise used, except with prior written
          permission of mlamb.ca
        </p>

        <p>
          The Materials are provided "as is". mlamb makes no warranties,
          expressed or implied, and hereby disclaims and negates all other
          warranties, including without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property or other violation of
          rights. Further, mlamb does not warrant or make any representations
          concerning the accuracy, likely results, or reliability of the use of
          the Materials or otherwise relating to such Materials or on any web
          sites linked to this web site.
        </p>

        <p>
          In no event shall mlamb be liable for any damages (including, without
          limitation, damages for loss of data or profit, or due to business
          interruption,) arising out of the use or inability to use the
          Materials, even if mlamb has been notified in writing of the
          possibility of such damage. Because some jurisdictions do not allow
          limitations on implied warranties, or limitations of liability for
          consequential or incidental damages, these limitations may not apply
          to you.
        </p>

        <p>
          These terms and conditions are governed by the laws of the Canada and
          the laws of the province of Manitoba.
        </p>

        <h3>Contact Us</h3>

        <p>
          If you have any questions about the Terms of Use, You can contact us:
        </p>
        <p>
          By email:{" "}
          <a href="mailto:mlambcontact@gmail.com">mlambcontact@gmail.com</a>
        </p>
      </div>
    </Layout>
  )
}
