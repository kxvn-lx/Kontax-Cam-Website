import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

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
        <header className="">
            <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-6">
                <Link to="/">
                    <h1 className="flex items-center text-black no-underline">
                        <img className="h-10 w-10 rounded-lg mr-4" src={KCLogo} alt="Kontax Cam logo"/>
                        <span className="text-xl font-bold">
                            {site.siteMetadata.title}
                        </span>
                    </h1>
                </Link>
            </div>
        </header>
    );
}

export default Header;
