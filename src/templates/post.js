import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout";
import "../css/markdown-styles.css"

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div className="markdown w-3/4 mx-auto" dangerouslySetInnerHTML= {{__html: post.html}} />
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: {eq: $path} }) {
            html
            frontmatter {
                path
                title
            }
        }
    }
`