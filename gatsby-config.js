require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: `My Rep MB`,
    description: `Find your MLA.  The representative for your constuituency at the Manitoba Government.  Is your MLA doing a good job?`,
    author: `@dmg20000`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `my-rep-mb`,
        short_name: `Rep MB`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon/android-chrome-192x192.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/JSONData/`,
      },
    },

    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
