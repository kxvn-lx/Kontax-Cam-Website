import { graphql, useStaticQuery, Link } from "gatsby";
import React from 'react';

import styled from 'styled-components'

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
        <NavWrapper className="my-10 md:my-20" style={{ zIndex: '98' }}>
            <div className="flex flex-wrap items-center justify-between max-w-5xl mx-auto py-3">
                <Link to="/">
                    <p className="text-xl md:text-2xl font-medium text-black">
                        {site.siteMetadata.title}
                    </p>
                </Link>

                <div className="text-xs border p-1 md:p-2 rounded-lg border-kontax-secondary-text text-kontax-secondary-text">
                    <p>Available for </p>
                </div>
            </div>
        </NavWrapper>
    );
}

export default Header;

const NavWrapper = styled.nav`
    a:hover {
        text-decoration: none;
    }
`