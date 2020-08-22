import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function DetailView(props) {
    const [isVisible, toggleVisibility] = useState(false)

    return (
        <div className="relative" style={props.emoji != '📸' ? { marginRight: '-10px' } : { marginRight: '0' }}>
            <AvatarWrapper
                style={props.avatarStyle}
                onMouseEnter={() => toggleVisibility(true)}
                onMouseLeave={() => toggleVisibility(false)}
                className="h-8 w-8 justify-center flex items-center rounded-full text-xl">
                <span>{props.emoji}</span>
            </AvatarWrapper>

            <HoverView
                onMouseEnter={() => toggleVisibility(true)}
                onMouseLeave={() => toggleVisibility(false)}
                className={
                    `${isVisible ? `block` : `hidden`}
                flex justify-center flex-wrap items-start content-start pt-4 rounded-lg border border-gray-900`
                }>
                <AvatarWrapper className="h-12 w-12 justify-center flex items-center rounded-full text-3xl" style={props.avatarStyle}>
                    <span>{props.emoji}</span>
                </AvatarWrapper>
                {props.children}
            </HoverView>
        </div>
    )
}

DetailView.propTypes = {
    emoji: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    avatarStyle: PropTypes.style
}

const AvatarWrapper = styled.div`
    box-shadow: 0 14px 28px rgba(0,0,0,0.5), 0 10px 10px rgba(0, 0, 0, 1);

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