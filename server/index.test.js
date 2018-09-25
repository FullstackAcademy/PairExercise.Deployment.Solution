const request = require('supertest')
const app = require('./index')
const { expect } = require('chai')

describe('GET /users', () => {
  it('should return list of users', async () => {
    const res = await request(app).get('/api/users')
    expect(res.status).to.equal(200)
  })
})
