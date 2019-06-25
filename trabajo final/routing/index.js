var express = require('express')
var Router = express.Router()
var path = require('path')

var controller = require(path.join(__dirname , '../controller/controller.js'))

Router.post('/login', controller.login)

Router.get('/all', controller.all)

Router.post('/delete', controller.delete)

module.exports = Router