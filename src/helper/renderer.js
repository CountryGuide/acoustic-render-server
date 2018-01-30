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
              <script async src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit.min.js"></script>
              <script async src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/js/uikit-icons.min.js"></script>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.38/css/uikit.min.css"/>
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              ${helmet.link.toString()}
            </head>
            <body>
                <div id="root">${content}</div>
                <script >
                    window.INITIAL_STATE = ${serialize(store.getState())}
                </script>
                <script async src='bundle.js'></script>
            </body>
        </html>
    `;
}
