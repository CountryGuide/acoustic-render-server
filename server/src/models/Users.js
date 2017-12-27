import mongoose from 'mongoose';


export const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        index: true
    }
});

mongoose.model('User', UserSchema);
