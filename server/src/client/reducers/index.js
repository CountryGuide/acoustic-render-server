import { combineReducers } from 'redux';
import { users } from './users';
import { auth } from "./auth";


export const combinedReducers = combineReducers({
    users: users,
    auth: auth
});