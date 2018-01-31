import React from 'react';
import {Helmet} from "react-helmet";

const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>AR</title>
                <meta property={'og:title'} content={'React SSR'}/>
            </Helmet>
            <h2>Welcome!</h2>
        </div>
    );
};

export default {
    component: HomePage
};
