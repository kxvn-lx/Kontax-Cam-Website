import React from "react";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../templates/kontaxModal/kontaxModal"
import ShowcaseView from "../components/showcaseView"
import FeatureView from "../components/featureView"
import ImageShowcase from "../components/imageShowcase"

function IndexPage() {

    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                title="Kontax Cam"
            />

            <PHWrapper href="https://www.producthunt.com/posts/kontax-cam-for-ios?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kontax-cam-for-ios" target="_blank" rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=261842&theme=light" alt="Kontax Cam for iOS - Instant camera hybrid app for photographers. | Product Hunt Embed" style={{ width: '250px', height: '54px' }} width="250" height="54" />
            </PHWrapper>

            <Fade>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="text-center md:text-left m-auto">
                        <h1 className="text-2xl font-bold mt-4">Instant camera hybrid app for films and digital photographers, by photographers.</h1>
                        <p className="text-kontax-secondary-text mx-auto mt-4">
                            Minimalist instant camera app optimised for any iOS device.
                            Built with precision and love, Kontax Cam provides custom real film effects and filters to emulate 35mm film footage,
                            while allowing photographers to blend in digital aspects to make a unique masterpiece.
                    </p>
                        <div className="md:flex items-center mt-10 justify-center md:justify-start">
                            <a
                                className="main-button"
                                href="https://apps.apple.com/app/kontax-cam/id1527110773"
                                target="_blank"
                                rel="noopener noreferrer">
                                <img src={require('../images/download.svg')} alt="Download on the app store" />
                            </a>

                            <div className="mt-4 md:mt-0 md:ml-4">
                                <Modal modalTitle="Or scan the barcode">
                                    <div className="w-3/4">
                                        <img className="h-40 w-40 rounded-lg" src={require("../images/barcodeSVG.svg")} alt="Kontax Cam barcode" />
                                        <p className="mt-4">Scan the barcode with your camera to open it in TestFlight</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                    <ImageShowcase imageName="001.png" shadowedClassName="shadowed" />
                </div>
            </Fade>

            <div className="separator" />

            <div className="mt-10">
                {
                    showcaseList.map(item => (
                        <ShowcaseView key={item.title}
                            title={item.title}
                            imageName={item.imageName}
                            isLeftAligned={item.isLeftAligned}
                            description={item.description}
                        />
                    ))
                }
            </div>

            <div className="separator" />

            <div className="mt-20">
                <h1 className="font-bold text-2xl">Features</h1>
                <Fade>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4">
                        {
                            featureList.map(item => (
                                <FeatureView key={item.title}
                                    title={item.title}
                                    iconName={item.iconName}
                                    description={item.description}
                                />
                            ))
                        }
                    </div>
                </Fade>
            </div>

            <div className="md:flex items-center mt-20 justify-center md:justify-start">
                <a
                    className="main-button mx-auto"
                    href="https://apps.apple.com/app/kontax-cam/id1527110773"
                    target="_blank"
                    rel="noopener noreferrer">
                    <img src={require('../images/download.svg')} alt="Download on the app store" />
                </a>
            </div>

        </Layout>
    );
}

export default IndexPage;

// Styled Componentsmes
const PHWrapper = styled.a`
    z-index: 99;
    position: fixed;
    bottom: 20px;
    left: 20px;
`

// Datasource
const showcaseList = (
    [
        {
            isLeftAligned: false,
            imageName: '003.png',
            title: 'Handpicked premium filters',
            description: `Kontax Cam provides filter collections that are made from emulating both classic film stocks and digital camera artifacts. 
            Experiment with different combinations to create your own filter and effects combo!`
        },
        {
            isLeftAligned: true,
            imageName: '004.png',
            title: 'Carefully crafted effects',
            description: `Kontax Cam believes that every photographer should define their own style of art. With that in mind,
            Kontax Cam delivers a handful amount of effects to make your photo looks unique.`
        },
        {
            isLeftAligned: false,
            imageName: '002.png',
            title: 'One lab to rule them all',
            description: `Your very own, privacy first, images lab. Just like the iconic darkroom for film photographers,
            we provide you with Lab - the place for all of your masterpiece.`
        },
    ]
)

const featureList = (
    [
        {
            iconName: 'aperture.svg',
            title: 'Multiple lens support',
            description: `If your iPhone supports the telephoto or wide-angle lens, Kontax Cam is smart enough to enable you to utilise them to its extend.`
        },
        {
            iconName: 'happy-face.svg',
            title: 'Simple and minimal',
            description: `Kontax Cam is built around minimalism and simplicity design. 
            That way, we can ensure that the user's experience and photo creation will always be the headline.`
        },
        {
            iconName: 'copy.svg',
            title: 'Multi action',
            description: `The lab is powerful enough to provides multiple save and delete of images. Lesser time organising your photos, more time taking your masterpiece.`
        },
        {
            iconName: 'human.svg',
            title: 'Gestured-based',
            description: `Kontax Cam is designed for human. Hence your masterpiece - is just but a tap and swipe away.`
        },
        {
            iconName: 'widget.svg',
            title: 'iOS 14 Widget',
            description: `Kontax Cam supports iOS 14 widgets by showcasing your beautiful masterpiece into your homescreen, directly from your lab.`
        },
        {
            iconName: 'volume.svg',
            title: 'Volume button trigger',
            description: `Tired of pressing the big ol' shutter button? Kontax Cam allows you to snap your masterpiece by just pressing the volume up/down button.`
        },
        {
            iconName: 'sun.svg',
            title: 'Light/Dark mode',
            description: `By default Kontax Cam follows the system's appearance. However, you can pick either a light or dark mode in the settings page!`
        }
    ]
)