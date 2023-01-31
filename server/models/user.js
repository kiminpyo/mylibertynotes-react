const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                email: {
                    type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME
                    allowNull: false, // 필수
                },
                password: {
                    type: DataTypes.STRING(100),
                },
                token: {
                    type: DataTypes.STRING(100),
                },
                nickname: {
                    type: DataTypes.STRING(100),
                },
                gender: {
                    type: DataTypes.STRING(10),
                },
                thumbnail: {
                    type: DataTypes.STRING(100),
                },
            },
            {
                modelName: "User",
                tableName: "users",
                charset: "utf8",
                collate: "utf8_general_ci", // 한글 저장
                sequelize,
            }
        );
    }
    static associate(db) {
        db.User.hasMany(db.Post);
    }
};
