/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `A Personal Blog by Stefan Su`,
    author: `Stefan Su`,
    siteUrl: `https://www.soupwaylee.com`,
    description: `A blog by Stefan Su where he rambles about computer science, code, cooking and how to become a better liver of life.`,
    image: `${__dirname}/src/components/profilePic.jpeg`,
    social: {
      twitter: `@soupwaylee`,
    },
    menuLinks: [
      {
        name: "/home",
        link: "/",
      },
      {
        name: "/about",
        link: "/about/",
      },
      {
        name: "/contact",
        link: "/contact/",
      },
      {
        name: "/resume",
        link: "/resume/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 580,
              ignoreFileExtensions: [],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
