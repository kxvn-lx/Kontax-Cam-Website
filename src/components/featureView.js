import React from 'react'
import PropTypes from 'prop-types'

export default function featureView(props) {
    const title = props.title
    const description = props.description

    return (
        <div className="p-4">
            <div className="">
                <h1 className="font-bold">{title}</h1>
            </div>
            <p className="text-kontax-secondary-text mt-4">{description}</p>
        </div>
    )
}

featureView.propTypes = {
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};