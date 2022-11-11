//get all users - done
//get one user - done
//get all shows watched by a user (user id in req.params)
//PUT - update + add show if user watched it

const { Router } = require("express");
const userRouter = Router();
const db = require('../db')
const {User, Show} = require('../models/index')

userRouter.get('/', async(req,res) => {
  res.send( await User.findAll())
})

userRouter.get('/:id', async(req,res) => {
  res.send( await User.findByPk(req.params.id))
})


userRouter.post('/pleaseWork', async(req,res) => {
  const randomShow = await Show.create({
    title: 'the greatest',
    genre: 'nice genre bro',
    rating: 2,
    status: 'cancelled'
  });
  const randomUser = await User.create({
    username: 'user1',
    password: 'passwrdddd'
  });
  
  randomUser.addShow(randomShow)
  res.status(200).send('worked')
})


module.exports = userRouter