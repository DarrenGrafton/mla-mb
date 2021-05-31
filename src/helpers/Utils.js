const slugifyName = name => {
  const space = /\s/gi
  const other = /\./gi
  //toLowerCase()
  return name.replace(space, "-").replace(other, "").toLowerCase()
}

const parseQuery = queryString => {
  var query = {}
  var pairs = (
    queryString[0] === "?" ? queryString.substr(1) : queryString
  ).split("&")
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split("=")
    query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "")
  }
  return query
}

module.exports = { slugifyName, parseQuery }
