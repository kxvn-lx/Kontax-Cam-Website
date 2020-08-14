import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import image1 from "../images/image1.png"
import colorIcon from "../images/color.icon.png"
import dustIcon from "../images/dust.icon.png"
import grainIcon from "../images/grain.icon.png"
import leakIcon from "../images/leak.icon.png"
import datestampIcon from "../images/calendar.icon.png"

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                title="Home"
            />

            <div className="rounded-lg pt-32 xl:py-12 xl:px-8 text-gray-100 text-center">
                <div className="w-full xl:w-9/12 mx-auto">
                    <span className="bg-gray-800 rounded-full p-3 font-bold" >Coming soon</span>
                    <h1 className="lg:text-5xl text-3xl m-3 font-bold">Instant camera hybrid app for films and digital photographers, by photographers.</h1>
                    <p className="text-gray-300 w-3/4 mx-auto">
                        Minimalist instant camera app optimised for any iOS device. 
                        Built with precision and love, Kontax Cam provides custom real film effects and filters to emulate 35mm film footage, 
                        while allowing photographers to blend in digital aspects to make a unique masterpiece.
                </p>
                    <a
                        className="text-white p-3 m-10 font-bold bg-blue-600 shadow-blue-600 rounded-lg inline-block"
                        href="https://testflight.apple.com/join/MzTKHQdv"
                        target="_blank"
                        rel="noopener noreferrer">
                        Join the Beta
                </a>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-10 text-white">
                <div className="bg-gray-900 rounded-lg px-3 py-20 md:col-span-1">
                    <div className="text-center mb-5 mx-auto">
                        <h1 className="font-bold text-white text-3xl mt-4">Your masterpiece,<br />one tap away.</h1>
                        <p className="text-gray-300">Access all the power of Kontax Cam with just a tap away.</p>
                    </div>
                    <img className="w-10/12 h-auto mx-auto" src={image1} alt="Kontax Cam User interface" />
                </div>

                <div id="features" className="bg-gray-900 rounded-lg px-10 py-20 md:col-span-2">
                    <div className="text-center">
                        <h1 className="font-bold text-3xl mt-4">Carefully crafted effects</h1>
                        <p className="text-gray-300">All of these handcrafted effects, plus more in the future!</p>
                    </div>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-20">
                        {
                            [{
                                icon: colorIcon,
                                title: `Colour leaks`,
                                description: `Colour leaks add a gorgeous film colour overlay into your photo. 
                                Currently, Kontax Cam provides three different colours: red, green, and blue.`,
                            },
                            {
                                icon: datestampIcon,
                                title: `Datestamp`,
                                description: `Allows you to add realistic film datestamp into your photo.`,
                            },
                            {
                                icon: dustIcon,
                                title: `Film dust`,
                                description: `Dust allows you to overlay your photo with real film dust.
                                This effect is best used with a film/vintage filter to make
                                it more unique.`,
                            },
                            {
                                icon: grainIcon,
                                title: `Film grain`,
                                description: `Grain makes your photo looks sharp, scratched and old school!
                                Although ecessive use might render the photo too over-sharpen,
                                grain is beloved in the heart of film photographers.`,
                            },
                            {
                                icon: leakIcon,
                                title: `Light leaks`,
                                description: `Light leaks make your photo pop with custom made film light leaks.
                                This effect can be used to make your photo look artsy and stylish.`,
                            },
                            ].map((item) => (
                                <div key={item.title} className="rounded-lg grid p-4 max-w-xs mx-auto" >
                                    <img className="h-16 w-16" src={item.icon} alt={item.title + " icon"} />
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="rounded-lg pt-32 xl:py-12 xl:px-8 text-gray-100 text-center">
                <h1 className="text-3xl m-3 font-bold">Handcrafted custom-made filters</h1>
                <p className="text-gray-300 w-3/4 mx-auto">
                    Kontax Cam provides filter collections that are made from emulating both classic film stocks and digital cameras look.
                    Experiment with the combination to create your own filter + effects combo!
                </p>
                <p className="text-gray-300 text-sm mt-4">{`Note: Send your photo captured with a filter via email to get it featured on the collection's cover page!`}</p>

                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-20">
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
        </Layout >
    );
}

export default IndexPage;
