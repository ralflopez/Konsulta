import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongo from './config/mongodb_config';
import enablePassport from './config/auth/passport';
import enableGoogleAuth from './config/auth/google_auth';
import session from 'express-session';
import passport from 'passport';
import authRoute from './routes/auth_passport';
import baseRoute from './routes/base';

// variables
const app = express();
export const frontend_url: string = 'http://localhost:3000';
export const backend_url: string = 'http://localhost:5000';

// config functions
dotenv.config();
connectToMongo();
enablePassport();
enableGoogleAuth();

// middleware
app.use(express.json());
app.use(express .urlencoded({ extended: false }));
app.use(cors({
    origin: frontend_url,
    credentials: true
}));
app.use(session({
    secret: 'secrethere',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', baseRoute);
app.use('/auth', authRoute);

//server
const PORT: string | number = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running at port ' + PORT);
});