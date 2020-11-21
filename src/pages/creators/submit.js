import React from 'react'
import SEO from '../../components/seo'

function submit() {
    return (
        <React.Fragment>
            <SEO title='Creators submission' />

            <script src='https://static.airtable.com/js/embed/embed_snippet_v1.js'></script>
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
