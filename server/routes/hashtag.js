const express = require("express");
const router = express.Router();

const { Post, Hashtag, User } = require("../models");
const { isLoggedIn } = require("./middlewares");

router.get("/:keyword", async (req, res, next) => {
    try {
        const post = await Post.findAll({
            include: [
                { model: Hashtag, where: { name: req.params.keyword } },
                {
                    model: User,
                    attributes: ["id", "email"],
                },
            ],
        });

        res.status(200).json(post);
    } catch (err) {
        res.status(401).json("없습니다");
        console.error(err);
        next(err);
    }
});

module.exports = router;
