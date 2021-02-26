import passport from 'passport';

const enablePassport = () => {
    passport.serializeUser((user: any, done: any) => {
        return done(null, user);    
    });
    passport.deserializeUser((user: any, done: any) => {
        return done(null,user);
    });
}

export default enablePassport;