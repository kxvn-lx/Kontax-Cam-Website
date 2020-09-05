import React from 'react'
import PropTypes from 'prop-types'

export default function featureView(props) {
    const iconName = props.iconName
    const title = props.title
    const description = props.description

    return (
        <div className="border border-gray-500 rounded-md p-4 bg-gray-900">
            <div className="flex items-center">
                <img className="w-8" src={require('../images/' + iconName)} alt={title + 'icon'} />
                <h1 className="text-lg ml-4">{title}</h1>
            </div>
            <p className="text-gray-300 mt-4">{description}</p>
        </div>
    )
}

featureView.propTypes = {
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};