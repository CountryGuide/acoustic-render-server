import 'babel-polyfill';
import express from "express";
import compression from 'compression';
import logger from 'morgan';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import proxy from 'express-http-proxy';
import path from 'path';
import { render } from './helper/renderer';
import { storeCreator } from './helper/createStore';
import { Routes } from './client/Routes';
import { matchRoutes } from 'react-router-config';

const PORT = process.env.PORT || 3000;
const app  = express();

// app.use('/api', proxy('http://localhost:5000/'));
app.use('/api', proxy('http://acoustic-api.herokuapp.com/', {
    https: true
}));

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(path.join('src', 'favicon', 'favicon.ico')));
app.use(express.static('public'));


app.get('*', async (req, res) => {
    const store = storeCreator(req);

    const promises = matchRoutes(Routes, req.url)
        .map(({ route }) => {
            return route.loadData ? route.loadData(store) : null;
        })
        .map(promise => {
            if (promise) {
                return new Promise((resolve, reject) => {
                    promise.then(resolve).catch(resolve);
                });
            }
        });

    await Promise.all(promises);

    const context = {};
    const content = render(req, store, context);

    if (context.url) {
        return res.redirect(301, context.url);
    }
    if (context.notFound) {
        res.status(404);
    }

    res.send(content);
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`);
});
