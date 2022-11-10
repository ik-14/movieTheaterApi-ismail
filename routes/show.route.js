//get all shows - done
//get one shows - done
//get shows of one genre (genre in req.params = req.params.genre) - done
//PUT - update rating of show thats watched
//PUT - update status of a show
//Delete - a show

//VALIDATION - optional
//if user request to update status of show, status field cannot be empty
//status must be min 5 chars, max 25 chars
//if user request to update rating of show, rating field cannot be empty

const { Router } = require("express");
const { Show } = require("../models/index");
const showRouter = Router();

showRouter.get('/', async(req,res) => {
  res.send(await Show.findAll())
})

showRouter.get('/:id', async(req,res) => {
  res.send( await Show.findByPk(req.params.id))
})

showRouter.get('/genres/:genre', async(req,res) => {
  res.send( await Show.findAll({
    where: {genre: req.params.genre}
  }))
})

module.exports = showRouter