function isWithinAWeek(date){
    const tripDate= new Date(date)
    const now= new Date()
    const weekInMillisec=604800000;
    const dateAfterWeek= new Date(now.getTime() + weekInMillisec)
    if(tripDate <= dateAfterWeek){
        return true ;
    }else{
        return false;
    }
}

export{
    isWithinAWeek
}