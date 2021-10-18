const express = require('express')
const cors = require('cors')

const app = express()
const {config} = require('./config/index')
const questionsAPI = require('./routes/questions')

app.use(cors())
app.use(express.json())
questionsAPI(app)

app.listen(config.port, () => {
  console.log('Running in port: ', config.port)
})
