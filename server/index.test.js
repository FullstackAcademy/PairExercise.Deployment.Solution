const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')
const db = require('./db')
const seedUsers = require('../script/users.json')


describe('GET /users', () => {

  before(() => {
    return Promise.all([db.sync({ force: true }), db.models.user.bulkCreate(seedUsers)])
  })

  it('should return list of users', async () => {
    return request(app).get('/api/users')
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body.length).to.equal(seedUsers.length)
      })
  })
})
