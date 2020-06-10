const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')
const db = require('./db')
const seedUsers = require('../script/users.json')


describe('GET /users', () => {

  before((done) => {
    db.sync({ force: true })
      .then(() => {
        db.models.user.bulkCreate(seedUsers)
      })
      .then(done, done)
  })

  it('should return list of users', (done) => {
    request(app).get('/api/users')
      .then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body.length).to.equal(seedUsers.length)
      })
      .then(done, done)
  })
})
