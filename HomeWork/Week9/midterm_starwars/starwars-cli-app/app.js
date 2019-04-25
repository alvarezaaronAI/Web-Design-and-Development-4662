// application that allows uses the custom-module
// allows the user to search, select a result, fetch details and display details
const 
    superagent  = require('superagent')
const 
    inquirer = require('inquirer')
const 
    starwars_Module = require('starwars-module')

async function search ( name ){
    const searchNameResponse = await starwars_Module.search(name)
    const listOfCharacters = searchNameResponse.results
    const selectedName = selectCharacter(listOfCharacters)
    console.log(selectedName)
    //Fetch Data Based on Selection
    //Print orderly Fashion
    //Record 
}

async function selectCharacter(starWarsChars) {
    let choices = getCharacters(starWarsChars);
  
    return inquirer.prompt([
      {
        type: "list",
        name: "character",
        message: "Select a Star Wars character for more info",
        choices
      }
    ]);
  }
  
  
  const getCharacters = (obj) => {
      
      let charList = [];
      
      obj.forEach(character => {
          charList.push(character.name);
      } );
      
      return charList;
  }
const print = (chractersObj) => {
    console.log(`StarWar Character : ${charactersObj.name}\n`)
    console.log(`${charactersObj.name} Birth Year : ${charactersObj.birth_year}`)
    console.log(`${charactersObj.name} Eye Color : ${charactersObj.eye_color}`)
    console.log(`Height in Centimeters : ${charactersObj.height}`)
}



module.exports = { search }