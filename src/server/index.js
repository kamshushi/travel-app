const path= require('path')
const express= require('express')
const dotenv= require('dotenv')

dotenv.config()

const app= express()
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function(req , res){
    res.sendFile('dist/index.html')
})



app.listen(8081, function(){
    console.log(`App is listening on port 8081`)
})

const APIsKeys={
    geonamesUsername: process.env.geonamesUsername,
    pixabayApiKey: process.env.pixabayApiKey,
    weatherbitApiKey: process.env.weatherbitApiKey
}

app.get('/keys', function (req, res) {
    res.send(APIsKeys)
})

    module.exports = app