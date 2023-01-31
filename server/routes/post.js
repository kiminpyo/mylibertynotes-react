const express = require("express");
const router = express.Router();
const { Op } = require("sequelize");
const db = require("../models");

const { Post, User, Hashtag } = require("../models");
const { isLoggedIn } = require("./middlewares");
router.post("/", isLoggedIn, async (req, res, next) => {
    try {
        const post = await Post.create({
            UserId: req.user.id,
            content: req.body.content,
            rating: req.body.rating,
            drink: req.body.drink,
            smoke: req.body.smoke
        });
        if (req.body.hashtag) {
            const hashtag = req.body.hashtag.split(",");
            const set = new Set(hashtag);
            const uniqueHashtag = [...set];
            const libertyHashtag = await Promise.all(
                uniqueHashtag.map((tag) =>
                    Hashtag.findOrCreate({
                        where: { name: tag },
                    })
                )
            );

            await post.addHashtag(libertyHashtag.map((v) => v[0]));
        }
        const fullpost = await Post.findOne({
            where: { id: post.id },
            include: [
                {
                    model: Hashtag,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
        });
        console.log(fullpost);
        res.status(201).json(fullpost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get("/", async (req, res, next) => {
    try {
        const post = await Post.findAndCountAll({
            offset: 18 * req.query.lastId,
            limit: 18,
            order: [["createdAt", "DESC"]],
            include: [
                {
                    model: User,
                    attributes: ["id", "email"],
                },
                {
                    model: Hashtag,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"],
                    },
                },
            ],
        });

        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.get("/:postId", isLoggedIn, async (req, res, next) => {
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
            attributes: ["content", "rating", "id","smoke","drink"],
            include: [
                {
                    model: User,
                    attributes: ["id", "email"],
                },
                {
                    model: Hashtag,
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
        console.log(req.body.hashtag);
        const { postId } = req.params;
        const post = await Post.findOne({
            where: { id: postId },
            include: [{ model: Hashtag }],
        });
        await db.sequelize.models.PostHashtag.destroy({
            where: { PostId: post.id },
        });
        if (req.body.hashtag) {
            const hashtag = req.body.hashtag.split(",");
            const set = new Set(hashtag);
            const uniqueHashtag = [...set];
            const libertyHashtag = await Promise.all(
                uniqueHashtag.map((tag) =>
                    Hashtag.findOrCreate({
                        where: { name: tag },
                    })
                )
            );
            await post.addHashtag(libertyHashtag.map((v) => v[0]));
        }

        await Post.update(
            {
                content: req.body.content,
                rating: req.body.rating,
                drink: req.body.drink,
                smoke: req.body.smoke
            },
            {
                where: {
                    id: postId,
                },
            }
        );

        res.status(200).json({
            post,
            content: req.body.content,
            rating: req.body.rating,
            drink: req.body.drink,
            smoke: req.body.smoke
        });
    } catch (err) {
        console.error(err);
    }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
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
