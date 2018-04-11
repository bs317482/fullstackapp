var mongoose = require('mongoose')
var Schema = require ('../db/schema')
var Gift =  mongoose.model('Gift', Schema.GiftSchema)
module.exports = Gift
