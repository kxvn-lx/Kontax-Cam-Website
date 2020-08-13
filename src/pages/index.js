import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import image1 from "../images/image1.png"
import colorIcon from "../images/color.icon.png"
import dustIcon from "../images/dust.icon.png"
import grainIcon from "../images/grain.icon.png"
import leakIcon from "../images/leak.icon.png"

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                title="Home"
            />

            <div className="bg-black rounded-lg py-32 px-8 text-gray-100 text-center">
                <div className="w-full xl:w-9/12 mx-auto">
                    <span className="bg-gray-800 rounded-full p-3 font-bold" >Kontax Cam</span>
                    <h1 className="lg:text-5xl text-4xl m-3 font-bold">Instant camera hybrid for films and digital photographers, by photographers.</h1>
                    <p className="text-gray-400 w-3/4 mx-auto">
                        Minimalist instant camera optimised for iOS device.
                        Built with precision and love, Kontax Cam provides custom
                        real film effects and filters to emulate 35mm film footage,
                        while allow photographers to blend in digital aspect to make
                        a unique masterpiece.
                </p>
                    <a
                        className="text-white p-3 m-10 font-bold bg-blue-600 rounded-lg inline-block"
                        href="https://testflight.apple.com/join/MzTKHQdv"
                        target="_blank"
                        rel="noopener noreferrer">
                        Join the Beta
                </a>
                </div>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mt-10">
                <div className="bg-gray-200 rounded-lg px-3 py-20 md:col-span-1">
                    <div className="text-center mb-5 mx-auto">
                        <h1 className="font-bold text-3xl mt-4">Your masterpiece,<br />one tap away.</h1>
                        <p className="text-gray-700">Access all the power of <span className="font-bold">Kontax Cam</span> with just a tap away.</p>
                    </div>
                    <img className="w-10/12 h-auto mx-auto" src={image1} alt="Kontax Cam User interface" />
                </div>

                <div className="bg-gray-200 rounded-lg px-3 py-20 md:col-span-2">
                    <h1 className="font-bold text-3xl mt-4">All effects... and counting</h1>
                    <p className="text-gray-700">All of these handcrafted effects, plus more in the future!</p>

                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
                        <div className="bg-gray-300 rounded-lg grid p-4 max-w-xs mx-auto">
                            <img className="h-16 w-16" src={colorIcon} alt="Color leaks icon" />
                            <h3 className="font-bold text-xl">Colour leaks</h3>
                            <p className="text-gray-700">
                                Colour leaks add a gorgeous film colour overlay into your photo.
                                Currently, Kontax Cam provides three different colours: red, green, and blue.
                            </p>
                        </div>

                        <div className="bg-gray-300 rounded-lg grid p-4 max-w-xs mx-auto">
                            <img className="h-16 w-16" src={dustIcon} alt="Dust icon" />
                            <h3 className="font-bold text-xl">Film dust</h3>
                            <p className="text-gray-700">
                                Dust allows you to overlay your photo with real film dust.
                                This effect is best used with a film/vintage filter to make
                                it more unique.
                            </p>
                        </div>

                        <div className="bg-gray-300 rounded-lg grid p-4 max-w-xs mx-auto">
                            <img className="h-16 w-16" src={grainIcon} alt="Grain icon" />
                            <h3 className="font-bold text-xl">Grain</h3>
                            <p className="text-gray-700">
                                Grain makes your photo looks sharp, scratched and old school!
                                Although ecessive use might render the photo too over-sharpen,
                                grain is beloved in the heart of film photographers.
                            </p>
                        </div>

                        <div className="bg-gray-300 rounded-lg grid p-4 max-w-xs mx-auto">
                            <img className="h-16 w-16" src={leakIcon} alt="Light leaks icon" />
                            <h3 className="font-bold text-xl">Film light leaks</h3>
                            <p className="text-gray-700">
                                Light leaks make your photo pop with custom made film light leaks.
                                It is a process where the film is exposed to too much light caused by a fault
                                int the camera body, or some circumstance. Again, loved in the film community!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
