import React from 'react'

export default function footer() {
    return (
        <footer>
            <div className="flex justify-between max-w-6xl p-3 mx-auto text-sm md:p-8">
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
