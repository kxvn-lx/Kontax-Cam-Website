import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

function SEO({ description, lang, meta, keywords, title }) {
    const { site } = useStaticQuery(graphql`
        query DefaultSEOQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                    url
                    image
                }
            }
        }
    `)

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    name: `og:url`,
                    content: 'https://www.kontax.cam',
                },
                {
                    name: `og:locale`,
                    content: 'en_US',
                },
                {
                    name: `og:site_name`,
                    content: title,
                },
                {
                    name: `og:image`,
                    content: site.siteMetadata.image,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary_large_image`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:title`,
                    content: title,
                },
                {
                    name: `twitter:author`,
                    content: site.siteMetadata.author,
                },
                {
                    name: `twitter:description`,
                    content: site.siteMetadata.description,
                },
                {
                    name: `apple-itunes-app`,
                    content: `app-clip-bundle-id=com.kevinlaminto.kontaxcam.Clip`,
                },
            ]
                .concat(
                    keywords.length > 0
                        ? {
                              name: `keywords`,
                              content: keywords.join(`, `),
                          }
                        : []
                )
                .concat(meta)}
            title={title}
            titleTemplate={`%s — ${site.siteMetadata.description}`}
        ></Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    keywords: [],
    meta: [],
}

SEO.propTypes = {
    description: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    lang: PropTypes.string,
    meta: PropTypes.array,
    title: PropTypes.string.isRequired,
}

export default SEO
