//Problem 2 : Sum Array
//-Constant Array
const arr2 = [5, 2, 'a', 4, '7', true, 'b', 'c', 7, '8', false];
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