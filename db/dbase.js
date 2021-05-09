const mongoose = require('mongoose')
require('dotenv').config()
const { SERVER_URI } = process.env;
// creating mongodb Schema
// const Schema = mongoose.Schema;

// //using the instance of Schema
// const PersonSchema = new Schema({
//     name: String,
//     email: String,
//     country: String
// })

//creating the Person model
//const Person = mongoose.model("person", PersonSchema)

// connecting to mongodb
const connectDB = async()=> {
    try{
     await mongoose.connect(SERVER_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true,
         useFindAndModify: false
     })
     console.log('mongodb connected')
    }catch(err) {
     console.error(err.message)
     process.exit(1)
    }

}

module.exports = { connectDB };