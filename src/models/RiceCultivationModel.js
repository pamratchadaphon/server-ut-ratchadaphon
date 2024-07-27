module.exports = (sequelize, DataTypes) => {
  const RiceCaltivation = sequelize.define("RiceCaltivation", {
    riceCaltivation_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    riceVariety: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_yield: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    yield: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rice_price_per_kg: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    rice_consumption: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seed_rice: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return RiceCaltivation;
};