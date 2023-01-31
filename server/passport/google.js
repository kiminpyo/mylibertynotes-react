const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { User } = require("../models");

module.exports = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.REACT_APP_GOOGLE_CLIENTID,
                clientSecret: process.env.REACT_APP_GOOGLE_CLIENTSECRET,
                callbackURL: `/oauth/google/callback`,
            },
            async (accessToken, refreshToken, profile, done) => {
                console.log(profile);
                try {
                    console.log(accessToken, refreshToken);
                    console.log(profile.emails[0].value);
                    const exUser = await User.findOne({
                        where: {
                            email: profile.emails[0].value,
                        },
                    });

                    if (exUser) {
                        done(null, exUser);
                    } else {
                        const newUser = await User.create({
                            email: profile.emails[0].value,
                        });
                        done(null, newUser);
                    }
                } catch (err) {
                    console.error(err);
                    return done(err);
                }
            }
        )
    );
};
