import React from 'react'
import PropTypes from 'prop-types'

export default function featureView(props) {
    const iconName = props.iconName
    const title = props.title
    const description = props.description

    return (
        <div className="rounded-lg p-4 bg-gray-200">
            <div className="flex items-center">
                <img className="w-10" src={require('../images/' + iconName)} alt={title + 'icon'} />
                <h1 className="text-lg ml-4">{title}</h1>
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