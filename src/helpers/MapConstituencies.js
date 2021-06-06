const utils = require("./Utils")

export const createConObj = (conState, data) => {
  //If Number comes from a cookie if might be string, do only == compare
  const mainCon = data.allConsJson.nodes.find(
    con => con.Number == conState.Number
  )

  if (!mainCon) return

  data.allConsJson.nodes.forEach(con => {
    if (mainCon.West === con.Number) mainCon.WestCon = con
    if (mainCon.NorthWest === con.Number) mainCon.NorthWestCon = con
    if (mainCon.North === con.Number) mainCon.NorthCon = con
    if (mainCon.NorthEast === con.Number) mainCon.NorthEastCon = con
    if (mainCon.East === con.Number) mainCon.EastCon = con
    if (mainCon.SouthEast === con.Number) mainCon.SouthEastCon = con
    if (mainCon.South === con.Number) mainCon.SouthCon = con
    if (mainCon.SouthWest === con.Number) mainCon.SouthWestCon = con
    if (mainCon.InnerWest === con.Number) mainCon.InnerWestCon = con
    if (mainCon.InnerEast === con.Number) mainCon.InnerEastCon = con
  })

  const regex = new RegExp(utils.slugifyName(mainCon.CurrentRep), "g")

  mainCon.repImage = data.allImageSharp.nodes.find(node =>
    node.original.src.match(regex)
  )

  return mainCon
}
