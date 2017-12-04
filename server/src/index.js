import 'babel-polyfill';
import express from "express";
import compression from 'compression';
import logger from 'morgan';
import spdy from 'spdy';
import fs from 'fs';
import { render } from './helper/renderer';
import { storeCreator } from './helper/createStore';

const PORT = 3000;
const app  = express();

app.use(compression());
app.use(logger('dev'));

app.use(express.static('public'));

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'User1'
        },
        {
            id: 2,
            name: 'User2'
        }
    ]);
});

app.get('*', (req, res) => {
    const store = storeCreator();
    res.send(render(req, store));
});

const options = {
    key:  fs.readFileSync('./src/certificates/server.key'),
    cert: fs.readFileSync('./src/certificates/server.crt')
};

spdy
    .createServer(options, app)
    .listen(PORT, error => {
        if (error) {
            console.error(error);
            return process.exit(1);
        } else {
            console.log('Listening on port: ' + PORT + '.')
        }
    });
