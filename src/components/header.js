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
        <nav className="my-10 md:my-20" style={{ zIndex: '98' }}>
            <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto py-3">
                <Link to="/">
                    <p className="text-xl md:text-3xl font-extrabold text-black">
                        {site.siteMetadata.title}
                    </p>
                </Link>

                <div className="text-xs border p-1 md:p-2 rounded-lg border-kontax-secondary-text text-kontax-secondary-text">
                    <p>Available for  soon</p>
                </div>
            </div>
        </nav>
    );
}

export default Header;