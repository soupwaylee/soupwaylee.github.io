import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "./components/layout"
import SEO from "./components/seo"
import profilePic from "./components/profilePic.jpeg"
import { rhythm } from "./utils/typography"

import "katex/dist/katex.min.css"


export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html, timeToRead } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.peek}
        slug={frontmatter.path}
      />
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <p>
            <small>
              {frontmatter.date} &ensp; &#183; &ensp; {timeToRead} min read
            </small>
          </p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: rhythm(3 / 2),
        }}
      >
        <img
          src={profilePic}
          alt={`Stefan Su`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: "20%",
          }}
        />
        <p style={{ maxWidth: 225 }}>
          Personal blog by Stefan Su Feel free to{" "}
          <Link to={"/"}>reach out</Link> 👈
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        date(formatString: "YYYY MMM DD")
        path
        title
        peek
      }
    }
  }
`
