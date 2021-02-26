import mongoose from 'mongoose';

export interface IMongoUser {
    _id?: string,
    _v?: number,
    username: string,
    googleId?: string,
    photoUrl?: string,
}

const User = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    googleId: {
        required: false,
        type: String
    },
    photoUrl: {
        required: false,
        type: String
    }
});

export default mongoose.model('User', User);