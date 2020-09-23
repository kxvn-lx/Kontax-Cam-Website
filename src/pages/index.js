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

            <Fade>
                <div className="grid grid-cols-1 gap-4 w-full md:max-w-xl mx-auto">
                    <div className="text-center m-auto">
                        <h1 className="fluid text-2xl md:text-3xl font-bold mt-4">The instant camera hybrid app for film and digital photographers.</h1>
                        <p className="mx-auto mt-4">
                            Minimalist instant camera app optimised for any iOS device.
                            Built with precision and love, Kontax Cam provides custom real film effects and filters to emulate 35mm film footage,
                            while allowing photographers to blend in digital aspects to make a unique masterpiece.
                        </p>
                        <div className="mt-20">
                            <a
                                className="main-button"
                                href="https://apps.apple.com/app/kontax-cam/id1527110773"
                                target="_blank"
                                rel="noopener noreferrer">
                                Download
                            </a>

                            <div className="mt-10">
                                <Modal modalTitle="Or scan the barcode">
                                    <div className="w-3/4">
                                        <img className="h-40 w-40 rounded-lg" src={require("../images/barcodeSVG.svg")} alt="Kontax Cam barcode" />
                                        <p className="mt-4">Scan the barcode with your camera to open it on the app store</p>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>

                    <ImageShowcase imageName="001_ex.png" />
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
                <h1 className="font-bold text-2xl text-center">Why you'll love Kontax Cam</h1>
                <Fade>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-4 md:max-w-3xl mx-auto">
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
                    Download
                </a>
            </div>

        </Layout>
    );
}

export default IndexPage;

// Styled Components

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
            imageName: '002.png',
            title: 'Carefully crafted effects',
            description: `Kontax Cam believes that every photographer should define their own style of art. With that in mind,
            Kontax Cam delivers a handful amount of effects to make your photo looks unique.`
        },
        {
            isLeftAligned: false,
            imageName: '004.png',
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
        },
        {
            iconName: 'drag.svg',
            title: 'Your own adjustment choice',
            description: `Adjust the exposure with a swipe up or down, or simply just tap anywhere on the camera screen to auto focus/exposure.`
        },
        {
            iconName: 'shake.svg',
            title: 'Shake to report the bug!',
            description: `Spot a bug? Shake it so that we could squash them for ya!`
        }
    ]
)