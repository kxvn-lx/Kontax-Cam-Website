import React from "react";
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="Kontax Cam" />
            <div className="rounded-lg pt-32 xl:py-12 xl:px-8 text-gray-100 text-center">
                <div className="w-full xl:w-9/12 mx-auto">
                    <h1 className="lg:text-5xl text-3xl m-3 font-bold">Page not found</h1>
                    <Link className="p-3 m-10 font-bold bg-blue-600 shadow-blue-600 rounded-lg inline-block" to="/">
                        Return to home
                    </Link>
                </div>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
