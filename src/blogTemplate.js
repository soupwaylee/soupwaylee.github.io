import React from "react"
import { graphql } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "./components/layout"

import "katex/dist/katex.min.css"


export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
        <link rel="canonical" href={frontmatter.path} />
      </Helmet>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h5>{frontmatter.date}</h5>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MM-DD-YYYY")
        path
        title
      }
    }
  }
`