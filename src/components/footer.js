import React from 'react'

export default function footer() {
    return (
        <footer>
            <div className="flex text-center max-w-6xl p-3 mx-auto text-sm md:p-8">
                <div className="md:block md:items-center w-full">
                    <a
                        className="mt-4 text-white no-underline inline-block"
                        href="https://www.twitter.com/kevinlx_" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a
                        className="mt-4 text-white no-underline inline-block ml-6"
                        href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <a
                        className="mt-4 text-white no-underline inline-block ml-6"
                        href={'/press-kit.zip'} download>
                        Press Kit
                    </a>
                </div>
            </div>

            <div className="flex max-w-6xl mx-auto mb-4 text-sm justify-between text-gray-500">
                <p>© Kontax Cam</p>
                <p>Made in Melbourne, Australia.</p>
            </div>
        </footer>
    )
}
