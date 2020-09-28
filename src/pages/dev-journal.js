import React from "react";
import Fade from 'react-reveal/Fade';
import styled from 'styled-components'

import Layout from "../components/layout";
import SEO from "../components/seo";

function DevJournal() {
    return (
        <Layout>
            <SEO title="Kontax Cam" />
            <Fade>
                <div className="relative">
                    <div className="mb-10">
                        <h1 className="font-bold max-w-lg text-2xl md:text-6xl">Dev Journal</h1>
                        <p className="md:ml-10 text-kontax-secondary-text max-w-2xl text-justify text-lg md:text-2xl">
                            Documenting how Kontax Cam was built inside a tiny little room in Melbourne, Australia.
                    </p>
                    </div>

                    <p className="mt-20 text-center">Coming soon</p>

                    {/* <JournalWrapper className="max-w-xl mt-20">
                        <p>It was one fine evening - I was laying in bed thinking what I could possibly do knowing that in a few weeks, I'll be graduating from my University and finally get my degree.</p>

                        <h1>Inception</h1>
                        <p>I've always in love with <a href="https://www.kevinlaminto.com" target="_blank" rel="noopener noreferrer">photography</a>. Ever since I started iOS development, I've always wanted to create some sort of a photography tool to create a unique and aesthetic photo, and possibly share it with the world.</p>
                        <p>Now there are heaps of photo-editing tools out there. So creating one would be redundant! Hence why I started to do research into an instant camera-based application.</p>

                        <h1>Design</h1>
                        <p>I tend to approach my UI in a minimalistic manner. I love minimalist design principles and I think if used correctly, it is a very beautiful and elegant thing.</p>
                        <p>Kontax Cam was built around minimalism and simplicity. My main goal was to allow users to capture a gorgeous photo as quickly and easily as possible.</p>

                        <h1>Struggle</h1>
                        <p>I'm not an expert. Heck, I just graduated! Armed with gen-z mind and creativity, I think I could make it. I built Kontax Cam in a span of ~2 to 3 months give or take.</p>
                        <p>It's quite a long journey since it was an on and off project due to final year in Uni and my love with procrastination. But after tons of japanese city pop and jazz fusion songs later, I managed to finish the app.</p>
                    </JournalWrapper> */}

                    <div className="separator"></div>
                </div>
            </Fade>
        </Layout>
    );
}

export default DevJournal;

const JournalWrapper = styled.div`
    p {
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        margin-top: 5rem;
    }
`