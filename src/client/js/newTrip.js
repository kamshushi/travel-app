import {isWithinAWeek} from './isWithinAWeek'
function newTrip(){
    fetch('http://localhost:8081/card')
    .then(res => res.json())
    .then(res => {
        const obj= res

        // Creating all Node Elements and adding their attributes
        const cardHolder= document.createElement('DIV')
        cardHolder.className= 'card-holder'
        
        const imgHolder= document.createElement('DIV')
        imgHolder.className= 'img-holder'
    
        const image= document.createElement('IMG')
        image.className='img'
        image.setAttribute('alt','Image')
        image.src= obj.img
    
        const tripHeader= document.createElement('H2')
        tripHeader.className='capitalize'
        tripHeader.textContent= `${obj.city}`
        
        const infoHolder= document.createElement('DIV')
        infoHolder.className= 'info-holder'
    
        const flightDate= document.createElement('H3') 
        flightDate.textContent= `Flight Date: ${obj.date}`
    
        const planeDeparture= document.createElement('P')
        planeDeparture.textContent=`Plane Departs In ${obj.daysBeforeTrip} Days`
    
    
        const expectedWeather= document.createElement('H4')
        if( isWithinAWeek(obj.date) ){
            expectedWeather.textContent= `Current Temprature: ${obj.temp}°C`
        }else{
            expectedWeather.textContent= `Expected Temprature in 16 days: ${obj.temp}°C`
        }
        
        const feelsLike= document.createElement('P')
        feelsLike.textContent= `Feels Like: min ${obj.app_min_temp}°C , max: ${obj.app_max_temp}°C `
    
        const mostlyIs = document.createElement('H4')
        mostlyIs.textContent= `Mostly ${obj.weatherDescription}`
    
        const removeTrip= document.createElement('BUTTON')
        removeTrip.className= 'remove-trip'
        removeTrip.textContent= 'Remove'
        removeTrip.addEventListener('click',function(e){
            e.target.parentElement.parentElement.remove()
        })
    
        //Appending children to parents
        infoHolder.append(flightDate, planeDeparture, expectedWeather, feelsLike,mostlyIs, removeTrip)
    
        imgHolder.appendChild(image)
    
    
        cardHolder.append(imgHolder, tripHeader, infoHolder)
    
        //Append the new trip card to the list of trips
        const cardsContainer= document.querySelector('.cards-container')
        cardsContainer.appendChild(cardHolder)
    })


    return 'Success'
}

export {
    newTrip
}