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
  })

  const lastName = mainCon.CurrentRep.split(" ").slice(-1).join(" ")
  const fullName = mainCon.CurrentRep.replace(" ", "")

  mainCon.repImage = data.allSanityRepImage.nodes.find(
    node =>
      fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
      lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  )

  return mainCon
}
