const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`
const client = new Sequelize(dbUrl, { logging: false })

module.exports = client
