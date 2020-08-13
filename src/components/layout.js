import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen font-sans text-black bg-black">
            <Header />

            <main className="flex-1 w-full max-w-6xl px-4 py-8 mx-auto md:px-8 md:py-16 mb-40">
                {children}
            </main>

            <footer>
                <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-6 text-white">
                    <div className="md:block md:items-center w-full md:w-auto">
                        {[
                            {
                                route: `https://www.twitter.com/kevinlx_`,
                                title: `Twitter`,
                            },
                            {
                                route: `mailto:kevinlaminto.dev@gmail.com`,
                                title: `Email`,
                            },
                        ].map((link) => (
                            <a
                                key={link.title}
                                className="mt-4 text-white no-underline inline-block ml-6"
                                href={link.route} target="_blank" rel="noopener noreferrer">
                                {link.title}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
    );
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
