const passport = require("passport");

const { User } = require("../models");
const google = require("./google");
const kakao = require("./kakao");
const local = require("./local");

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id, user.token);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findOne({
                where: { id },
            });
            done(null, user);
        } catch (error) {
            console.error(error);
            done(error);
        }
    });
    local();
    kakao();
    google();
};
