import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function NotFoundPage() {
    return (
        <Layout>
            <SEO title="404: Not found" />
            <div className="flex h-screen m-auto">
                <h1 className="text-6xl font-bold">Page not found</h1>
            </div>
        </Layout>
    );
}

export default NotFoundPage;
