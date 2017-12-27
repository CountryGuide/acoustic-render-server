import 'babel-polyfill';
import express from "express";
import compression from 'compression';
import logger from 'morgan';
import proxy from 'express-http-proxy';
import mongoose from 'mongoose';
import { render } from './helper/renderer';
import { storeCreator } from './helper/createStore';
import { Routes } from './client/Routes';
import { matchRoutes } from 'react-router-config';
import { UserSchema } from './models/Users';

mongoose.Promise = global.Promise;

const PORT = 3000;
const app  = express();

const User = mongoose.model('User');

app.use('/api', proxy('http://react-ssr-api.herokuapp.com/', {
    proxyReqOptDecorator (opts) {
        opts.headers['x-forwarded-host'] = 'localhost:3000';
        return opts;
    }
}));
app.use(compression());
app.use(logger('dev'));

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/react_ssr', { useMongoClient: true });
mongoose.set('debug', true);

app.use('/api2/newuser', async function (req, res, next) {
    const user = new User();

    user.username = 'unknown user';
    await user.save();

    res.json({message: `Successfully created ${user.username}`});
});

app.use('/api2/users', async (req, res, next) => {
    let users = await User.find({});
    res.send(users.map(user => user.username))
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
