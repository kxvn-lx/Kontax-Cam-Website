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
                <div className='mb-20 w-full md:w-2/3 mx-auto'>
                    <ImageShowcase imageName='creators.JPG' />
                </div>
                <h1 className='font-medium max-w-lg text-3xl'>Creators</h1>
                <div className='md:ml-10 text-kontax-secondary-text max-w-2xl text-justify'>
                    <p>
                        Kontax Cam is built by creators, and for creators. If
                        you wished to join the community, this is for you!
                    </p>
                    <p className='mt-4'>
                        For now, you can be a part of the community by
                        submitting your filter collections. It will be reviewed,
                        and once we everything is clear, it will be added to our
                        filter sections in app!
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
