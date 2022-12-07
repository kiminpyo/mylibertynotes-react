const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const { Post, User } = require("../models");
router.get("/", async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            attributes: ["content", "rating", "createdAt"],
            order: [["createdAt", "DESC"]],
            include: {
                model: User,
                attributes: ["email"],
            },
        });

        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;
