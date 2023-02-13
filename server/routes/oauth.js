const express = require("express");
const passport = require("passport");
const { baseUrl, devUrl } = require("../config/baseUrl");

const router = express.Router();

router.get("/kakao", passport.authenticate("kakao"));

router.get(
    "/kakao/callback",
    passport.authenticate("kakao", {
        failureRedirect: baseUrl,
    }),
    (req, res) => {
        res.redirect(baseUrl);
    }
);

router.get("/google", passport.authenticate("google", { scope: ["email"] }));

router.get(
    "/google/callback",
    passport.authenticate("google", {
        failureRedirect: baseUrl,
    }),
    (req, res) => {
        res.redirect(baseUrl);
    }
);

module.exports = router;
