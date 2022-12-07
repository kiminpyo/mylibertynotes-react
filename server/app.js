const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const iconv = require("iconv-lite");
const dotenv = require("dotenv");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const morgan = require("morgan");
const path = require("path");
const hpp = require("hpp");
const helmet = require("helmet");

const postsRouter = require("./routes/post");
const UserRouter = require("./routes/user");
const PostsRouter = require("./routes/posts");
const passportConfig = require("./passport");
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

passportConfig();

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
    session({
        saveUninitialized: false,

        resave: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: false,
            domain:
                process.env.NODE_ENV === "production" &&
                "http://localhost:3000",
        },
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/post", postsRouter);
app.use("/user", UserRouter);
app.use("/posts", PostsRouter);

app.listen(80, () => {
    console.log("서버 실행 중!");
});
