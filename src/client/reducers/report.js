export function report(state={}, action) {
    console.log(action);
    const name = action.payload && action.payload.name;
    const value = action.payload && parseFloat(action.payload.value);
    const _state = {...state};
    switch (action.type) {
        case 'ASYNC_START':
            _state.inProgress = true;
            return _state;
        case 'FORM_SUBMIT':
            const path = action.payload.data && action.payload.data.path;
            _state.path = path;
            _state.inProgress = false;
            return _state;
        case 'RT_CHANGED':
            if (!_state.rtValues) {
                _state.rtValues = {}
            }
            _state.rtValues[name] = value;
            return _state;
        case 'PARAM_CHANGED':
            if (!_state.paramValues) {
                _state.paramValues = {}
            }
            _state.paramValues[name] = value;
            return _state;
        case 'FILE_UPLOAD':
            if (!_state.files) {
                _state.files = {}
            }
            _state.files['data'] = action.payload.file;
            return _state;
        default:
            return state;
    }
}
