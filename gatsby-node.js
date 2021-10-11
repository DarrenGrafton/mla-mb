/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const utils = require("./src/helpers/Utils")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const conTemplate = require.resolve(`./src/templates/ConTemplate.js`)
  const billTemplate = require.resolve(`./src/templates/BillTemplate.js`)
  const result = await graphql(`
    {
      allConsJson(limit: 1) {
        nodes {
          Name
          Number
          CurrentRep
        }
      }
      allBillsJson(limit: 1) {
        nodes {
          billKey
          rep
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allConsJson.nodes.forEach(node => {
    createPage({
      path: "/" + utils.slugifyName(node.Name),
      component: conTemplate,
      context: {
        // additional data can be passed via context
        slug: node.Number,
        rep: node.CurrentRep,
        repRegex: "/" + utils.slugifyName(node.CurrentRep) + "/",
      },
    })
  })

  result.data.allBillsJson.nodes.forEach(node => {
    createPage({
      path: "/bills/" + node.billKey,
      component: billTemplate,
      context: {
        // additional data can be passed via context
        billKey: node.billKey,
        rep: node.rep,
        repRegex: "/" + utils.slugifyName(node.rep) + "/",
      },
    })
  })
}
