import {getCityCoordinates} from './getCityCoordinates';
import {getWeather} from './getWeather'
import {getImg} from './getImg';
import {newTrip} from './newTrip'
function addForm(e){
    const cityValue= document.getElementById('city').value.toLocaleLowerCase()
    const dateValue= document.getElementById('date').value
    const now= new Date()
    const tripDate= new Date(dateValue)

    e.preventDefault()
    if(cityValue == '' || dateValue == ''){
        alert('Please Fill Both Forms')
    } else if(tripDate < now){
        alert('Please Enter A Future Date')
    }else{
        const weekInMillisec=604800000;
        const dayInMillisec= 1000*60*60*24;
        const daysBeforeTrip= Math.ceil( (tripDate-now) / (dayInMillisec) )

        const obj= {
            city:cityValue,
            date:dateValue,
            daysBeforeTrip:daysBeforeTrip
        }
        getImg(obj)
        .then(res => getCityCoordinates(res))
        .then(res => getWeather(res))
        .then(res => {
            return fetch('/card',{
                method:'POST',
                credentials:'same-origin',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(res)
            })
        })
        .then(res => res.json())
        .then(res => {
            newTrip()
        })
        .catch(error => "Couldn't Add A New Trip")

    }



}
export {addForm}