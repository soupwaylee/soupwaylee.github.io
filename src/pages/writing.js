import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostPreview key={node.id} post={node} />
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            date(formatString: "YYYY MMM DD")
            path
          }
          excerpt
        }
      }
    }
  }
`
