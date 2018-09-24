const db = require('../server/db')
const users = require('./users.json')

const seed = async () => {
  try {
    console.log('syncing DB...')
    await db.sync({ force: true })
    console.log('db synced!')

    console.log('seeding DB...')
    await db.models.user.bulkCreate(users)
    console.log('seeded!')

    db.close()
  } catch (e) {
    console.error(e)
  }
}

seed()


// const fs = require('fs')
// const faker = require('faker')
//
// const users = Array(25).fill({}).map(o => {
//   const firstName = faker.name.firstName()
//   const lastName  = faker.name.lastName()
//   return {
//     firstName,
//     lastName,
//     email: (`${firstName}.${lastName}@example.com`).toLowerCase()
//   }
// })
//
//
// fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users, null, 2))
