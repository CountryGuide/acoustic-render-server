import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from "./components/Header";
import { fetchCurrentUser } from "./actions";
import {Helmet} from "react-helmet";


const App = ({ route }) => {
    return (
        <div>
            <Helmet>
                <meta name={'viewport'} content={'width=device-width, initial-scale=1'}/>
            </Helmet>
            <Header/>
            {renderRoutes(route.routes)}
        </div>
    );
};

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};