import React from 'react';

const HomePage = () => {
    return (
        <div>
            <div>Test nodemon</div>
            <button onClick={() => console.log('test')}>Press!</button>
        </div>

    );
};

export default {
    component: HomePage
};