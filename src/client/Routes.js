import React from 'react';
import App from "./App";
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from "./pages/NotFoundPage";
import AdminsPage from "./pages/AdminsPage";
import ReportPage from "./pages/ReportPage";


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
                ...UsersPage,
                path: '/users'
            },
            {
                ...AdminsPage,
                path: '/admins'
            },
            {
                ...ReportPage,
                path: '/report'
            },
            {
                ...NotFoundPage
            }
        ]
    }
];
