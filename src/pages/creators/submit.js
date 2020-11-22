import React, { useEffect } from 'react'
import SEO from '../../components/seo'

function submit() {
    // Hooks
    useEffect(() => {
        const script = document.createElement('script')

        script.src = 'https://static.airtable.com/js/embed/embed_snippet_v1.js'
        script.async = true

        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <React.Fragment>
            <SEO title='Creators submission' />

            <iframe
                className='airtable-embed airtable-dynamic-height'
                src='https://airtable.com/embed/shrhAKiLRCkI8aYOd?backgroundColor=gray'
                frameBorder='0'
                width='100%'
                height='1605'
            ></iframe>
        </React.Fragment>
    )
}

export default submit
