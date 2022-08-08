const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init(
            {
                hashtag: {
                    type: DataTypes.STRING(20),
                    allowNull: false,
                },
            },
            {
                modelName: "Hashtag",
                tableName: "hashtag",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                sequelize,
            }
        );
    }
    static associate(db) {
        db.Hashtag.belongsTo(db.User); // post.addUser, post.getUser, post.setUser
    }
};
