import { graphql, useStaticQuery, Link } from "gatsby";
import React from 'react';

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
        <nav className="my-20" style={{ zIndex: '98' }}>
            <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-3">
                <Link to="/">
                    <p className="text-xl text-black">
                        {site.siteMetadata.title}
                    </p>
                </Link>

                <div className="text-kontax-secondary-text">
                    <p>Available for  soon</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;