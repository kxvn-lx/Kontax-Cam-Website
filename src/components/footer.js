import React from 'react'
import { Link } from "gatsby"

import styled from 'styled-components'

export default function footer() {
    return (
        <div className="max-w-6xl w-full p-3 mx-auto md:p-8 mb-48">
            <h1 className="font-medium text-black">Kontax Cam</h1>
            <p>Designed and built with love in Melbourne, Australia</p>

            <div className="grid md:grid-cols-3 grid-cols-2 gap-10 my-20">
                <FooterLinks>
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">Email</a></li>
                        <li><a href="https://www.instagram.com/kontaxcam" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://www.twitter.com/kontaxcam" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </FooterLinks>

                <FooterLinks>
                    <h3>Information</h3>
                    <ul>
                        <li>
                            <Link to="/contributing">Contributing</Link>
                        </li>
                        <li>
                            <Link to="/change-log">Change log</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy">Privacy policy</Link>
                        </li>
                    </ul>
                </FooterLinks>

                <FooterLinks>
                    <h3>Others</h3>
                    <ul>
                        <li>
                            <Link to="/dev-journal">Dev Journal</Link>
                        </li>
                        <li><a href={'/press-kit.zip'} download>Press Kit</a></li>
                    </ul>
                </FooterLinks>
            </div>

            <p>© 2020 (not a good year) Kontax Cam</p>
        </div>
    )
}

const FooterLinks = styled.div`
    ul {
        margin-top: 1rem;
        li {
            margin-top: 0.25rem;
        }
    }
`