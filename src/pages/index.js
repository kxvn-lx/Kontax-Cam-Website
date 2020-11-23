import React from 'react'
import Fade from 'react-reveal/Fade'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Modal from '../templates/kontaxModal/kontaxModal'
import ShowcaseView from '../components/showcaseView'
import FeatureView from '../components/featureView'
import ImageShowcase from '../components/imageShowcase'

import { features } from '../datas/features'

function IndexPage() {
    return (
        <React.Fragment>
            <section className='px-4 py-10 text-center md:flex justify-center'>
                <p>
                    We're on Product Hunt — your support means everything to us
                </p>
                <a
                    className='md:ml-4'
                    href='https://www.producthunt.com/posts/kontax-cam-for-ios?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-kontax-cam-for-ios'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    Check us out
                </a>
            </section>
            <Layout>
                <SEO
                    keywords={[
                        `kontaxcam`,
                        `kontax cam`,
                        `photo editor ios`,
                        `instant camera`,
                    ]}
                    title='Kontax Cam'
                />

                <Fade>
                    <section className='grid grid-cols-1 gap-10 mx-auto'>
                        <div className='text-center m-auto'>
                            <h1 className='fluid text-3xl font-bold mt-4 w-full md:max-w-xl'>
                                The instant camera hybrid app for creative
                                people and photographers.
                            </h1>
                            <p className='mx-auto mt-4 w-full md:max-w-xl'>
                                Minimalist instant camera app optimised for any
                                iOS device. Built with precision and love,
                                Kontax Cam provides custom real film effects and
                                filters to emulate 35mm film footage, while
                                allowing photographers to blend in digital
                                aspects to make a unique masterpiece.
                            </p>
                            <div className='mt-20'>
                                <a
                                    className='main-button'
                                    href='https://apps.apple.com/app/kontax-cam/id1527110773'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    Download
                                </a>

                                <div className='mt-10'>
                                    <Modal modalTitle='Or scan the barcode'>
                                        <div className='w-3/4 mx-auto'>
                                            <img
                                                className='h-40 w-40 mx-auto'
                                                style={{
                                                    borderRadius: '1.25rem',
                                                }}
                                                src={require('../images/barcode.jpg')}
                                                alt='Kontax Cam barcode'
                                            />
                                            <p className='mt-4'>
                                                Scan the barcode with your
                                                camera to open it on the app
                                                store
                                            </p>
                                        </div>
                                    </Modal>
                                </div>
                            </div>
                        </div>

                        <div className='w-full md:max-w-lg mx-auto'>
                            <ImageShowcase imageName='001_ex.png' />
                        </div>
                    </section>
                </Fade>

                <div className='separator' />

                {/* Showcases */}
                <section className='mt-10'>
                    <ShowcaseView />
                </section>

                <div className='separator' />

                {/* Features */}
                <section className='mt-20'>
                    <h1 className='font-medium text-2xl md:text-3xl text-center'>
                        Why you'll love
                        <br />
                        Kontax Cam
                    </h1>
                    <Fade>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mt-20 md:max-w-3xl mx-auto'>
                            {features.map((item) => (
                                <FeatureView key={item.title} {...item} />
                            ))}
                        </div>
                    </Fade>
                </section>

                <div className='text-center mt-20'>
                    <a
                        className='main-button mx-auto'
                        href='https://apps.apple.com/app/kontax-cam/id1527110773'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Download
                    </a>
                </div>
            </Layout>
        </React.Fragment>
    )
}

export default IndexPage
