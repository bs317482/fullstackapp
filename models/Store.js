var mongoose = require('mongoose')
var Schema = require ('../db/schema')
var Store =  mongoose.model('Store', Schema.StoreSchema)
module.exports = Store
