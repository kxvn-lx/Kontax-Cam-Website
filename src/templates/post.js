import React from 'react'
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import '../css/markdown-styles.css'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <Fade>
                <div
                    className='markdown'
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </Fade>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`
