import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Image from '../components/imageShowcase'

function DevJournal() {
    return (
        <Layout>
            <SEO title='Kontax Cam' />
            <Fade>
                <div className='relative'>
                    <div className='mb-10'>
                        <h1 className='font-medium max-w-lg text-3xl'>
                            Dev Journal
                        </h1>
                        <p className='md:ml-10 text-kontax-secondary-text max-w-2xl text-justify'>
                            How Kontax Cam was built inside a tiny little room
                            in Melbourne, Australia.
                        </p>
                    </div>

                    <JournalWrapper className='mt-20'>
                        <p>
                            It was one fine evening - I was laying in bed
                            thinking what I could possibly do knowing that in a
                            few weeks, I'll be graduating from my University and
                            finally get my degree.
                        </p>

                        <h1>Inception</h1>
                        <Image imageName='j_1.jpg' className='my-10' />
                        <p>
                            I've always in love with{' '}
                            <a
                                href='https://www.kevinlaminto.com'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                photography
                            </a>
                            . Ever since I started iOS development, I've always
                            wanted to create some sort of a photography tool to
                            create a unique and aesthetic photo, and possibly
                            share it with the world.
                        </p>
                        <p>
                            Now there are heaps of photo-editing tools out
                            there. So creating one would be redundant! Hence why
                            I started to do research into an instant
                            camera-based application.
                        </p>

                        <h1>Design</h1>
                        <Image
                            imageName='j_2.jpeg'
                            className='mt-10 mb-4 md:w-1/2'
                        />
                        <p className='text-sm font-semibold'>
                            Taken with #kontaxcam
                        </p>
                        <p>
                            I tend to approach my UI in a minimalistic manner. I
                            love minimalist design principles and I think if
                            used correctly, it is a very beautiful and elegant
                            thing.
                        </p>
                        <p>
                            Kontax Cam was built around minimalism and
                            simplicity. My main goal was to allow users to
                            capture a gorgeous photo as quickly and easily as
                            possible.
                        </p>

                        <h1>Struggle</h1>
                        <Image imageName='j_3.jpeg' className='mt-10 mb-4' />
                        <p className='text-sm font-semibold'>
                            Taken with #kontaxcam
                        </p>
                        <p>
                            I'm not an expert. Heck, I just graduated! But armed
                            with gen-z mind and creativity, I was determined to
                            do my best. I built Kontax Cam in a span of ~2 to 3
                            months give or take.
                        </p>
                        <p>
                            It's quite a long journey since it was an on and off
                            project due to final year in Uni and my love with
                            procrastination. But after tons of japanese city pop
                            and jazz fusion songs later, I managed to finish the
                            app.
                        </p>

                        <h1>Result</h1>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-10 mb-4 gap-10'>
                            <Image imageName='j_4.jpeg' />
                            <Image imageName='j_5.jpeg' />
                        </div>

                        <p className='text-sm font-semibold'>
                            Taken with #kontaxcam
                        </p>
                        <p>
                            For my very first big project, I'm quite happy with
                            how in turned out. I still can't believe I did this
                            all by myself!
                        </p>
                        <p>
                            Now this is nowhere to be finished, and I will of
                            course be adding more features, effects, filters,
                            fixes and awesome stuff in the future! If you are
                            willing to help, got some cool ideas, wanted to add
                            your filters, don't hesitate to contact me.
                        </p>
                    </JournalWrapper>
                </div>
            </Fade>
        </Layout>
    )
}

export default DevJournal

const JournalWrapper = styled.div`
    p {
        margin-bottom: 2rem;
        margin-left: 0;
        max-width: 36rem;
    }

    h1 {
        margin-left: 0;
        max-width: 36rem;
        font-size: 1.5rem;
        font-weight: 500;
        margin-top: 5rem;
    }

    @media (min-width: 768px) {
        p,
        h1 {
            margin-left: 2.5rem;
        }
    }
`
