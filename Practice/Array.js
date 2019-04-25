let myArray = [];
console.log("myArray: ", myArray);
let daysOfTheWeek = ["Sunday", "Monday..."];
console.log("daysOfTheWeek: ", daysOfTheWeek);
//Array is actually an Object, a special Object
myArray = [0, 1, 2, 3, "Strings1", "String2", true];
console.log("myArray: ", myArray);

//Arrays
var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

console.log("counties: ", counties);

//Arrays that contain Objects
let arrayOfStuff = [
  {
    name: "value"
  },
  [1, 2, 3],
  true
];
console.log("arrayOfStuff: ", arrayOfStuff);
console.log(arrayOfStuff.length);

//Munipulating Arrays
console.log("counties: ", counties);
console.log(
  counties[0]);
console.log(counties[2]);
//Modify
counties[1] = "Los Angeles";
console.log(counties[1]);
console.log("counties: ", counties);
//Adding end of Array
counties[counties.length] = "New Countie";
console.log("counties: ", counties);
//or push
counties.push("New County Too");
console.log("counties: ", counties);
//or pop to delete
counties.pop();
console.log("counties: ", counties);

// Removing Moddle Val
delete counties[1];
console.log("counties: ", counties);
//But it still has an empty Space (start, to how many)
counties.splice(1, 1);
console.log("counties: ", counties);
