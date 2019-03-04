const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
let jwtVerif = require('./middleware/jwt-verificator')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', routes)

app.post('/login', require('./controllers/auth.controller').loginUser)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}
