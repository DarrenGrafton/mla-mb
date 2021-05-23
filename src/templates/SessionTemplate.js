import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function SessionTemplate({ data }) {
  const {
    sessionsJson: session,
    paragraphsJson: paragraphGroup,

    // allSanityRepImage,
  } = data

  // const lastName = cons.CurrentRep.split(" ").slice(-1).join(" ")
  // const fullName = cons.CurrentRep.replace(" ", "")

  // const repImage = allSanityRepImage.nodes.find(
  //   node =>
  //     fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
  //     lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  // )

  //header with  con name, back link,menu items
  return (
    <Layout
      pageTitle={`Session ${session.session} - Volume ${session.volume} `}
    >
      <Seo title={`Session ${session.session} - Volume ${session.volume} `} />

      <h2>{session.committee}</h2>
      <a
        href={`https://www.gov.mb.ca/legislature/hansard/${session.legislature}_${session.session}/${session.link}`}
        target="_blank"
      >
        Official Hansard Transcript
      </a>
      <p>{session.date}</p>
      <p>{session.speakers}</p>

      {/* <ol>
        {paragraphGroup.paragraphs.map(paragraph => (
          <li>
            {paragraph.html && (
              <div dangerouslySetInnerHTML={{ __html: paragraph.html }} />
            )}
          </li>
        ))}
      </ol> */}
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
    paragraphsJson(sessionKey: { eq: $key }) {
      sessionKey
      paragraphs {
        index
        html
        speaker
      }
    }
  }
`
