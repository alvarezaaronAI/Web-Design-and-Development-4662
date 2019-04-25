const 
    config = require('./config')
const 
    superagent = require('superagent')

//Helper Function to Fetch Data
const _fetch = command =>{
    return superagent
        .get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)

}

const getAllCharcPage = (page = 1) => {
    return _fetch(`/people/?page=${page}`)
}

//const getAllChracters =

const search = all =>{
    const responseCharacBody = getAllCharcPage()
    const totalNumbersOfChracters = 0;
    const allChacters = {}
    while(responseCharacBody.response)
        
}
