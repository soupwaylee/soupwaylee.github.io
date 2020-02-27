import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"


const ResumePage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: {extension: {eq: "pdf"}, name: {glob: "SuStefan*"}}, sort: {fields: name, order: ASC}) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const cvPublicURL = data.allFile.edges[0].node.publicURL
  const resumePublicURL = data.allFile.edges[1].node.publicURL

  return (
    <Layout>
      <div>
        <h1>Resume</h1>
        <p><a href={resumePublicURL}>Stefan's Resume (1 pages)</a></p>
        <p><a href={cvPublicURL}>Stefan's CV (2 pages)</a></p>
      </div>
    </Layout>
  );
}

export default ResumePage
