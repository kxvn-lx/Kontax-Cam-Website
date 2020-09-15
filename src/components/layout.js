import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import Footer from "./footer"

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-kontax-white text-black px-4">
        <Header />

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
