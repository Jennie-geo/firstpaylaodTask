const mongoose = require('mongoose')
const validator = require('mongoose-validator')

const personSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: {
      type: String,
      required: true
    },
     email: {
         type: String,
         required: true
     },
    country: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Person', personSchema)