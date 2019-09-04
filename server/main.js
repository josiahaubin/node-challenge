import express from "express"
const port = 3000
import bp from "body-parser"


let server = express()

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())

import CarController from "./controllers/CarController"
server.use('/api/cars', new CarController().router)


  .get('/', (req, res, next) => {
    console.log("I have been requested")
    res.send('<h1> Welcome foo </h1> <p>Type localhost:3000/api/cars to get started</p>')
  })


server.listen(port, () => {
  console.log(`The magic is happening on port ${port}`);
})