import React, { useState } from 'react'
import styled from 'styled-components'

export default function DetailView() {
    const [isVisible, toggleVisibility] = useState(false)

    return (
        <div className="relative">
            <PhotographersAvatar
                onMouseEnter={() => toggleVisibility(true)}
                onMouseLeave={() => toggleVisibility(false)}
                className="h-8 w-8 justify-center flex items-center rounded-full text-xl">
                <span>📸</span>
            </PhotographersAvatar>

            <HoverView
                onMouseEnter={() => toggleVisibility(true)}
                onMouseLeave={() => toggleVisibility(false)}
                className={
                    `${isVisible ? `block` : `hidden`}
                flex justify-center flex-wrap items-start content-start pt-4 rounded-lg border border-gray-900`
                }>
                <PhotographersAvatar className="h-12 w-12 justify-center flex items-center rounded-full text-3xl">
                    <span>📸</span>
                </PhotographersAvatar>
                <p className="text-center mt-3 w-3/4 text-xs text-gray-300">Submit your #TakenWithKontaxCam photo so that we can feature you!</p>
                <a className="mt-4 border-white text-white border py-1 px-2 rounded-lg text-sm" href="mailto:kevinlaminto.dev@gmail.com?subject=[Kontax Cam] #TakenWithKontaxCam">Email photo</a>
            </HoverView>
        </div>
    )
}

const PhotographersAvatar = styled.div`
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    span {
        pointer-events: none;
    }
`

const HoverView = styled.div`
    position: absolute;
    right: 0px;
    top: 60px;
    width: 180px;
    height: 215px;
    transition: all 0.25s ease-in-out;
    backdrop-filter: blur(12px) saturate(100%);
    -webkit-backdrop-filter: blur(12px) saturate(100%);
    background-color: rgba(0,0,0,0.5);

    @media only screen and (min-width: 768px) {
        top: 32.5px;
    }
`