/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Stefan Su`,
    // siteUrl: `https://www.stefansu.com`,
    description: `A blog with ramblings on code, computer science, cooking and how to become a liver of life`,
    menuLinks: [
      {
        name:'/home',
        link:'/'
      },
      {
        name:'/writing',
        link:'/writing/'
      },
      {
        name:'/about',
        link:'/about/'
      },
      {
        name:'/resume',
        link:'/resume/'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
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
              strict: `ignore`
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
              ignoreFileExtensions: [],
            },
          }
        ],
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ]
}
