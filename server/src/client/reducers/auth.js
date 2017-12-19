import { FETCH_CURRENT_USER } from '../actions';


export function auth(state=null, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_CURRENT_USER:
            return action.payload.data || false;
        default:
            return state;
    }
}