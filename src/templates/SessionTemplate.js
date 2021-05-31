import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function SessionTemplate({ data }) {
  const {
    sessionsJson: session,
    // paragraphsJson: paragraphGroup,
  } = data

  //header with  con name, back link,menu items
  return (
    <Layout
      pageTitle={`Session ${session.session} - Volume ${session.volume} `}
    >
      <Seo title={`Session ${session.session} - Volume ${session.volume} `} />

      <h2>{session.committee}</h2>
      <a
        href={`https://www.gov.mb.ca/legislature/hansard/${session.legislature}_${session.session}/${session.link}`}
      >
        Official Hansard Transcript
      </a>
      <p>{session.date}</p>
      <p>{session.speakers}</p>
    </Layout>
  )
}

export const pageQuery = graphql`
  query SessionDetail($key: String!) {
    sessionsJson(key: { eq: $key }) {
      committee
      date(formatString: "MMM DD, yyyy")
      key
      legislature
      link
      session
      speakers
      type
      volume
    }
  }
`
