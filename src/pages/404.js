import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

function NotFoundPage() {
    return (
        <Layout>
            <SEO title='Kontax Cam' />
            <div className='pt-32 xl:py-12 xl:px-8 text-center'>
                <div className='w-full xl:w-9/12 mx-auto'>
                    <h1 className='text-2xl font-bold mt-4'>Page not found</h1>
                    <Link
                        className='px-6 py-3 font-bold bg-black text-white rounded-lg inline-block mt-20'
                        to='/'
                    >
                        Return to home
                    </Link>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage
