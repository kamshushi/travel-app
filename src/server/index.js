const path= require('path')
const express= require('express')
const dotenv= require('dotenv')
const cors= require('cors')
const bodyParser= require('body-parser')


let dataObj= {};

// const corsOptions = {
//     origin: 'http://localhost:8080',
//     optionsSuccessStatus: 200 
// }

dotenv.config()

const app= express()
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
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

app.post('/card', function(req, res){
    const body= req.body 
    dataObj['city']=body.city
    dataObj['date']=body.date
    dataObj['daysBeforeTrip']=body.daysBeforeTrip
    dataObj['img']=body.img
    dataObj['lat']=body.lat
    dataObj['lng']=body.lng
    dataObj['temp']=body.temp
    dataObj['app_min_temp']=body.app_min_temp
    dataObj['app_max_temp']=body.app_max_temp
    dataObj['weatherDescription']=body.weatherDescription

    res.send({success:true})
})

app.get('/card', function(req,res){
    res.send(dataObj)
})

    module.exports = app