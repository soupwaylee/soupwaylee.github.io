import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"


export default () => (
  <Layout>
    <div>
      <Link to="/blog/first-post/">Go to my first Markdown blog post</Link>
    </div>
  </Layout>
)
