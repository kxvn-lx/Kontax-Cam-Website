import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

const ImageShowcase = (props) => {
    const imageName = props.imageName
    const shadowedClassName = props.shadowedClassName

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
        <div>
            <Img className={`w-full md:w-4/5 mx-auto ${shadowedClassName}`} fluid={image.node.childImageSharp.fluid} />
        </div>
    )
}

export default ImageShowcase

ImageShowcase.propTypes = {
    imageName: PropTypes.string.isRequired,
    shadowedClassName: PropTypes.className
};
