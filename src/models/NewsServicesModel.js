module.exports = (sequelize, DataTypes) => {
    const NewsService = sequelize.define('NewsService', {
        newService_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
    return NewsService;
}