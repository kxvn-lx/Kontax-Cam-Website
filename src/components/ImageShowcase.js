import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageShowcase = (props) => {
    const imageName = props.imageName

    const data = useStaticQuery(graphql`
      query {
        images: allFile {
            edges {
            node {
                extension
                relativePath
                childImageSharp {
                    fluid(maxHeight: 500, maxWidth: 500) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
            }
        }
      }
    `)

    const image = data.images.edges.find(image =>
        image.node.relativePath === imageName
    )

    return (
        <div>
            <Img fluid={image.node.childImageSharp.fluid} />
        </div>
    )
}

export default ImageShowcase

ImageShowcase.propTypes = {
    imageName: PropTypes.string.isRequired,
};