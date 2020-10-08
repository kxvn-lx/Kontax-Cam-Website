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
        <>
            <div className="px-4 py-10 text-center md:flex justify-center">
                <p>We're on Product Hunt — your support means everything to us</p>
                <a className="md:ml-4" href="https://www.producthunt.com/posts/kontax-cam-for-ios?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kontax-cam-for-ios" target="_blank" rel="noopener noreferrer">Check us out</a>
            </div>
            <Layout>
                <SEO
                    keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                    title="Kontax Cam"
                />

                <Fade>
                    <div className="grid grid-cols-1 gap-10 mx-auto">
                        <div className="text-center m-auto">
                            <h1 className="fluid text-3xl font-bold mt-4 w-full md:max-w-xl">The instant camera hybrid app for creative people and photographers.</h1>
                            <p className="mx-auto mt-4 w-full md:max-w-xl">
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
                                        <div className="w-3/4 mx-auto">
                                            <img className="h-40 w-40 mx-auto" style={{ borderRadius: '1.25rem' }} src={require("../images/barcode.jpg")} alt="Kontax Cam barcode" />
                                            <p className="mt-4">Scan the barcode with your camera to open it on the app store</p>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:max-w-lg mx-auto">
                            <ImageShowcase imageName="001_ex.png" />
                        </div>
                    </div>
                </Fade>

                <div className="separator" />

                <div className="mt-10">
                    <ShowcaseView />
                </div>

                <div className="separator" />

                <div className="mt-20">
                    <h1 className="font-medium text-2xl md:text-3xl text-center">Why you'll love<br />Kontax Cam</h1>
                    <Fade>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-20 md:max-w-3xl mx-auto">
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

                <div className="text-center mt-20">
                    <a
                        className="main-button mx-auto"
                        href="https://apps.apple.com/app/kontax-cam/id1527110773"
                        target="_blank"
                        rel="noopener noreferrer">
                        Download
                </a>
                </div>

            </Layout>
        </>
    );
}

export default IndexPage;

// Styled Components

// Datasource
const featureList = (
    [
        {
            title: 'Multiple lens support',
            description: `If your iPhone supports the telephoto or wide-angle lens, Kontax Cam is smart enough to enable you to utilise them to its extend.`
        },
        {
            title: 'Simple and minimal',
            description: `Kontax Cam is built around minimalism and simplicity design. 
            That way, we can ensure that the user's experience and photo creation will always be the headline.`
        },
        {
            title: 'Multi action',
            description: `The lab is powerful enough to provides multiple save and delete of images. Lesser time organising your photos, more time taking your masterpiece.`
        },
        {
            title: 'Gestured-based',
            description: `Kontax Cam is designed for human. Hence your masterpiece - is just but a tap and swipe away.`
        },
        {
            title: 'iOS 14 Widget',
            description: `Kontax Cam supports iOS 14 widgets by showcasing your beautiful masterpiece into your homescreen, directly from your lab.`
        },
        {
            title: 'Volume button trigger',
            description: `Tired of pressing the big ol' shutter button? Kontax Cam allows you to snap your masterpiece by just pressing the volume up/down button.`
        },
        {
            title: 'Light/Dark mode',
            description: `By default Kontax Cam follows the system's appearance. However, you can pick either a light or dark mode in the settings page!`
        },
        {
            title: 'Your own adjustment choice',
            description: `Adjust the exposure with a swipe up or down, or simply just tap anywhere on the camera screen to auto focus/exposure.`
        },
        {
            title: 'Shake to report the bug!',
            description: `Spot a bug? Shake it so that we could squash them for ya!`
        },
        {
            title: 'One lab to rule them all',
            description: `Your very own, privacy first, images lab. Just like the iconic darkroom for film photographers, we provide you with Lab - the place for all of your masterpiece.
            `
        }
    ]
)