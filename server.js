const express = require('express')
const path = require('path')

const app = express() // initialize express. factory function, returns object, bunch of methods attached to it
const port = process.env.PORT || 5000 // set up ports listening for requests and setting up responses. SERVER ENVIRONMENT PORT. if we are not running something with a designated port than run it on 5000
//SET UP VARIABLES ABOVE 

app.use(express.static(path.resolve('./client/build'))) //middle ware. express status takes a file path. THE FOLDER WE ARE SERVING EVERYTHING OUT OF

app.get('*', (request, response) => {
      response.sendFile(path.resolve('./client/build/index.html')) //these connections are set up for us in react 
}) // given a get request among any path, do this. REQ RES in that order

app.listen(port, () => {
      console.log(`Listening on port: ${port}`)
}) //making server listen. LAST THING TO HAPPEN


