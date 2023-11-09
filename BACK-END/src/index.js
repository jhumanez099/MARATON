const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const projectsRoutes = require('./routes/user.routes')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use(projectsRoutes)
app.use((err,req,res,next)=>{
  return res.json({
    message:err.message
  })
})

app.listen(3000, () => {
  console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})