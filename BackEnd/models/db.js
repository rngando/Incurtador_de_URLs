
const { Sequelize, DataTypes } = require('sequelize')
const { logger } = require('sequelize/lib/utils/logger')

const sequelize = new Sequelize({ 
    dialect: 'sqlite', 
    storage: './db.sqlite' ,
    logging: false
})

// 1. Tabela de URLs (cada linha é um link novo)
const Url = sequelize.define("Url", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    url_long: { type: DataTypes.STRING, allowNull: false },
    url_short: { type: DataTypes.STRING, allowNull: false, unique: true }
})


module.exports = { sequelize, Url }
