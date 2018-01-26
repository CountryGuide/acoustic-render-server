import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";
import {Helmet} from "react-helmet";
import Footer from "./components/Footer";


const App = ({ route }) => {
    return (
        <div className='application'>
            <Helmet>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
                <link rel={'stylesheet'} type={'text/css'} href={'styles/main.css'}/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css" />
            </Helmet>
            <Header/>
            {renderRoutes(route.routes)}
            <Footer/>
        </div>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
