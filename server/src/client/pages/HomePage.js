import React from 'react';
import {Helmet} from "react-helmet";

const HomePage = () => {
    return (
        <div className={'center-align'} style={{ marginTop: '200px' }}>
            <Helmet>
                <title>React SSR</title>
                <meta property={'og:title'} content={'React SSR'}/>
            </Helmet>
            <h2>Welcome!</h2>
        </div>

    );
};

export default {
    component: HomePage
};