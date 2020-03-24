import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

// border-bottom: 2px solid #e67d65;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: #e67d65;
  }
`

const PostPreview = ({ post }) => (
  <article>
    <h2>
      <StyledLink to={post.frontmatter.path}>
        {post.frontmatter.title}
      </StyledLink>
    </h2>
    <small>{post.frontmatter.date} &ensp; &#183; &ensp; {post.timeToRead} min read</small>
  </article>
)

export default PostPreview
