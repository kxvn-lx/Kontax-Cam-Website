import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'

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
    `)

    return (
        <NavWrapper className='my-10 md:my-20' style={{ zIndex: '98' }}>
            <div className='flex flex-wrap items-center justify-between max-w-5xl mx-auto py-3'>
                <Link to='/'>
                    <p className='text-xl md:text-2xl font-bold text-black'>
                        {site.siteMetadata.title}
                    </p>
                </Link>

                <div className='text-xs text-kontax-secondary-text'>
                    <ul className='flex items-center'>
                        {/* <li>
                            <Link to='/creators/'>
                                Creators <CreatorNew>New</CreatorNew>
                            </Link>
                        </li> */}
                        <li className='ml-4'>
                            <p className='border  p-1 md:p-2 rounded-lg border-kontax-secondary-text'>
                                Available for 
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </NavWrapper>
    )
}

export default Header

const NavWrapper = styled.nav`
    a:hover {
        text-decoration: none;
    }
`
const CreatorNew = styled.span`
    position: relative;
    top: -10px;
    background-image: linear-gradient(
        to right,
        #ff8177 0%,
        #ff867a 0%,
        #ff8c7f 21%,
        #f99185 52%,
        #cf556c 78%,
        #b12a5b 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
`
