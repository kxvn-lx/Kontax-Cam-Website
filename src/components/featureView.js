import React from 'react'
import PropTypes from 'prop-types'

export default function featureView(props) {
    const { title, description } = props

    return (
        <div className='p-4'>
            <h1 className='font-medium'>{title}</h1>
            <p className='mt-4'>{description}</p>
        </div>
    )
}

featureView.propTypes = {
    iconName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}
