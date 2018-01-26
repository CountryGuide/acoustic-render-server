import { combineReducers } from 'redux';
import { users } from './users';
import { auth } from "./auth";
import { admins } from "./admins";


export const combinedReducers = combineReducers({
    users:  users,
    auth:   auth,
    admins: admins
});