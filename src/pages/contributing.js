import React from "react";
import Fade from 'react-reveal/Fade';

import Layout from "../components/layout";
import SEO from "../components/seo";

function Contributing() {
    return (
        <Layout>
            <SEO title="Kontax Cam" />
            <Fade>
                <div className="relative">
                    <h1 className="font-bold max-w-lg text-2xl md:text-6xl">Contributing to Kontax Cam</h1>
                    <div className="md:ml-10">
                        <p className="text-kontax-secondary-text max-w-2xl text-justify text-lg md:text-2xl">
                            By contributing to an open-source software, not only benefits you, but it also benefits the whole society.
                            This can be a one-time thing, contribute something and done, or a recurring thing. Whatever it is, it's your choice. You control your own decision.
                        </p>

                        <div className="mt-4">
                            <a href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">Email →</a>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
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

                <p className="mt-20">Melbourne, Australia & remote</p>

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
            title: 'Translator',
            description: `We need you to make Kontax Cam localized to as much language as possible!`
        },
        {
            title: 'Your own role + ',
            description: `Surprise us!`
        }
    ]
)