import React from "react";
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";
import SEO from "../components/seo";
import ImageShowcase from "../components/imageShowcase"

function Contributing() {
    return (
        <Layout>
            <SEO title="Kontax Cam" />
            <Fade>
                <ImageShowcase imageName="contributing.jpg" />
                <div className="md:w-2/4 mt-20 md:mt-40 relative">
                    <h1 className="font-bold text-2xl">Contributing to Kontax Cam</h1>
                    <p className="text-kontax-secondary-text">
                        By contributing to an open-source software, not only benefits you, but it also benefits the whole society.
                        This can be a one-time thing, contribute something and done, or a recurring thing. Whatever it is, it's your choice. You control your own decision.
                    </p>

                    <div className="mt-4">
                        <a href="https://github.com/kxvn-lx/Kontax-Cam" target="_blank" rel="noopener noreferrer">Github →</a>
                        <a className="ml-4" href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">Email →</a>
                    </div>
                </div>

                <div className="separator" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {
                        helpList.map(item => (
                            <div key={item.title} className="flex md:w-9/12 px-4 items-center">
                                <div>
                                    <h3 className="">{item.title}</h3>
                                    <p className="text-kontax-secondary-text">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="separator" />

                <p className="text-kontax-secondary-text">📍 Melbourne, Australia & remote</p>

            </Fade>
        </Layout>
    );
}

export default Contributing;

// Datasource
const helpList = (
    [
        {
            title: 'Graphic designer',
            description: `Create custom icons and assets for the app/website.`
        },
        {
            title: 'iOS Developer',
            description: `Optimise, and improve the app (Swift).`
        },
        {
            title: 'Photographer',
            description: `Creators, photographers, your photos featured.`
        },
        {
            title: 'UI/UX Designer',
            description: `Design and improve the app/website's UI and UX.`
        },
        {
            title: 'Your own role + ',
            description: `Surprise us!`
        }
    ]
)