const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const router = express.Router();
const { Op } = require("sequelize");
const { User, Post } = require("../models");

const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.get("/", async (req, res, next) => {
    try {
        if (req.user) {
           
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ["password"],
                },
                include: [
                    {
                        model: Post,
                        attributes: ["id", "content", "rating", "createdAt"],
                    },
                ],
            });
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (err) {
        console.error(err);
    }
});
router.post("/login", isNotLoggedIn, (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }

            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ["password"],
                },
                include: [
                    {
                        model: Post,
                        attributes: ["id"],
                    },
                ],
            });
            return res.status(200).json(fullUserWithoutPassword);
        });
    })(req, res, next);
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            },
        });
        if (exUser) {
            return res.status(403).send("?????? ???????????? ??????????????????.");
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        await User.create({
            email: req.body.email,
            password: hashedPassword,
        });

        res.status(200).send("ok");
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.post("/logout", isLoggedIn, (req, res, next) => {
    res.redirect("/");
    console.log(req.user);
    req.session.destroy();
    res.send("ok");
});

module.exports = router;
