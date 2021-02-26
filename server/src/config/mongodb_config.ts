import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectToMongo = () => {
    const uri: string = process.env.MONGO_URI!
    return mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true})
            .then(() => console.log('connected to db'));
}

export default connectToMongo;