module.exports = {
  siteMetadata: {
    title: `Manitoban MLA`,
    description: `Find your representative at the Manitoba Government.  What is your MLA working on?`,
    author: `@dmg20000`,
    siteUrl: `https://www.mlamb.ca`,
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
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.mlamb.ca",
        sitemap: "https://www.mlamb.ca/sitemap/sitemap-0.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      // options: {
      //   /**
      //    * One convention is to place your Netlify CMS customization code in a
      //    * `src/cms` directory.
      //    */
      //   modulePath: `${__dirname}/src/cms/cms.js`,
      // },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
