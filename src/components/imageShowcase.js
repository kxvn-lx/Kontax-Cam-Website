import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

const ImageShowcase = (props) => {
    const imageName = props.imageName
    const className = props.className

    const data = useStaticQuery(graphql`
      query {
        images: allFile {
            edges {
            node {
                extension
                relativePath
                childImageSharp {
                    fluid {
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
        <Img className={`${className}`} fluid={image.node.childImageSharp.fluid} />
    )
}

export default ImageShowcase

ImageShowcase.propTypes = {
    imageName: PropTypes.string.isRequired,
    className: PropTypes.string
};
