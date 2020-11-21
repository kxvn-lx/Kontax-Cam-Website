import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

import Fade from 'react-reveal/Fade'
import ImageShowcase from '../../components/imageShowcase'

function creators() {
    return (
        <Layout>
            <SEO title='Creators' />

            <Fade>
                <ImageShowcase imageName='creators.JPG' className='mb-4' />
                <h1 className='font-medium max-w-lg text-3xl'>Creators</h1>
                <div className='md:ml-10'>
                    <p className='text-kontax-secondary-text max-w-2xl text-justify'>
                        Kontax Cam is built by creators, and for creators. If
                        you wished to join the community, this is for you!
                    </p>
                </div>

                <div className='text-center'>
                    <Link
                        className='px-6 py-3 font-bold bg-black text-white rounded-lg inline-block mt-20 no-underline'
                        to='/creators/submit'
                    >
                        Submit
                    </Link>
                </div>
            </Fade>
        </Layout>
    )
}

export default creators
