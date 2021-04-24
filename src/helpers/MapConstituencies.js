export const createConObj = (conState, data) => {
  const mainCon = data.allCons.nodes.find(con => con.Number === conState.Number)

  data.allCons.nodes.map(con => {
    if (mainCon.West === con.Number) mainCon.WestCon = con
    if (mainCon.NorthWest === con.Number) mainCon.NorthWestCon = con
    if (mainCon.North === con.Number) mainCon.NorthCon = con
    if (mainCon.NorthEast === con.Number) mainCon.NorthEastCon = con
    if (mainCon.East === con.Number) mainCon.EastCon = con
    if (mainCon.SouthEast === con.Number) mainCon.SouthEastCon = con
    if (mainCon.South === con.Number) mainCon.SouthCon = con
    if (mainCon.SouthWest === con.Number) mainCon.SouthWestCon = con
  })

  const lastName = mainCon.CurrenRep.split(" ").slice(-1).join(" ")
  const fullName = mainCon.CurrenRep.replace(" ", "")

  mainCon.repImage = data.allSanityRepImage.nodes.find(
    node =>
      fullName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0 ||
      lastName.localeCompare(node.title, "en", { sensitivity: "base" }) === 0
  )

  console.log(data.allSanityRepImage.nodes)

  return mainCon
}
