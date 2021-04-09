import {getKeys} from './getKeys'
function getCityCoordinates(obj){
    return getKeys()
    .then(res =>{
        return fetch(`http://api.geonames.org/searchJSON?formatted=true&q=${obj.city}&username=${res.geonamesUsername}&style=full`)
    })
    .then(res => res.json())
    .then(res => {
        const lat= res.geonames[0].lat
        const lng= res.geonames[0].lng

        obj['lat']= lat;
        obj['lng']= lng;
        return obj
    })
    .catch(error => alert("Please Enter A Valid City"))
}

export{
    getCityCoordinates
}