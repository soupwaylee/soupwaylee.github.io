import React from "react"
import { Link } from "gatsby"

// border-bottom: 2px solid #e67d65;


const PostPreview = ({ post }) => (
  <article>
    <h2>
      <Link to={post.frontmatter.path}>
        {post.frontmatter.title}
      </Link>
    </h2>
    <small>{post.frontmatter.date} &ensp; &#183; &ensp; {post.timeToRead} min read</small>
  </article>
)

export default PostPreview
