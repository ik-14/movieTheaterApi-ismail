const express = require('express')
const app = express()
const PORT = 3000
const userRouter = require('../routes/user.route')
const showRouter = require('../routes/show.route')
const seed = require('../seed')
const { User } = require('../models')


app.use(express.static('public'))
app.use(express.json())
app.use('/users', userRouter)
app.use('/shows', showRouter)


app.listen(PORT, async() => {
  await seed()
  console.log(`listening on ${PORT}`)
})