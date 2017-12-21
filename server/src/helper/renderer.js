import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { Routes } from '../client/Routes';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { Helmet } from "react-helmet";


export function render (req, store, context) {
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.url}>
                <div>{renderRoutes(Routes)}</div>
            </StaticRouter>
        </Provider>
    );

    const helmet = Helmet.renderStatic();

    return `
        <!DOCTYPE html>
        <html>
            <head>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
            </head>
            <body>
                <div id="root">${content}</div>
                <script >
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script src='bundle.js'></script>
            </body>
        </html>
    `;
}