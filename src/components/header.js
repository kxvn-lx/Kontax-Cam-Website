import { graphql, useStaticQuery, Link } from "gatsby";
import React from 'react';
import styled from 'styled-components'

import DetailView from "./detailView.js"

import KCLogo from "../images/favicon.png"

function Header() {
    const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <nav className="sticky top-0 bg-blur">
            <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="flex items-center text-white no-underline">
                        <img className="border border-gray-800 h-10 w-10 rounded-lg mr-4" src={KCLogo} alt="Kontax Cam logo" />
                        <span className="text-xl font-bold">
                            {site.siteMetadata.title}
                        </span>
                    </h1>
                </Link>

                <DetailView />
            </div>
        </nav>
    );
}

export default Header;