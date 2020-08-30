import { graphql, useStaticQuery, Link } from "gatsby";
import React from 'react';

import DetailView from "./detailView.js"

function Header() {
    const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

    return (
        <nav className="sticky top-0 bg-blur" style={{ zIndex: '98' }}>
            <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-3">
                <Link to="/">
                    <h1 className="flex items-center text-white no-underline">
                        <img className="border border-gray-800 h-10 w-10 rounded-lg mr-4" src={require("../images/favicon.png")} alt="Kontax Cam logo" />
                        <span className="text-xl font-bold">
                            {site.siteMetadata.title}
                        </span>
                    </h1>
                </Link>

                <div className="flex">
                    <DetailView emoji="✍️" avatarStyle={SurveyFromWrapperStyles}>
                        <p className="text-center mt-3 w-3/4 text-xs text-gray-300">Help make Kontax Cam better by filling out the feedback survey form.</p>
                        <a className="mt-4 border-white text-white border py-1 px-2 rounded-lg text-sm" href="https://kontaxcam.typeform.com/to/RDApdKEH" target="_blank" rel="noopener noreferrer">Fill survey</a>
                    </DetailView>

                    <DetailView emoji="👨‍💻" avatarStyle={WorkWithUsWrapperStyles}>
                        <p className="text-center mt-3 w-3/4 text-xs text-gray-300">Interested in photography and willing to help out?</p>
                        <a className="mt-4 border-white text-white border py-1 px-2 rounded-lg text-sm" href="https://github.com/kxvn-lx/Kontax-Cam" target="_blank" rel="noopener noreferrer">Contribute on Github</a>
                    </DetailView>

                    <DetailView emoji="📸" avatarStyle={TakenWithKontaxWrapperStyles}>
                        <p className="text-center mt-3 w-3/4 text-xs text-gray-300">Submit your #TakenWithKontaxCam photo so that we can feature you!</p>
                        <p className="text-center mt-3 w-3/4 text-xs text-gray-300">Please upload the photo along with the filter used.</p>
                        <a className="mt-4 border-white text-white border py-1 px-2 rounded-lg text-sm" href="mailto:kevinlaminto.dev@gmail.com?subject=[Kontax Cam] #TakenWithKontaxCam&body=This photo is taken with *insert the filter used here*." target="_blank" rel="noopener noreferrer">Email photo</a>
                    </DetailView>
                </div>
            </div>
        </nav>
    );
}

export default Header;

const TakenWithKontaxWrapperStyles = {
    'backgroundImage': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
}

const WorkWithUsWrapperStyles = {
    'backgroundImage': 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
}

const SurveyFromWrapperStyles = {
    'backgroundImage': 'linear-gradient(120deg, #f093fb 0%, #f5576c 100%)'
}