import PropTypes from "prop-types";
import React from "react";
import { Provider } from "@lyket/react";

import Header from "./header";
import Footer from "./footer"

function Layout({ children }) {
    return (
        <Provider apiKey="[5020e31475475bc6e052cca82f632a]">
            <div className="flex flex-col min-h-screen font-sans text-white bg-black">
                <Header />

                <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 mb-40">
                    {children}
                </main>

                <Footer />
            </div>
        </Provider>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
