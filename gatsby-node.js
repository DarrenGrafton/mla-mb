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
  const result = await graphql(`
    {
      allCons {
        nodes {
          Name
          Number
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  result.data.allCons.nodes.forEach(node => {
    createPage({
      path: "/" + utils.slugifyConName(node.Name),
      component: conTemplate,
      context: {
        // additional data can be passed via context
        slug: node.Number,
      },
    })
  })
}
