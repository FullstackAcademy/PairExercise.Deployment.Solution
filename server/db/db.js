const Sequelize = require('sequelize')
const pkg = require('../../package.json')
const dbUrl = process.env.DATABASE_URL || `postgres://localhost:5432/${pkg.name}`
const client = new Sequelize(dbUrl, { logging: false, operatorsAliases: false })

module.exports = client

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => client.close())
}
