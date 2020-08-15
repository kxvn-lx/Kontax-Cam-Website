import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageShowcase = (props) => {
    const imageName = props.imageName
    const filterName = props.filterName

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
        image.node.relativePath === imageName + ".jpg"
    )

    return (
        <div>
            <FilterNameSyle className="inline-block px-8 py-1 rounded-full text-xs text-gray-900">
                {filterName}
            </FilterNameSyle>
            <Img fluid={image.node.childImageSharp.fluid} />
        </div>
    )
}

export default ImageShowcase

ImageShowcase.propTypes = {
    imageName: PropTypes.string.isRequired,
    filterName: PropTypes.string.isRequired
};

const FilterNameSyle = styled.span`
    backdrop-filter: blur(12px) saturate(100%);
    -webkit-backdrop-filter: blur(12px) saturate(50%);
    position: relative;
    top: 40px;
    z-index: 999;
    left: 10px
`