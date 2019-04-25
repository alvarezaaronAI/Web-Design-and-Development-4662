// Export a method for API search
// Export a method for API fetch

const 
    config = require('./config'),
    superagent = require('superagent')

const _fetch = (command) => {
    return superagent.get(`${config.url}/people/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)

}

const search = (name) => {
    return _fetch(`?search=${name}`)
}

module.exports = { search }