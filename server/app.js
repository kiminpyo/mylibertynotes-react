const express = require("express");
const cors = require("cors");

const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const dotenv = require("dotenv");

const postsRouter = require("./routes/post");
const db = require("./models");
dotenv.config();
const app = express();

db.sequelize
    .sync({
        alter: true,
    })
    .then(() => {
        console.log("db 연결성공");
    })
    .catch(console.error);

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const getHtml = async () => {
    try {
        return await axios({
            // 크롤링을 원하는 페이지 URL
            url: "https://matosstuff.tistory.com/entry/%EB%82%98%EC%9D%98-%ED%95%B4%EB%B0%A9%EC%9D%BC%EC%A7%80-%EA%B2%B0%EB%A7%90-%EB%AA%85%EB%8C%80%EC%82%AC-%EC%B4%9D%EC%A0%95%EB%A6%AC",
            method: "GET",
        });
    } catch (err) {
        console.error(err);
    }
};

app.get("/dummy", (req, res, body) => {
    getHtml()
        .then((a) => {
            const title = [];
            const content = iconv.decode(a.data, "UTF-8");
            const $ = cheerio.load(a.data);
            const b = $(`p`).text();
            console.log(b);
            res.json(b);
        })
        .catch((err) => {
            console.error(err);
        });
});

app.use("/post", postsRouter);

app.listen(80, () => {
    console.log("서버 실행 중!");
});
