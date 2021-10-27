import React, { useState } from "react"

export const ConHansardLinks = ({ styles, sessions, hansardIndexes, rep }) => {
  const [visibleSessions, setVisibleSessions] = useState(
    //sessions.edges
    sessions.edges.slice(0, 5)
  )
  return (
    <div>
      <h3 className="font-serif text-primary text-3xl">Hansard</h3>
      <p className="text-primary mb-2">
        Links to transcripts of the debates of the Legislative Assembly of
        Manitoba and its committees.
      </p>
      <ul>
        {visibleSessions.map(edge => {
          //If this is a committee meeting, just link the entire meeting
          if (edge.node.committee && edge.node.committee !== "house") {
            const url = `https://www.gov.mb.ca/legislature/hansard/${edge.node.legislature}_${edge.node.session}/${edge.node.link}`

            return (
              <div>
                <span className="text-primary">
                  <span className="font-semibold">{edge.node.date} </span> -
                  Volume {edge.node.volume}
                </span>
                <div>
                  <span className="text-primary ml-2">
                    THE STANDING COMMITTEE ON {edge.node.committee}
                  </span>
                  <div>
                    <span className="text-primary ml-4 border-b-2 border-secondary">
                      <a href={url}>Link</a>
                    </span>
                  </div>
                </div>
              </div>
            )
          } else {
            //Else if this is a house meeting, organize the headings and link to the specific sections
            //Split the hansard Indexes into an array of arrays of arrays representing the link structure
            const referencedIndexes = hansardIndexes.nodes.reduce(function (
              arr,
              item
            ) {
              if (
                item.sessionKey === edge.node.key
                // !arr.includes(item)
              ) {
                const repIndexes = item.indexes.filter(
                  index => index.speaker === rep.Name
                )
                for (const index of repIndexes) {
                  //Is this heading two in the list yet?
                  let heading2Item = arr.find(
                    i => i.heading2 === index.heading2
                  )
                  if (!heading2Item) {
                    heading2Item = {
                      heading2: index.heading2,
                      heading3: [],
                    }
                    arr.push(heading2Item)
                  }

                  let heading3Item = heading2Item.heading3.find(
                    i => i.heading3 === index.heading3
                  )
                  if (!heading3Item) {
                    heading3Item = {
                      heading3: index.heading3,
                      heading4: [],
                    }
                    heading2Item.heading3.push(heading3Item)
                  }

                  let heading4Item = heading3Item.heading4.find(
                    i => i.heading4 === index.heading4
                  )
                  if (!heading4Item) {
                    heading4Item = {
                      heading4: index.heading4,
                      heading5: [],
                    }
                    heading3Item.heading4.push(heading4Item)
                  }

                  let heading5Item = heading4Item.heading5.find(
                    i => i.indexLink === index.indexLink
                  )
                  if (!heading5Item) {
                    heading5Item = {
                      heading5: index.heading5,
                      indexLink: index.indexLink,
                    }
                    heading4Item.heading5.push(heading5Item)
                  }
                }
              }
              return arr
            },
            [])

            //Each LI is a volume/session
            return (
              <li key={`session${edge.node.key}`}>
                <span className="text-primary">
                  <span className="font-semibold">{edge.node.date}</span> -
                  Volume {edge.node.volume}
                </span>

                {referencedIndexes && (
                  <ul>
                    {referencedIndexes.map((heading2, i) => {
                      //H2
                      return (
                        <li
                          key={`heading2-li${edge.node.key}${heading2.heading2}${i}`}
                        >
                          <span className="text-primary ml-2">
                            {heading2.heading2}
                          </span>
                          <ul>
                            {heading2.heading3.map(heading3 => {
                              //H3
                              return (
                                <li
                                  key={`heading3-${edge.node.key}${heading2.heading2}${heading3.heading3}`}
                                >
                                  <span className="text-primary ml-4">
                                    {heading3.heading3}
                                  </span>
                                  <ul>
                                    {heading3.heading4.map(heading4 => {
                                      //Do the link on the heading 4 text - if no text, just named link or rep name
                                      return (
                                        <li
                                          key={`heading4-${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}`}
                                        >
                                          {/* <span>- {heading4.heading4}</span> */}
                                          <ul>
                                            {heading4.heading5.map(heading5 => {
                                              const url = heading5.indexLink
                                                ? `https://www.gov.mb.ca/legislature/hansard/${edge.node.legislature}_${edge.node.session}/${edge.node.link}${heading5.indexLink}`
                                                : `https://www.gov.mb.ca/legislature/hansard/${edge.node.legislature}_${edge.node.session}/${edge.node.link}`
                                              //list the heading 5 text as details after the link
                                              return (
                                                <li
                                                  key={`heading5-span${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}${heading5.indexLink}`}
                                                >
                                                  <a
                                                    className="text-primary ml-6 border-b-2 border-secondary"
                                                    key={`heading5-a${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}${heading5.indexLink}`}
                                                    href={url}
                                                  >
                                                    {heading4.heading4
                                                      ? ` ${heading4.heading4}`
                                                      : "Link"}
                                                    {heading5.heading5 &&
                                                      ` (${heading5.heading5})`}
                                                  </a>
                                                </li>
                                              )
                                            })}
                                          </ul>
                                        </li>
                                      )
                                    })}
                                  </ul>
                                </li>
                              )
                            })}
                          </ul>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            )
          }
        })}
      </ul>
      <div class="btn-group mt-2">
        <button class="btn btn-md btn-primary">1</button>
        <button class="btn btn-md btn-primary">2</button>
        <button class="btn btn-md btn-primary">3</button>
        <button class="btn btn-md btn-disabled">...</button>
        <button class="btn btn-md btn-primary">99</button>
        <button class="btn btn-md btn-primary">100</button>
      </div>
    </div>
  )
}
