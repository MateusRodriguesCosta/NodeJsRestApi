const express = require('express')
const consign = require('consign')
const { json, urlencoded } = require('body-parser')
 
module.exports = () => {
  const app = express()
  
  app.use(json())
  app.use(urlencoded({ extended: true }))
  
  consign()
    .include('controllers')
    .into(app)
  
  return app
}
