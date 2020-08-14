import React from 'react'

export default function footer() {
    return (
        <footer>
        <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-6 text-white">
            <div className="md:block md:items-center w-full md:w-auto">
                {[
                    {
                        route: `https://www.twitter.com/kevinlx_`,
                        title: `Twitter`,
                    },
                    {
                        route: `mailto:kevinlaminto.dev@gmail.com`,
                        title: `Email`,
                    },
                ].map((link) => (
                    <a
                        key={link.title}
                        className="mt-4 text-white no-underline inline-block ml-6"
                        href={link.route} target="_blank" rel="noopener noreferrer">
                        {link.title}
                    </a>
                ))}
            </div>
        </div>
    </footer>
    )
}
