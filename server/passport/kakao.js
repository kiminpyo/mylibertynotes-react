const passport = require("passport");
const { Strategy: kakaoStrategy } = require("passport-kakao");
const { User } = require("../models");

module.exports = () => {
    passport.use(
        new kakaoStrategy(
            {
                clientID: process.env.REACT_APP_KAKAO_CLIENTID,
                clientSecret: process.env.REACT_APP_KAKAO_CLIENTSECRET,
                callbackURL: "/oauth/kakao/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    console.log(profile);
                    const exUser = await User.findOne({
                        where: {
                            email: profile._json.kakao_account.email,
                        },
                    });

                    if (exUser) {
                        done(null, exUser);
                    } else {
                        console.log(profile._json.kakao_account.email);
                        const newUser = await User.create({
                            email: profile._json.kakao_account.email,
                            nickname: profile._json.properties.nickname,
                            gender: profile._json.kakao_account.gender,
                            thumbnail: profile._json.properties.thumbnail_image,
                            token: accessToken,
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
