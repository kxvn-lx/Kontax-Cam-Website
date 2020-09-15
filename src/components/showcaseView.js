import React from 'react'
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageShowcase from './imageShowcase'

export default function showcaseView(props) {
    const isLeftAligned = props.isLeftAligned
    const imageName = props.imageName
    const title = props.title
    const description = props.description
    return (
        <Fade>
            <ShowcaseWrapper isLeftAligned={isLeftAligned} className="grid md:grid-cols-2 grid-cols-1 gap-4 my-20">
                <div id="content" className="m-auto w-5/6">
                    <h1 className="font-bold md:text-2xl text-xl">{title}</h1>
                    <p className="text-kontax-secondary-text">{description}</p>
                </div>
                <ImageShowcase imageName={imageName} shadowedClassName="shadowed" />
            </ShowcaseWrapper>
        </Fade>
    )
}

showcaseView.propTypes = {
    isLeftAligned: PropTypes.bool.isRequired,
    imageName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

const ShowcaseWrapper = styled.div`
    #content {
        order: ${props => props.isLeftAligned ? 0 : 1};
        text-align: ${props => props.isLeftAligned ? 'left' : 'right'};

        @media (max-width: 768px) {
            text-align: center !important;
            order: 0 !important;
            margin-bottom: 2rem;
        }
    }
`