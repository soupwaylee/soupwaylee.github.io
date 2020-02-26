import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"


export default ( { data } ) => (
  <Layout>
      {data.allMarkdownRemark.edges.map(( { node } ) => (
        <PostPreview key={node.id} post={node}/>  
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
          frontmatter {
            title
            date(formatString: "MM-DD-YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`
