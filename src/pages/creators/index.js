import React from 'react'
import { Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import styled from 'styled-components'

import Fade from 'react-reveal/Fade'

function creators() {
    return (
        <CreatorWrapper className='overflow-auto px-4'>
            <nav className='flex flex-wrap items-center justify-between max-w-5xl mx-auto py-3 my-10 md:my-20'>
                <Link to='/' className='hover:no-underline'>
                    <p className='text-xl md:text-2xl font-bold'>Kc.</p>
                </Link>
            </nav>

            <section className='flex-1 w-full max-w-xl mx-auto py-8 md:py-16 mb-40 text-white'>
                <h1 className='font-medium max-w-lg text-3xl'>Creators</h1>
                <p className='mt-4'>
                    Kontax Cam is built by creators, and for creators. If you
                    wished to join the community, this is for you.
                </p>
                <p className='mt-4'>
                    For now, you can be a part of the community by submitting
                    your filter collections. It will be reviewed, and once we
                    everything is clear, our team will reach out to get your
                    collection added to the Kontax Cam library.
                </p>

                <ButtonWrapper className='inline-grid md:flex items-center mt-10 gap-4'>
                    <Link
                        to='/creators/submit'
                        className='px-6 py-3 font-bold bg-white text-black rounded-lg'
                    >
                        Submit your collection
                    </Link>
                    <a
                        href='mailto:kevinlaminto.dev@gmail.com'
                        className='px-6 py-3 border-white border rounded-lg text-white'
                    >
                        Got question? Contact Us.
                    </a>
                </ButtonWrapper>
            </section>
        </CreatorWrapper>
    )
}

export default creators

const CreatorWrapper = styled.div`
    background: url(${require('../../images/creators.png')}) rgba(0, 0, 0, 0.5);
    background-size: cover;
    background-blend-mode: multiply;

    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;

    p {
        color: white;
    }
`

const ButtonWrapper = styled.div`
    a:hover {
    }
`
