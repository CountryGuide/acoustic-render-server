import 'babel-polyfill';
import express from "express";
import compression from 'compression';
import logger from 'morgan';
import proxy from 'express-http-proxy';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { render } from './helper/renderer';
import { storeCreator } from './helper/createStore';
import { Routes } from './client/Routes';
import { matchRoutes } from 'react-router-config';
import { TrackSchema } from './models/Track';

mongoose.Promise = global.Promise;

const PORT = 3000;
const app  = express();

const Track = mongoose.model('Track');

app.use('/api', proxy('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator (opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/react_ssr', { useMongoClient: true });
mongoose.set('debug', true);

app.use('/api2/newuser', async function (req, res, next) {
    let count = 0;

    for (let i = 0; i < 10001; i++) {
        const track = new Track();

        track.title = req.body.title;
        await track.save();
        count++;
    }

    res.json({message: `Successfully created ${count} tracks`});
});

app.use('/api2/users', async (req, res, next) => {
    let tracks = await Track.find({});
    res.send(tracks.map(track => track.title))
});

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


// const options = {
//     key:  fs.readFileSync('./src/certificates/server.key'),
//     cert: fs.readFileSync('./src/certificates/server.crt')
// };
//
// spdy
//     .createServer(options, app)
//     .listen(PORT, error => {
//         if (error) {
//             console.error(error);
//             return process.exit(1);
//         } else {
//             console.log('Listening on port: ' + PORT + '.')
//         }
//     });
