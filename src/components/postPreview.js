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
`;

const PostPreview = ({ post }) => (
  <div
    style={{
      paddingBottom: "2rem"
    }}
  >
    <h1>
      <StyledLink to={post.frontmatter.path}>
        {post.frontmatter.title}  
      </StyledLink>
    </h1>
    <h5>{post.frontmatter.date}</h5>
    <p>{post.excerpt}</p>
  </div>
)

export default PostPreview