import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Helmet from "react-helmet"
import Header from "../components/header"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={ data => {
      return (<React.Fragment>
        <Helmet title={data.site.siteMetadata.title} meta={[
          { name: 'description', content: data.site.siteMetadata.description },
          { name: 'keywords', content: 'sample, something' },
        ]} />
        <Header menuLinks={data.site.siteMetadata.menuLinks} />
        <div style={{
          margin: '0 auto',
          maxWidth: 850,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
        }}>
          {children}
        </div>
      </React.Fragment>);
    }}
  />
);

export default Layout;