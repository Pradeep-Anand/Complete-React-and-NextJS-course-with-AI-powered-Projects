const express = require('express')

const hostRouter = express.Router()
hostRouter.get('/register-home', (req, res, next) => {
  res.render('registerHome', {title: "Register Your Home: airbnb", tab:"addHome"})
})


const formDetails = []

hostRouter.post('/register-home', (req, res, next) => {
  formDetails.push({
    houseName: req.body.houseName,
    price: req.body.price,
    location: req.body.location,
    rating: req.body.rating,
    imageUrl: req.body.homeImg || ''
  })
  res.render('registerSuccess', {title: "Home Registered Successfully: airbnb", tab: "addHome"})
})

exports.hostRouter = hostRouter
exports.formDetails = formDetails