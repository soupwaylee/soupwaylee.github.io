import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProfileCard from "../components/profileCard"
import PostPreview from "../components/postPreview"


import "../pages/global.css"

//TODO convert post list into a component
export default ({ data }) => (
  <Layout>
    <SEO />
    <ProfileCard />
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostPreview key={node.id} post={node} />
      ))}
    </>
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