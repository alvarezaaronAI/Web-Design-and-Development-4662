// Problem 1 : Replacing Letter
//-Constant Array
const arr1 = ['a', 'e', 'i', 'o', 'u'];
console.log('---------------------- Problem 1 ----------------------')
console.log('*** Arr Information / Input String Information***')
console.log(arr1);
//-Constant String Input
let inputString = 'node.js';
console.log('Input String : ' + inputString)
console.log('*************')
//Creating Function
const replaceLetters = (inputString, inputArray) => {
    //Creating Storing Value Output.
    let outputString = '';
    //Reading Every Letter in the String Input
    for (letter in inputString) {
        //Checking if it appears in Array Information
        if (inputArray.includes(inputString[letter])) {
            //Appending Dash if it does
            outputString += '-';
        }
        else {
            //Else Appending the letter it self
            outputString += inputString[letter];
        }
    }
    //Output Final Solution
    console.log('*** Final Function Solution ***')
    console.log(outputString);
    console.log('*************')

}
replaceLetters(inputString, arr1);
console.log('---------------------- Problem 1 ----------------------')
console.log()
//Problem 2 : Sum Array
//-Constant Array
const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false];
console.log('---------------------- Problem 2 ----------------------')
console.log('*** Arr Information ***')
console.log(arr2);
console.log('*************')

//Creating Function

const sumArray = (inputArray) => {
    let outputSum = 0;
    //Reading Each Value in Array Information
    for (index in inputArray) {
        //Storing Parsed Interger
        let tempIndexVal = parseInt(inputArray[index]);
        //Checking for Valid Parsed Number
        if (!isNaN(tempIndexVal)) {
            outputSum += tempIndexVal;
        }
    }
    //Outputing Final Solution
    console.log('*** Final Function Solution ***')
    console.log('Output Value : ' + outputSum);
    console.log('*************')

}
sumArray(arr2);
console.log('---------------------- Problem 2 ----------------------')
console.log()

//Problem 3 : Counting Words
//-Constant Array
const arr3 = ['hi', 'hi', 'hello', 'world', 'hello', 'hi', 'greetings'];
console.log('---------------------- Problem 3 ----------------------')

console.log('*** Arr Information ***')
console.log(arr3);
console.log('*************')

//Creating Function

const countingWords = (inputArray) => {
    //Creating Unique List
    let uniqueArray = [];
    for (index in inputArray) {
        if (!uniqueArray.includes(inputArray[index])) {
            uniqueArray[inputArray[index]] = 0;
        }
    }
    //Going to every Word in Array Information and counting for duplicates
    let finalList = {};
    //Looping for every unique word found
    for (index in uniqueArray) {
        let uniqueWord = index;
        //Looping for every word in Array Information
        for (word in inputArray) {
            //Checking wether its a duplicate and if so, add one to the counter
            if (uniqueWord === inputArray[word]) {
                uniqueArray[index]++;
            }
        }
        //Creating Object from the unique Array.
        finalList[index] = uniqueArray[index];
    }
    //Ouput Final Solution
    console.log('*** Final Function Solution ***')
    console.log(finalList);
    console.log('*************')

}
countingWords(arr3);
console.log('---------------------- Problem 3 ----------------------')
console.log()

//Problem 4 : Creating Animals
//-Constant Array
const arr4 =

    [

        [

            { property: 'name', assign: 'Garfield' },

            { property: 'owner', assign: 'Jon Arbuckle' },

            { property: 'type', assign: 'cat' }

        ],

        [

            { property: 'name', assign: 'Snoopy' },

            { property: 'owner', assign: 'Charlie Brown' },

            { property: 'type', assign: 'dog' }

        ]

    ];
console.log('---------------------- Problem 4 ----------------------')

console.log('*** Arr Information ***')
console.log(arr4);
console.log('*************')
//Creating Function

const createAnimals = (inputArray) => {

    let finalArrayObjects = {}

    for (index in inputArray) {
        //Reading Every Objects in the Array Information
        let arrayObjects = inputArray[index];


        let singleObject = {};
        //Reading Every Properties of each Object
        for (listProperties in arrayObjects) {
            //Reading One Property of the Object
            let sigleProperties = arrayObjects[listProperties];

            //Reading / Accessing Values / Storing
            singleObject[sigleProperties.property] = sigleProperties.assign;

        }
        //Storing Each newly saved Object
        finalArrayObjects[index] = singleObject;

    }
    //Output Final Solution
    console.log('*** Final Function Solution ***')
    console.log(finalArrayObjects);
    console.log('*************')
}
createAnimals(arr4);
console.log('---------------------- Problem 4 ----------------------')