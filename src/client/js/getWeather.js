import {isWithinAWeek} from './isWithinAWeek'
import {getKeys} from './getKeys'
function getWeather(obj){
    const lat= obj.lat;
    const lng= obj.lng
    return getKeys()
    .then(res => {
        return fetch(`https://api.weatherbit.io/v2.0/forecast/daily?key=${res.weatherbitApiKey}&lang=en&lat=${lat}&lon=${lng}`)
    })
    .then(res => res.json())
    .then(res => {

        let temp;
        let app_min_temp;
        let app_max_temp;
        let weatherDescription;
        if(isWithinAWeek(obj.date)){
            temp= res.data[0].temp
            app_min_temp= res.data[0].app_min_temp
            app_max_temp= res.data[0].app_max_temp
            weatherDescription= res.data[0].weather.description
        } else {
            temp= res.data[15].temp
            app_min_temp= res.data[15].app_min_temp
            app_max_temp= res.data[15].app_max_temp
            weatherDescription= res.data[15].weather.description
        }
        obj['temp']= temp
        obj['app_min_temp']= app_min_temp
        obj['app_max_temp']= app_max_temp
        obj['weatherDescription']= weatherDescription
        return obj
    })
    .catch(error => alert("Can't Get The Weather"))
}

export{
    getWeather
}