import axios from "axios";


export function report(state={}, action) {
    console.log(action);
    const name = action.payload && action.payload.name;
    const value = action.payload && parseFloat(action.payload.value);
    const _state = {...state};
    switch (action.type) {
        case 'FORM_SUBMIT':
            const data = new FormData();
            const reverberationTime = Object.values(action.payload.rtValues);
            data.append('reverberation-time', JSON.stringify(reverberationTime));
            data.set('volume', action.payload.paramValues.volume);
            data.set('data', action.payload.files.data);
            data.set('air_mode', false.toString());
            axios.post(`http://localhost:5000/generate/`, data);
            return {
                ...state,
                formSubmit: true
            };
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
