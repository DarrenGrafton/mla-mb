import React, { useState } from "react"

export const ConHansardLinks = ({
  sessions,
  hansardIndexes,
  rep,
  className,
  defaultChecked,
}) => {
  const [index, setIndex] = useState(0)
  //Split the sessions into an array of pages with a max of 3 sessions per page
  const sessionPages = sessions.edges.reduce(
    function (arr, item) {
      if (arr[arr.length - 1].length === 3) {
        arr.push([item])
      } else {
        arr[arr.length - 1].push(item)
      }
      return arr
    },
    [[]]
  )

  return (
    <div className={className}>
      <input type="checkbox" defaultChecked={defaultChecked} />

      <h3 className=" collapse-title font-serif text-primary text-xl mb-0 pr-7">
        Hansard{" "}
        <span className="text-primary text-base">
          - links to transcripts of {rep.Name} in the Legislative Assembly
        </span>
      </h3>
      <div className="collapse-content">
        <div className="flex flex-wrap justify-between max-w-xl">
          <button
            className="btn btn-primary pl-2"
            disabled={index <= 0}
            onClick={() => setIndex(index - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>{" "}
            Prev
          </button>
          <button
            className="btn btn-primary pr-2"
            disabled={index >= sessionPages.length - 1}
            onClick={() => setIndex(index + 1)}
          >
            Next
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>
        <ul>
          {sessionPages[index].map(edge => {
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
                                              {heading4.heading5.map(
                                                heading5 => {
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
                                                }
                                              )}
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
        <div className="mt-4 flex justify-around max-w-xl">
          <div className="btn-group mt-2">
            <button
              className="btn btn-md btn-primary"
              onClick={() => setIndex(0)}
              disabled={index === 0}
            >
              1
            </button>
            {sessionPages.length > 1 && (
              <button
                className="btn btn-md btn-primary"
                disabled={index === 1}
                onClick={() =>
                  setIndex(
                    index > 2
                      ? index >= sessionPages.length - 2
                        ? sessionPages.length - 5
                        : index - 2
                      : 1
                  )
                }
              >
                {index > 2
                  ? index >= sessionPages.length - 2
                    ? sessionPages.length - 4
                    : index - 1
                  : 2}
              </button>
            )}
            {sessionPages.length > 2 && (
              <button
                className="btn btn-md btn-primary"
                disabled={index === 2}
                onClick={() =>
                  setIndex(
                    index > 3
                      ? index >= sessionPages.length - 2
                        ? sessionPages.length - 4
                        : index - 1
                      : 2
                  )
                }
              >
                {index > 3
                  ? index >= sessionPages.length - 2
                    ? sessionPages.length - 3
                    : index
                  : 3}
              </button>
            )}
            {sessionPages.length > 3 && (
              <button
                className="btn btn-md btn-primary"
                disabled={index >= 3 && index <= sessionPages.length - 3}
                onClick={() =>
                  setIndex(
                    index > 3
                      ? index >= sessionPages.length - 2
                        ? sessionPages.length - 3
                        : index
                      : 3
                  )
                }
              >
                {index > 3
                  ? index >= sessionPages.length - 2
                    ? sessionPages.length - 2
                    : index + 1
                  : 4}
              </button>
            )}
            {sessionPages.length > 4 && (
              <button
                className="btn btn-md btn-primary"
                disabled={index === sessionPages.length - 2}
                onClick={() =>
                  setIndex(
                    index > 3
                      ? index >= sessionPages.length - 1
                        ? index - 1
                        : index == sessionPages.length - 2
                        ? sessionPages.length - 2
                        : 1 + index
                      : 4
                  )
                }
              >
                {index > 3
                  ? index >= sessionPages.length - 1
                    ? index
                    : index == sessionPages.length - 2
                    ? sessionPages.length - 1
                    : 2 + index
                  : 5}
              </button>
            )}
            {sessionPages.length > 5 && (
              <button
                className="btn btn-md btn-primary"
                onClick={() => setIndex(sessionPages.length - 1)}
                disabled={index === sessionPages.length - 1}
              >
                {sessionPages.length}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
