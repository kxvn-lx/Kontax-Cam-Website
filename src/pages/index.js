import React from "react";
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";
import Modal from "../templates/kontaxModal/kontaxModal"
// import ImageShowcase from "../components/imageShowcase"

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

            {/* <div className="mt-4">
                <h1 className="font-bold text-xl md:text-2xl">#TakenWithKontaxCam</h1>
                <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                    {
                        [
                            {
                                imageName: "ex1",
                                filterName: "A1"
                            },
                            {
                                imageName: "ex2",
                                filterName: "A2"
                            },
                            {
                                imageName: "ex3",
                                filterName: "B1"
                            },
                            {
                                imageName: "ex4",
                                filterName: "BW1"
                            },
                            {
                                imageName: "ex5",
                                filterName: "B2"
                            },
                            {
                                imageName: "ex6",
                                filterName: "C2"
                            }
                        ].map((item) => (
                            <ImageShowcase key={item.imageName} imageName={item.imageName} filterName={item.filterName} />
                        ))
                    }
                </div>
            </div> */}

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-10">
                <div className="bg-gray-900 px-3 py-20 md:col-span-1 rounded-lg">
                    <div className="text-center mb-5 mx-auto">
                        <h1 className="font-bold text-2xl mt-4">Your masterpiece,<br />one tap away.</h1>
                        <p className="text-gray-300 w-10/12 mx-auto">Access all the power of Kontax Cam with just a tap.</p>
                    </div>
                    <img className="w-10/12 h-auto mx-auto" src={require("../images/image1.png")} alt="Kontax Cam User interface" />
                </div>

                <div id="features" className="bg-gray-900 px-10 py-20 md:col-span-2 rounded-lg">
                    <div className="text-center">
                        <h1 className="font-bold text-2xl mt-4">Carefully crafted effects</h1>
                        <p className="text-gray-300">All of these handcrafted effects, plus more coming soon!</p>
                    </div>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-20">
                        {
                            [{
                                icon: require("../images/color.icon.png"),
                                title: `Colour leaks`,
                                description: `Colour leaks add a gorgeous film colour overlay on your photo. 
                                Currently, Kontax Cam provides three different colours: red, green, and blue.`,
                            },
                            {
                                icon: require("../images/calendar.icon.png"),
                                title: `Datestamp`,
                                description: `Allows you to add a realistic film datestamp on your photo.`,
                            },
                            {
                                icon: require("../images/dust.icon.png"),
                                title: `Film dust`,
                                description: `This feature allows you to overlay your photo with real film dust.
                                This effect is best used with a film/vintage filter to make
                                it more unique.`,
                            },
                            {
                                icon: require("../images/grain.icon.png"),
                                title: `Film grain`,
                                description: `Grain makes your photo looks sharp, scratched and old school!
                                Although ecessive use might render the photo overly sharpened.,
                                grain is beloved in the heart of film photographers.`,
                            },
                            {
                                icon: require("../images/leak.icon.png"),
                                title: `Light leaks`,
                                description: `Light leaks make your photo pop with custom made film light effects.
                                This effect can be used to make your photo look artsy and stylish.`,
                            },
                            ].map((item) => (
                                <div key={item.title} className="rounded-lg grid p-4 max-w-xs mx-auto" >
                                    <img className="h-12 w-12" src={item.icon} alt={item.title + " icon"} />
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="pt-32 xl:py-12 xl:px-8 text-gray-100 text-center">
                <h1 className="text-2xl m-3 font-bold">Handcrafted custom-made filters</h1>
                <p className="text-gray-300 md:w-3/4 mx-auto">
                    Kontax Cam provides filter collections that are made from emulating both classic film stocks and digital camera artifacts.
                    Experiment with different combinations to create your own filter and effects combo!
                </p>
                <p className="text-gray-300 text-sm mt-4">{`Note: Send your photo captured with a filter via email to get it featured on the collection's cover page!`}</p>

                <div className="grid gap-4 grid-cols-2 mt-20">
                    {
                        [{
                            title: `A Collection`,
                        },
                        {
                            title: `B Collection`,
                        },
                        {
                            title: `C Collection`,
                        },
                        {
                            title: `BW Collection`,
                        },
                        {
                            title: `+ more in the future!`,
                        },
                        ].map((item) => (
                            <div key={item.title} className="rounded-lg grid p-4 max-w-xs mx-auto" style={{ justifyItems: 'center' }}>
                                <span className="p-2 mb-5 w-16 rounded-full bg-gray-900 font-bold">{item.title.split(" ")[0]}</span>
                                <h3 className="font-bold text-xl">{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;

const GradientBackground = styled.div`
    background: #A770EF;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
`