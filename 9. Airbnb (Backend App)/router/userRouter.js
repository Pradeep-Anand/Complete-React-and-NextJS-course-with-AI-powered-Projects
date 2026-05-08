const express = require('express')
const {formDetails} = require('./hostRouter')

const userRouter = express.Router()

userRouter.get('/', (req, res, next) => {
  res.render('home', {formDetails: formDetails, title: "Airbnb Home", tab: "Home"})
})

exports.userRouter = userRouter