module.exports = (sequelize, DataTypes) => {
  const RiceVariety = sequelize.define("RiceVariety", {
    riceVariety_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photosensitivity:{
      type: DataTypes.STRING,
      allowNull: false
    },
    precautions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    yield: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stability: {
      type: DataTypes.STRING,
      allowNull: false
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false
    },
    age: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
  return RiceVariety;
};