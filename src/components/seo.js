import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';


const SEO = ({ title, meta, description, image, slug, lang = 'en' }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadataQuery {
        site {
          siteMetadata {
            title
            author
            siteUrl
            description
            image
            social {
              twitter
            }
          }
        }
      }
    `}
    render={data => {
      const { siteMetadata } = data.site;
      const metaDescription = description || siteMetadata.description;
      const metaImage = `${siteMetadata.siteUrl}${image || siteMetadata.image}`;
      const url = `${siteMetadata.siteUrl}${slug}`;

      return (
        <Helmet
          htmlAttributes={{ lang }}
          {
            ...(title
              ? {
                // TODO find out why `${title} - ${siteMetadata.title}` would not work
                titleTemplate: `%s - ${siteMetadata.title}`, title,
              } 
              : {
                title: `${siteMetadata.title}`,
              }
            )
          }
          meta={[
            {
              name: 'description',
              content: metaDescription
            },
            {
              property: 'og:title',
              content: title || siteMetadata.title
            },
            {
              property: 'og:description',
              content: metaDescription
            },
            {
              property: 'og:url',
              content: url
            },
            {
              name: 'twitter:card',
              content: 'summary'
            },
            {
              name: 'twitter:title',
              content: title || siteMetadata.title
            },
            {
              name: 'twitter:creator',
              content: siteMetadata.social.twitter
            },
            {
              name: 'twitter:description',
              content: metaDescription
            },
          ].concat(
            metaImage 
            ? [
              {
                property: 'og:image',
                content: metaImage
              },
              {
                name: 'twitter:image',
                content: metaImage
              }
            ]
            : []
          ).concat(meta)}
        />
      )  
    }}
  />
    
)

SEO.defaultProps = {
  title: '',
  meta: [],
  slug: '',
};

//TODO validate SEO component props with prop-types

export default SEO;