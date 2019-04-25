//This is an object
{}
let myEmptyObject = {};
console.log('myEmptyObject: ', myEmptyObject);
myEmptyObject = {
    'label': 0,
    'label2': 1,
    'label3': 2,
};
console.log('myEmptyObject: ', myEmptyObject);
let bird = {
    genus: "corvus",
    species: "corvax",
    commonName: "raven",
    callType: "squawky",
    quote: "Nevermore",
    maxOffspring: 5,
    noisy: true,
    deadly: false
  };
  console.log('bird: ', bird);
  var bear = {
    genus: "ursus",
    species: "arctos",
    commonName: "brown bear",
    callType: "roar",
    quote: "",
    maxOffspring: 3,
    noisy: true,
    deadly: true
  };
  console.log('bear: ', bear);
  
  var bookOfKnowledge = {
    "lunch time": "12:30 PM",
    "the ultimate answer": 42,
    bestSong: "Lonnie's Lament",
    earth: "Mostly harmless."
  };
  console.log('bookOfKnowledge: ', bookOfKnowledge);

  //Printing out info
  console.log(bird.quote);
  console.log(bird["quote"]);
  //Assignment
  bird.color = "Black";
  //Not This one
  bird['where it lives' ]= "Los Angeles";
//This is better
  bird.whereItLives = "Los Angeles"
  console.log('bird: ', bird);
  //Delete
  delete bird.color;
  console.log('bird: ', bird);

