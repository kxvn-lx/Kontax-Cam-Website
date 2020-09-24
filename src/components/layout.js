import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components'

import Header from "./header";
import Footer from "./footer"

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-black px-4">
            <Header />

            <PHWrapper href="https://www.producthunt.com/posts/kontax-cam-for-ios?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kontax-cam-for-ios" target="_blank" rel="noopener noreferrer">
                <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=261842&theme=light" alt="Kontax Cam for iOS - Instant camera hybrid app for photographers. | Product Hunt Embed" />
            </PHWrapper>

            <main className="flex-1 w-full max-w-5xl py-8 mx-auto md:py-16 mb-40">
                {children}
            </main>

            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;

const PHWrapper = styled.a`
    z-index: 99;
    position: fixed;
    bottom: 20px;
    left: 20px;
    img {
        width: 12.5rem;
    }

    @media (max-width: 768px) {
        img {
            width: 10rem;
        }
  }
`