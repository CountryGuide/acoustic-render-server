import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import { combinedReducers } from '../client/reducers';


export function storeCreator() {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com'
    });

    return createStore(combinedReducers, {}, applyMiddleware(thunk));
}