const Sequelize = require("sequelize");
const post = require("./post");
const user = require("./user");
const hashtag = require("./hashtag");
/* 업데이트 */
/*  const comment  = require('./comment') */
const env = process.env.NODE_ENV || "development";

const config = require("../config/config.js")[env];
/* 이안에 db정보 다 담는다. */
const db = {};

/* sequelisze가 node랑 mysql을 연결 (mysql2 driver(npm i myspl2) 이용)해준다 */

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.Post = post;
db.User = user;
db.Hashtag = hashtag;

Object.keys(db).forEach((modelName) => {
    db[modelName].init(sequelize);
});

/* 반복문 돌면서 관계들 연결해주는 곳 */
Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
