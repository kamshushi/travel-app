import {getKeys} from './getKeys'
function getImg(obj){
    return getKeys()
    .then(res =>{
        return fetch(`https://pixabay.com/api/?key=${res.pixabayApiKey}&q=${obj.city}&image_type=photo`)
    })
    .then(res => res.json())
    .then(res =>{
        const length= res.hits.length
        const random= Math.floor(Math.random() * length)
        const img= res.hits[random].largeImageURL;

        obj['img']= img

        return obj
    })
    .catch(error => alert("Can't Find An Image"))
}

export{
    getImg
}