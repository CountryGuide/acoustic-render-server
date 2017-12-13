import React from 'react';
import App from "./App";
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';


export const Routes =  [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users'
            }
        ]
    }
];
