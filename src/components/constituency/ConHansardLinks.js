import React from "react"

export const ConHansardLinks = ({ styles, sessions, hansardIndexes, rep }) => {
  return (
    <div className={styles.hansard}>
      <h3>Hansard</h3>

      <ul>
        {sessions.edges.map(edge => {
          //DEPRECATED
          // const referencedBills = hansardBills.edges.reduce(function (
          //   arr,
          //   item
          // ) {
          //   if (
          //     item.node.sessionKey === edge.node.key &&
          //     !arr.includes(item.node.billNumber)
          //   ) {
          //     arr.push(item.node.billNumber)
          //   }
          //   return arr
          // },
          // [])
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
                let heading2Item = arr.find(i => i.heading2 === index.heading2)
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

          //console.log(referencedIndexes)
          //H2
          //H3
          //Do the link on the heading 4 text - if no text, just named link or rep name
          //list the heading 5 text as details after the link
          return (
            <li key={`session${edge.node.key}`}>
              {edge.node.date} - Volume: {edge.node.volume} -{" "}
              {/* {edge.node.committee}
                {edge.node.legislature} {edge.node.session} Session -{" "}
                {edge.node.volume}- - */}
              {referencedIndexes && (
                <ul>
                  {referencedIndexes.map((heading2, i) => {
                    return (
                      <li
                        key={`heading2-li${edge.node.key}${heading2.heading2}${i}`}
                      >
                        <span>{heading2.heading2}</span>
                        {heading2.heading3.map(heading3 => {
                          return (
                            <React.Fragment
                              key={`heading3-${edge.node.key}${heading2.heading2}${heading3.heading3}`}
                            >
                              <span> - {heading3.heading3}</span>

                              {heading3.heading4.map(heading4 => {
                                return (
                                  <React.Fragment
                                    key={`heading4-${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}`}
                                  >
                                    {/* <span>- {heading4.heading4}</span> */}

                                    {heading4.heading5.map(heading5 => {
                                      const url = heading5.indexLink
                                        ? `https://www.gov.mb.ca/legislature/hansard/${edge.node.legislature}_${edge.node.session}/${edge.node.link}${heading5.indexLink}`
                                        : `https://www.gov.mb.ca/legislature/hansard/${edge.node.legislature}_${edge.node.session}/${edge.node.link}`
                                      return (
                                        <React.Fragment
                                          key={`heading5-span${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}${heading5.indexLink}`}
                                        >
                                          {/* <span>
                                            - {heading5.heading5} -
                                            {heading5.indexLink}
                                          </span> */}
                                          <a
                                            key={`heading5-a${edge.node.key}${heading2.heading2}${heading3.heading3}${heading4.heading4}${heading5.indexLink}`}
                                            href={url}
                                            //         target="_blank"
                                          >
                                            - {heading4.heading4}
                                          </a>
                                        </React.Fragment>
                                      )
                                    })}
                                  </React.Fragment>
                                )
                              })}
                            </React.Fragment>
                          )
                        })}
                      </li>
                    )
                  })}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
