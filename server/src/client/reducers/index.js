import { combineReducers } from 'redux';
import { users } from './users';


export const combinedReducers = combineReducers({
    users: users
});