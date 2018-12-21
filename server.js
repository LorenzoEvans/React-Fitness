const express = require("express")
const cors = require("cors")
const server = express()
const bodyParser = require('body-parser')
const PORT = 4004





server.listen(PORT, () => {
 console.log(`Server is running live on ${PORT}`)
})
