module.exports = {
  URL: 'mysql://4NJC5b5VMVQsHTn.root:9LQiumfAD6WtmGVM@gateway01.ap-southeast-1.prod.aws.tidbcloud.com:4000/RiceCultivationByFarmers',
  dialect: 'mysql',
  dialectModule: require('mysql2'), 
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};