const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')
const db = require('./db')
const seedUsers = require('../script/users.json')


describe('GET /users', () => {

  before(async () => {
    try {
      await db.sync({ force: true })
      await db.models.user.bulkCreate(seedUsers)
    } catch (error) {
      console.log(error)
    }
  })

  it('should return list of users', async () => {
    try {
      const res = await request(app).get('/api/users')
      expect(res.status).to.equal(200)
      expect(res.body.length).to.equal(seedUsers.length)
    } catch (error) {
      console.log(error)
    }
  })
})
