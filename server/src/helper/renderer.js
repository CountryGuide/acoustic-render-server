import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Routes } from '../client/Routes';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';


export function render (req, store) {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter context={{}} location={req.url}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    return `
        <!DOCTYPE html>
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script src='bundle.js'></script>
            </body>
        </html>
    `;
}