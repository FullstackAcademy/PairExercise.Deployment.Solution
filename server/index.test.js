const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')
const db = require('./db')
const seedUsers = require('../script/users.json')

function onResponse(err, res) {
  if (err) return done(err);
  return done();
}

describe('GET /users', () => {

  before(async () => {
    try {
      await db.sync({ force: true })
      await db.models.user.bulkCreate(seedUsers)
    } catch (error) {
      console.error('error syncing or creating db')
    }
  })

  it('should return list of users', () => {
    try {
      request(app).get('/api/users').send((res) => {
        expect(res.status).to.equal(200)
        expect(res.body.length).to.equal(seedUsers.length)
      }).end(onResponse)
    } catch (error) {
      console.error('error requesting get route')
    }
  })
})
