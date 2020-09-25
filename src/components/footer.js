import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

export default function footer() {
    return (
        <FooterWrapper>
            <div className="text-center max-w-6xl p-3 mx-auto text-sm md:p-8">
                <UpperLink className="mb-4">
                    <a
                        href="https://www.twitter.com/kontaxcam" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/twitter.svg')} alt="twitter icon" />
                    </a>
                    <a
                        href="https://www.instagram.com/kontaxcam" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/instagram.svg')} alt="Instagram icon" />
                    </a>
                    <a
                        href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        <img src={require('../images/mail.svg')} alt="Email icon" />
                    </a>
                </UpperLink>

                <div>
                    <Link to="/contributing">
                        Contributing
                    </Link>
                    <Link to="/change-log">
                        Change log
                    </Link>
                    <Link to="/dev-journal">
                        Dev journal
                    </Link>
                    <a
                        href={'/press-kit.zip'} download>
                        Press Kit
                    </a>
                </div>
            </div>

            <div className="mb-10 text-sm text-kontax-secondary-text text-center block">
                <ul>
                    <li>© 2020 (not a good year) Kontax Cam</li>
                    <li><span className="inline-block">Made in Melbourne, Australia.</span></li>
                </ul>
            </div>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    a:hover {
        text-decoration: none;
    }
`

const UpperLink = styled.div`
    a {
        display: inline-block;
    }
`