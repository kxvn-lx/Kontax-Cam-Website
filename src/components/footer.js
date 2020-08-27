import React from 'react'
import styled, { keyframes } from 'styled-components'

export default function footer() {
    return (
        <footer>
            <div className="flex text-center max-w-6xl p-3 mx-auto text-sm md:p-8">
                <div className="md:block md:items-center w-full">
                    <a
                        className="mt-4 text-white no-underline inline-block"
                        href="https://www.twitter.com/kevinlx_" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a
                        className="mt-4 text-white no-underline inline-block ml-6"
                        href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <a
                        className="mt-4 text-white no-underline inline-block ml-6"
                        href={'/press-kit.zip'} download>
                        Press Kit
                    </a>
                </div>
            </div>

            <div className="mb-10 text-sm text-gray-500 text-center block">
                <ul>
                    <li>© Kontax Cam</li>
                    <DownUnderWraper><span className="inline-block">Made in Melbourne, Australia.</span></DownUnderWraper>
                </ul>
            </div>
        </footer>
    )
}

const DownUnderWraper = styled.li`
    span {
        transform: rotate(180deg);
        transition: 0.5s ease-in-out;

        &:hover {
            transform: rotate(0deg);
        }
    }
`
