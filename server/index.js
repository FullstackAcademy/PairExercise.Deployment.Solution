const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')
const db = require('./db')

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/api/users', async (req, res, next) => {
  try {
    const users = await db.models.user.findAll()
    res.json(users)
  } catch (e) {
    next(e)
  }
})

app.listen(PORT, (e) => {
  if (e) throw e
  console.log(`listening on port ${PORT}`)
})
