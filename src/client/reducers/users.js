import { FETCH_USERS } from '../actions';

export function users(state=[], action) {
    // console.log(action);
    switch (action.type) {
        case FETCH_USERS:
            return action.payload.data;
        case 'USERS_LIST_SORTED':
            return action.payload.users;
        default:
            return state;
    }
}
