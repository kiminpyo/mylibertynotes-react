const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");

const { Post } = require("../models");

router.post("/", async (req, res, next) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            rating: req.body.rating,
        });
        const fullpost = await Post.findOne({
            where: { id: post.id },
        });
        res.status(201).json(fullpost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            attributes: ["content", "rating", "createdAt"],
            order: [["createdAt", "DESC"]],
        });
        res.status(201).json(posts);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
