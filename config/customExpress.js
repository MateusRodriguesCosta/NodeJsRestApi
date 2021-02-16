import express from 'express'
import consign from 'consign'
import { json, urlencoded } from 'body-parser'
 
export default () => {
 const app = express()
 
 app.use(json())
 app.use(urlencoded({ extended: true }))
 
 consign()
   .include('controllers')
   .into(app)
 
 return app
}