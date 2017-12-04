import express from "express";
import compression from 'compression';
import logger from 'morgan';
import spdy from 'spdy';
import fs from 'fs';
import { render } from './helper/renderer';

const PORT = 3000;
const app  = express();

app.use(compression());
app.use(logger('dev'));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(render());
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
