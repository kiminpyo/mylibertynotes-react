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
const HashtagRouter = require("./routes/hashtag");
const OauthRouter = require("./routes/oauth");
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
if (process.env.NODE_ENV === "production") {
    app.use(morgan("combined"));
    app.use(hpp());
    app.use(helmet({ contentSecurityPolicy: false }));
    app.use(
        cors({
            /* 쿠키 관련  */
            origin: ["http://localhost:3000", "http://34.197.130.106:3000"],
            credentials: true,
        })
    );
} else {
    app.use(morgan("dev"));
    app.use(
        cors({
            origin: true,
            credentials: true,
        })
    );
}

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
app.use("/hashtag", HashtagRouter);
app.use("/oauth", OauthRouter);
app.listen(80, () => {
    console.log("서버 실행 중!");
});
