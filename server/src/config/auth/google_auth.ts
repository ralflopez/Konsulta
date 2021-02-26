import dotenv from 'dotenv';
import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth20').Strategy;
import User, { IMongoUser } from '../../Schema/User';

dotenv.config();

const enableGoogleAuth = () => {
  return passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  async function(accessToken: any, refreshToken: any, profile: any, cb: any) {
    //return mongo db doc
    try {
      const doc = await User.findOne({ googleId: profile.id });

      if(!doc) {
        const newUser = new User({
          username: profile.displayName,
          googleId: profile.id,
          photoUrl: profile.photos[0].value
        });

        await newUser.save();
        return cb(null, newUser);
      }
      return cb(null, doc);
    }
    catch(err) {
      return cb(err, null);
    }
  }
  ));
}

export default enableGoogleAuth;