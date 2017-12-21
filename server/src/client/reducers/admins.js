import { FETCH_ADMINS } from '../actions';

export function admins(state=[], action) {
    switch (action.type) {
        case FETCH_ADMINS:
            return action.payload.data;
        default:
            return state;
    }
}
