import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Fade from 'react-reveal/Fade'

function creators() {
    return (
        <Layout>
            <SEO title='Creators' />

            <Fade>
                <h1 className='font-medium max-w-lg text-3xl'>Creators</h1>
                <div className='md:ml-10'>
                    <p className='text-kontax-secondary-text max-w-2xl text-justify'>
                        Kontax Cam is built by creators, and for creators. If
                        you wished to join the community, this is for you!
                    </p>
                </div>

                <div className='mt-20'>
                    <Link to='/creators/submit'>Submit</Link>
                </div>
            </Fade>
        </Layout>
    )
}

export default creators
