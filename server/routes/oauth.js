const express = require("express");
const passport = require("passport");
const { baseUrl, devUrl } = require("../config/baseUrl");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");
const router = express.Router();

router.get("/kakao", isNotLoggedIn, passport.authenticate("kakao"));

router.get(
    "/kakao/callback",
    isNotLoggedIn,
    passport.authenticate("kakao", {
        failureRedirect: baseUrl,
    }),
    (req, res) => {
        res.redirect(baseUrl);
    }
);

router.get(
    "/google",
    isNotLoggedIn,
    passport.authenticate("google", { scope: ["email"] })
);

router.get(
    "/google/callback",
    isNotLoggedIn,
    passport.authenticate("google", {
        failureRedirect: baseUrl,
    }),
    (req, res) => {
        res.redirect(baseUrl);
    }
);

module.exports = router;
