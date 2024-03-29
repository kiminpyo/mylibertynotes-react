const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Hashtag extends Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: DataTypes.STRING(20),
                },
            },
            {
                modelName: "Hashtag",
                tableName: "hashtags",
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
                sequelize,
            }
        );
    }
    static associate(db) {
        db.Hashtag.belongsToMany(db.Post, { through: "PostHashtag" });
      
    }
};
