import { combineReducers } from 'redux';
import { users } from './users';
import { auth } from "./auth";
import { admins } from "./admins";
import { report } from "./report";


export const combinedReducers = combineReducers({
    users:  users,
    auth:   auth,
    admins: admins,
    report: report
});
