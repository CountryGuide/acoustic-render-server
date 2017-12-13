import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { combinedReducers } from '../client/reducers';


export function storeCreator(req) {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: { cookie: req.get('cookie') || '' }
    });

    return createStore(combinedReducers, {}, applyMiddleware(thunk.withExtraArgument(axiosInstance)));
}