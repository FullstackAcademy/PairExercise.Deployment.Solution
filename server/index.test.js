const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')
const db = require('./db')
const seedUsers = require('../script/users.json')


describe('GET /users', () => {

  before(async () => {
    await db.sync({ force: true })
    await db.models.user.bulkCreate(seedUsers)
  })

  it('should return list of users', async () => {
    const res = await request(app).get('/api/users')
    console.log('before expect 200')
    expect(res.status).to.equal(200)
    console.log('after expect 200, before expect res.body.length')
    expect(res.body.length).to.equal(seedUsers.length)
    console.log('after expect res.body.length')
    done()
  })
})
