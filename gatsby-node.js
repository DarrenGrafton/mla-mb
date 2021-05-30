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
  const sessionTemplate = require.resolve(`./src/templates/SessionTemplate.js`)
  const result = await graphql(`
    {
      allConsJson {
        nodes {
          Name
          Number
          CurrentRep
        }
      }
      allBillsJson {
        nodes {
          billKey
          rep
        }
      }
      allSessionsJson {
        nodes {
          key
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
      path: "/" + utils.slugifyConName(node.Name),
      component: conTemplate,
      context: {
        // additional data can be passed via context
        slug: node.Number,
        rep: node.CurrentRep,
        repRegex: "/" + utils.slugifyConName(node.CurrentRep) + "/",
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
        repRegex: "/" + utils.slugifyConName(node.rep) + "/",
      },
    })
  })
  result.data.allSessionsJson.nodes.forEach(node => {
    createPage({
      path: "/session/" + node.key,
      component: sessionTemplate,
      context: {
        // additional data can be passed via context
        key: node.key,
      },
    })
  })
}
