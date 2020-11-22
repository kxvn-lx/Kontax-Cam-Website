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
                        <li>
                            <Link to='/creators/'>
                                Creators <CreatorNew>New</CreatorNew>
                            </Link>
                        </li>
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
    background: #12c2e9; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        #f64f59,
        #c471ed,
        #12c2e9
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #f64f59,
        #c471ed,
        #12c2e9
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
`
