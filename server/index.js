const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path')

app.use(express.static(path.join(__dirname, '..', 'public')))

app.listen(PORT, (e) => {
  if (e) throw e
  console.log(`listening on port ${PORT}`)
})
