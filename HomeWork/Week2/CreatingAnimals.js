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