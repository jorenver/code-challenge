const express = require('express')
const cookieParser = require('cookie-parser')

const indexRouter = require('./routes/index')

const app = express()
const expressSwagger = require('express-swagger-generator')(app)
const options = {
  swaggerDefinition: {
    info: {
      description: 'This is a Code Challenge API',
      title: 'Code Challenge API',
      version: '1.0.0'
    },
    host: 'localhost:5000',
    basePath: '/',
    produces: [
      'application/json'
    ],
    schemes: ['http'],
    securityDefinitions: {
    }
  },
  basedir: __dirname,
  files: ['./routes/**/*.js']
}
expressSwagger(options)

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method')
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/', indexRouter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send({
    error: 'Server error'
  })
})
module.exports = app
