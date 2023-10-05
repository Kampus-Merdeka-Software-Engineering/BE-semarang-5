// here to initiate connection with database
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbConfig.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host : dbConfig.HOST,
    dialect: dbConfig.DIALECT
});

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.getnews = require('./getnews')(sequelize, Sequelize.DataTypes);
db.models.message = require('./message')(sequelize, Sequelize.DataTypes);


module.exports = db;
