import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {
    return (
        <Layout>
            <SEO
                keywords={[`kevin laminto`, `kevinlaminto`, `kontaxcam`, `kontax cam`]}
                title="Home"
            />

            <section className="bg-black rounded-lg p-8 text-gray-100 text-center">
                <span className="bg-gray-900 rounded-full p-3 font-bold" >Kontax Cam</span>
                <h1 className="lg:text-5xl text-4xl m-3 font-bold">Instant camera hybrid for creators, by creators.</h1>
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
            </section>
        </Layout>
    );
}

export default IndexPage;
