//Problem 3 : Counting Words
//-Constant Array
const arr3 = ['hi', 'hi', 'hello', 'world', 'hello', 'hi', 'greetings'];
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