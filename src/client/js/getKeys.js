const fetch= require('node-fetch')
function getKeys(){
    return fetch('http://localhost:8081/keys')
    .then(res => res.json())
    .catch(error => alert("Can't get API Keys"))
}

export {
    getKeys
}