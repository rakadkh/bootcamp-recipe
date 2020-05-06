
require( 'dotenv' ).config()
const express = require( 'express' )
const path = require('path')
const app = express()
const port = process.env.SERVER_PORT || 8080
const request = require('request');
const urllib = require('urllib')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (req, response) {
    
        response.send("OK")
})

app.get('/recipes/:ingredient', function (req, response) {
    let ingredient = req.params.ingredient
    urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient.toLowerCase()}`, function (err, data, res){
        if (err) {
            throw err; 
        }
        const recipes = JSON.parse(data).results
        response.send(recipes)
    })
})

let socket = app.listen( port, () => console.log( `Running server on port ${ port }` ) )
                                    