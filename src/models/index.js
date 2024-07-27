const dbConfig = require("../config/dbConfig");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(dbConfig.URL, {
  dialect: dbConfig.dialect,
  dialectOptions: dbConfig.dialectOptions,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => console.log("connected!"))
  .catch((err) => console.log("Error :" + err));

const db = {};
db.User = require("./UserModel")(sequelize, Sequelize);
db.RiceCaltivation = require("./RiceCultivationModel")(sequelize, Sequelize);
db.IncomeExpense = require("./IncomeExpenseModel")(sequelize, Sequelize);
db.RiceVariety = require("./RiceVarietyModel")(sequelize, Sequelize);
db.NewsService = require('./NewsServicesModel')(sequelize, Sequelize);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User.hasMany(db.RiceCaltivation, {
  foreignKey: 'user_id',
  as: 'riceCaltivation'
});

db.RiceCaltivation.belongsTo(db.User, {
  foreignKey: 'user_id',
  as: 'user'
});

db.User.hasMany(db.IncomeExpense, {
  foreignKey: 'user_id',
  as: 'incomeExpense'
});

db.IncomeExpense.belongsTo(db.User, {
  foreignKey: 'user_id',
  as: 'user'
});

db.RiceCaltivation.hasMany(db.IncomeExpense, {
  foreignKey: 'riceCaltivation_id',
  as: 'incomeExpense'
});

db.IncomeExpense.belongsTo(db.RiceCaltivation, {
  foreignKey: 'riceCaltivation_id',
  as: 'riceCaltivation'
});

module.exports = db;
