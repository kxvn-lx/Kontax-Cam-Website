import React from 'react'
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ImageShowcase from './imageShowcase'

export default function showcaseView() {
    return (
        <Fade>
            <ShowcaseWrapper isLeftAligned={true} className="grid md:grid-cols-2 grid-cols-1 gap-4 my-20">
                <div id="content" className="m-auto">
                    <span className="text-orange-500 text-sm">New feature</span>
                    <h1 className="font-bold text-2xl md:text-5xl">Kontax Editor</h1>
                    <p id="description" className={`mx-auto w-5/6`}>Import your own photo taken outside the app and edit it with Kontax Cam's very own filters and effects.</p>
                </div>
                <ImageShowcase imageName="004.png" className="w-full md:w-3/4 mx-auto" />
            </ShowcaseWrapper>
            <ShowcaseWrapper isLeftAligned={false} className="grid md:grid-cols-2 grid-cols-1 gap-4 my-20">
                <div id="content" className="m-auto">
                    <h1 className="font-bold text-2xl md:text-5xl">Handpicked premium filters</h1>
                    <p id="description" className={`mx-auto w-5/6`}>Kontax Cam provides filter collections that are made from emulating both classic film stocks and digital camera artifacts.
            Experiment with different combinations to create your own filter and effects combo!</p>
                </div>
                <ImageShowcase imageName="003.png" className="w-full md:w-3/4 mx-auto" />
            </ShowcaseWrapper>

            <ShowcaseWrapper isLeftAligned={true} className="grid md:grid-cols-2 grid-cols-1 gap-4 my-20">
                <div id="content" className="m-auto">
                    <h1 className="font-bold text-2xl md:text-5xl">Carefully crafted effects</h1>
                    <p id="description" className={`mx-auto w-5/6`}>Kontax Cam believes that every photographer should define their own style of art. With that in mind,
            Kontax Cam delivers a handful amount of effects to make your photo looks unique.</p>
                </div>
                <ImageShowcase imageName="002.png" className="w-full md:w-3/4 mx-auto" />
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

        #description {
            float: ${props => props.isLeftAligned ? 'left' : 'right'};
            display: contents;
        }
    }
`