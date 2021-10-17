const express = require('express')

const app = express()
const {config} = require('./config/index')
const questionsAPI = require('./routes/questions')

questionsAPI(app)

app.listen(config.port, () => {
  console.log('Running in port: ', config.port)
})
