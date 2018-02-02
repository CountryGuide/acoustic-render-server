export function report(state={}, action) {
    console.log(action);
    switch (action.type) {
        case 'FORM_SUBMIT':
            return {
                ...state,
                formSubmit: true
            };
        case 'RT_CHANGED':
            const name = action.payload.name;
            const value = parseFloat(action.payload.value);
            const _state = {...state};
            if (!_state.values) {
                _state.values = {}
            }
            _state.values[name] = value;
            return _state;
        default:
            return state;
    }
}
