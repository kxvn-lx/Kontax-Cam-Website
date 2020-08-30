import React from "react";
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../templates/kontaxModal/kontaxModal"
import ShowcaseView from "../components/showcaseView"
import FeatureView from "../components/featureView"

function IndexPage() {

    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                title="Kontax Cam"
            />

            <div className="pt-32 xl:py-12 xl:px-8 text-center">
                <div className="w-full xl:w-9/12 mx-auto">
                    <span className="border border-gray-500 text-gray-500 rounded-full p-3">Coming soon</span>
                    <GradientBackground>
                        <h1 className="lg:text-5xl text-3xl m-3 font-bold">Instant camera hybrid app for films and digital photographers, by photographers.</h1>
                    </GradientBackground>
                    <p className="text-gray-300 w-3/4 mx-auto">
                        Minimalist instant camera app optimised for any iOS device.
                        Built with precision and love, Kontax Cam provides custom real film effects and filters to emulate 35mm film footage,
                        while allowing photographers to blend in digital aspects to make a unique masterpiece.
                    </p>
                    <a
                        className="p-3 m-10 font-bold bg-white text-black shadow-white rounded-lg inline-block"
                        href="https://testflight.apple.com/join/MzTKHQdv"
                        target="_blank"
                        rel="noopener noreferrer">
                        Join the Beta
                    </a>
                </div>

                <Modal modalTitle="Or scan the barcode">
                    <div className="w-3/4">
                        <img className="h-40 w-40 rounded-lg" src={require("../images/barcodeSVG.svg")} alt="Kontax Cam barcode" />
                        <p className="mt-4">Scan the barcode with your camera to open it in TestFlight</p>
                    </div>
                </Modal>
            </div>

            <div className="mt-10">
                <img className="w-5/6 md:w-2/6 mx-auto" src={require('../images/image1.png')} alt="Kontax cam screenshot" />
            </div>

            <div className="mt-10 md:mt-40">
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

            <div className="mt-10 md:mt-40 border border-gray-500 w-full h-px" />

            <div className="mt-10 md:mt-40">
                <h1 className="font-bold text-2xl">Features</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-4">
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
            </div>

            <div className="text-center mt-20">
                <a
                    className="p-3 m-10 font-bold bg-white text-black shadow-white rounded-lg inline-block"
                    href="https://testflight.apple.com/join/MzTKHQdv"
                    target="_blank"
                    rel="noopener noreferrer">
                    Join the Beta
                    </a>
            </div>

        </Layout>
    );
}

export default IndexPage;

// Styled Components
const GradientBackground = styled.div`
    h1 {
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

// Datasource
const showcaseList = (
    [
        {
            isLeftAligned: true,
            imageName: 'image2.png',
            title: 'Handpicked premium filters',
            description: `Kontax Cam provides filter collections that are made from emulating both classic film stocks and digital camera artifacts. 
            Experiment with different combinations to create your own filter and effects combo!`
        },
        {
            isLeftAligned: false,
            imageName: 'image3.png',
            title: 'Carefully crafted effects',
            description: `Kontax Cam believes that every photographer should define their own style of art. With that in mind,
            Kontax Cam delivers a handful amount of effects to make your photo looks unique.`
        },
        {
            isLeftAligned: true,
            imageName: 'image4.png',
            title: 'One lab to rule them all',
            description: `Your very own, privacy first, images lab. Just like the iconic darkroom for film photographers,
            we provide you with Lab - the place for all of your masterpiece.`
        },
    ]
)

const featureList = (
    [
        {
            iconName: 'search.svg',
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
            iconName: 'accessibility-human.svg',
            title: 'Gestured-based',
            description: `Kontax Cam is designed for human. Hence your masterpiece - is just but a tap and swipe away.`
        }
    ]
)