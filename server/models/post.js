const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Post extends Model {
    static init(sequelize) {
        return super.init(
            {
                content: {
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                rating: {
                    type: DataTypes.STRING(5),
                    allowNull: false,
                },
                drink: {
                    type: DataTypes.STRING(5),
                    allowNull: false,
                },
                smoke: {
                    type: DataTypes.STRING(5),
                    allowNull: false,
                },
            },
            {
                modelName: "Post",
                tableName: "post",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                sequelize,
            }
        );
    }
    static associate(db) {
        db.Post.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
        db.Post.belongsToMany(db.Hashtag, { through: "PostHashtag" });
    }
};
