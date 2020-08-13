import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-black bg-gray-100">
            <Header />

            <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 mb-40">
                {children}
            </main>
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
