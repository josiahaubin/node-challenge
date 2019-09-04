import express from "express"
const port = 3000
import bp from "body-parser"


let server = express()

server.use(bp.urlencoded({ extended: true }))
server.use(bp.json())







server.listen(port, () => {
  console.log(`The magic is happening on port ${port}`);
})