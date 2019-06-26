var express = require('express')
var Router = express.Router()
var path = require('path')

var controller = require(path.join(__dirname , '../controller/controller.js'))

Router.post('/login', controller.login)

Router.get('/all', controller.all)

Router.post('/delete', controller.delete)

Router.post('/new', controller.new)

Router.post('/update', controller.update)

module.exports = Router