export function report(state={}, action) {
    console.log(action.type);
    switch (action.type) {
        case 'FORM_SUBMIT':
            return {
                ...state,
                formSubmit: true
            };
        default:
            return state;
    }
}
