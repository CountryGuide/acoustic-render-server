import mongoose from 'mongoose';


export const TrackSchema = new mongoose.Schema({
    title: {
        type: String,
        index: true
    }
});

mongoose.model('Track', TrackSchema);
