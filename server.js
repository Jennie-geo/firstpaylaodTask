const express = require('express');
require('dotenv').config()
const { PORT } = process.env
const { connectDB } = require('./db/dbase')
const userRouter = require('./routes/userRoute.js')
const errorPage = require('./error/error.js')

const app = express()
connectDB()
  //parsing form data
app.use(express.urlencoded({extended: false}))
//parse json
app.use(express.json())

const port = process.env.PORT || PORT

app.use('/api/people', userRouter)

app.use(errorPage)

app.listen(port, () => {
    console.log('Server Connected...')
})


