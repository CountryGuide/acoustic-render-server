import axios from "axios";


const request = {
    get: url => axios.get(url),
    post: (url, body) => axios.post(url, body)
};

const Report = {
    create: (rtValues, paramValues, files) => {
        const file = files.data;
        const data = new FormData();
        const reverberationTime = Object.values(rtValues);
        data.append('reverberation-time', JSON.stringify(reverberationTime));
        data.set('volume', JSON.stringify(paramValues.volume));
        data.set('data', file);
        data.set('air_mode', false.toString());
        return request.post(`/api/generate/`, data);
    }
};

export {
    Report
}
