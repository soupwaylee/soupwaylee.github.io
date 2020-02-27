import React from "react"
import { graphql, Link } from 'gatsby'
import Helmet from "react-helmet"
import Layout from "./components/layout"
import profilePic from './components/profilePic.jpeg'
import { rhythm } from './utils/typography'
import styled from "@emotion/styled"

import "katex/dist/katex.min.css"


const StyledNavLink = styled(Link)`
  padding: 3px;
  color: black; 
  text-decoration: none;
  &:hover {
    color: #e67d65;
  }
`;

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
      <div style={{
          display: 'flex',
          marginTop: rhythm(3 / 2)
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
            borderRadius: '20%',
          }}
        />
        <p style={{ maxWidth: 225 }}>
          Personal blog by Stefan Su Feel free to <StyledNavLink to={'/'}>reach out</StyledNavLink> 👈
        </p>
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