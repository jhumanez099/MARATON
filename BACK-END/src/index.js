const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.listen(3000, () => {
  console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})