import React from 'react';


const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true;
    return (
        <div className={'center-align'} style={{ marginTop: '200px' }}>
            <h1>404</h1>
            <p>Page not found!</p>
        </div>
    )
};

export default {
    component: NotFoundPage
}
