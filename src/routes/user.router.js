const { getAll, create, remove, getOne, update } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/persons")
		.get(getAll)
		.post(create);
userRouter.route("/persons/:id")
		.get(getOne)
		.delete(remove)
		.put(update);
		


module.exports = userRouter;