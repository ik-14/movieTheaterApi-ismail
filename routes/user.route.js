//get all users - done
//get one user - done
//get all shows watched by a user (user id in req.params)
//PUT - update + add show if user watched it

const { Router } = require("express");
const userRouter = Router();
const {User, Show} = require('../models/index')

userRouter.get('/', async(req,res) => {
  res.send( await User.findAll())
})

userRouter.get('/:id', async(req,res) => {
  res.send( await User.findByPk(req.params.id))
})

userRouter.get('/:id/watched', async(req,res) => {
  res.send
})

module.exports = userRouter