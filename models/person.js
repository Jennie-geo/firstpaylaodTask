const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    country: String
})

module.exports = mongoose.model('Person', personSchema)