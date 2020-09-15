import React from 'react'
import { Link } from "gatsby"

export default function footer() {
    return (
        <footer>
            <div className="flex text-center max-w-6xl p-3 mx-auto text-sm md:p-8">
                <div className="md:block md:items-center w-full">
                    <a
                        
                        href="https://www.twitter.com/kontaxcam" target="_blank" rel="noopener noreferrer">
                        Twitter
                    </a>
                    <a
                        
                        href="mailto:kevinlaminto.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                        Email
                    </a>
                    <Link to="/contributing">
                        Contributing
                    </Link>
                    <a
                        
                        href={'/press-kit.zip'} download>
                        Press Kit
                    </a>
                </div>
            </div>

            <div className="mb-10 text-sm text-kontax-secondary-text text-center block">
                <ul>
                    <li>© Kontax Cam</li>
                    <li><span className="inline-block">Made in Melbourne, Australia.</span></li>
                </ul>
            </div>
        </footer>
    )
}