import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combinedReducers } from '../client/reducers';


export function storeCreator() {
    return createStore(combinedReducers, {}, applyMiddleware(thunk));
}