const express = require('express')

const app = express()

app.all("*", (req, res) => {
    res.status(404).json({ success: false, error: 
      { 
          msg: "Page Not Found" }
          })
})

module.exports = app;