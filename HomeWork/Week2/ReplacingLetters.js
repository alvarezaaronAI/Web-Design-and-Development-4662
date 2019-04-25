// Problem 1 : Replacing Letter
//-Constant Array
const arr1 = ['a', 'e', 'i', 'o', 'u'];
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