const express = require("express");
const router = express.Router();
const { Op, Model } = require("sequelize");

const { Post, User } = require("../models");
const { isLoggedIn } = require("./middlewares");
router.post("/", isLoggedIn, async (req, res, next) => {
    try {
        console.log(req.body);
        console.log(req.user);
        console.log(req);
        const post = await Post.create({
            UserId: req.user.id,
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
        const post = await Post.findAll({
            limit: 100,
            attributes: ["content", "rating", "createdAt", "UserId", "id"],

            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: User,
                    attributes: ["email"],
                },
            ],
        });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get("/:postId", async (req, res, next) => {
    try {
        const post = await Post.findOne({
            where: {
                id: req.params.postId,
            },
        });
        if (!post) {
            return res.status(403).send("존재하지 않는 게시글입니다.");
        }
        const fullPost = await Post.findOne({
            where: { id: post.id },
            attributes: ["content", "rating", "id"],
            include: [
                {
                    model: User,
                    attributes: ["email"],
                },
            ],
        });
        res.status(201).json(fullPost);
    } catch (error) {
        console.error(error);
    }
});

router.patch("/:postId", async (req, res, next) => {
    try {
        const { postId } = req.params;
        await Post.update(
            {
                content: req.body.content,
                rating: req.body.rating,
            },
            {
                where: {
                    id: postId,
                },
            }
        );

        res.status(200).json({
            content: req.body.content,
            rating: req.body.rating,
        });
    } catch (err) {
        console.error(err);
    }
});

router.delete("/:postId", async (req, res, next) => {
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                Userid: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;
