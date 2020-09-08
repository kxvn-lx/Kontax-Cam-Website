import React from "react";

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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-3">
                <div className="text-center md:text-left m-auto">
                    <h1 className="text-2xl font-bold mt-4">Instant camera hybrid app for films and digital photographers, by photographers.</h1>
                    <p className="text-kontax-secondary-text mx-auto mt-4">
                        Minimalist instant camera app optimised for any iOS device.
                        Built with precision and love, Kontax Cam provides custom real film effects and filters to emulate 35mm film footage,
                        while allowing photographers to blend in digital aspects to make a unique masterpiece.
                    </p>
                    <div className="md:flex items-center mt-10 justify-center md:justify-start">
                        <a
                            className="px-6 py-3 font-bold bg-black text-white rounded-lg inline-block"
                            href="https://testflight.apple.com/join/MzTKHQdv"
                            target="_blank"
                            rel="noopener noreferrer">
                            Join the Beta
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
                <img className="md:ml-20" src={require('../images/001.png')} alt="Kontax cam screenshot" />
            </div>

            <div className="mt-10 border border-gray-300 w-full h-px" />

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

            <div className="mt-10 border border-gray-300 w-full h-px" />

            <div className="mt-20">
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

            <div className="mt-20">
                <div className="md:w-3/6">
                    <h1 className="font-bold text-2xl">Think you can help improve Kontax Cam?</h1>
                    <p className="text-kontax-secondary-text">
                        By contributing to open-source software, not only benefits you, but it also benefits the whole society.
                        This can be a one-time thing, contribute something and done, or a recurring thing. Whatever it is, it's your choice. You control your own decision.
                    </p>
                    <p className="mt-4">
                        <a className="text-black mr-4" href="mailto:kevinlaminto.dev@gmail.com?subject=[Kontax Cam] Contributing 🚀" target="_blank" rel="noopener noreferrer">Email →</a>
                        <a className="text-black" href="https://github.com/kxvn-lx/Kontax-Cam" target="_blank" rel="noopener noreferrer">Github →</a>
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-4">
                    {
                        helpList.map(item => (
                            <div key={item.title} className="flex justify-between w-9/12">
                                <span className="text-3xl mr-4">{item.emoji}</span>
                                <div>
                                    <h3 className="font-bold">{item.title}</h3>
                                    <p className="text-kontax-secondary-text">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="text-center mt-20">
                <a
                    className="px-6 py-3 font-bold bg-black text-white rounded-lg inline-block"
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

// Styled Componentsmes

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
            iconName: 'accessibility-human.svg',
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
        }
    ]
)

const helpList = (
    [
        {
            emoji: '🎨',
            title: 'Graphic designer',
            description: `Kontax Cam relies on stock icons for now. If you think you can help with this, that'd be great!`
        },
        {
            emoji: '👨‍💻👩‍💻',
            title: 'iOS Developer',
            description: `Kontax Cam is fully optimised for iOS. If you think you can improve the app, add a new feature, or anything,
            please feel free to shoot me an email!`
        },
        {
            emoji: '📸',
            title: 'Photographer',
            description: `Are you in love with taking photos and appreciates art? You can contribute to Kontax Cam by submitting your photo taken
            with Kontax Cam.`
        },
        {
            emoji: '📱',
            title: 'UI/UX Designer',
            description: `If you love designing not only aesthetically pleasing user interface but also a great user experience, please hop on board!`
        },
        {
            emoji: '👀',
            title: 'Your own role',
            description: `Want to help with your unique skills but not listed here? fear not! Just shoot me an email`
        }
    ]
)