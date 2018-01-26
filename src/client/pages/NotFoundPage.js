import React from 'react';
import {Helmet} from "react-helmet";


const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <div>
            <Helmet>
                <title>Page not found</title>
            </Helmet>
            <h1>404</h1>
            <p>Page not found!</p>
        </div>
    )
};

export default {
    component: NotFoundPage
}
