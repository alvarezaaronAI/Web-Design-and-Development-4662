//Problem 1 -----------------------------------------------------------------
function adder(prev, next){   
    return new Promise(resolve => {
        setTimeout(() => {
            resolve((prev + next));
        }, 10);
    });
}

let arr = [1,2,3,5,8,13,21];
let total = 0;
async function itterateNumbers(arr){

    for (let i = 0; i < arr.length; i++) {
        total += await adder(0, arr[i]);
        //console.log("Total : Currently is : " , total)
    }
    console.log(total);
    return total;
}
console.log(itterateNumbers(arr));
//Problem 2 -----------------------------------------------------------------
const todos = [{
    name: 'get coffee',
    priority: 90
},
{
    name: 'clean room',
    priority: null
},
{
    name: 'go to CS4220',
    priority: 40
},
{
    name: 'do homework before due date',
    priority: 80
}
]

const checkPriority = (todo, callback) => {
    let { name } = todo;
    let { priority } = todo;

    setTimeout(() => {
        const error = !priority ? `No Priority` : null;
        if (name && priority) {
            callback(error, todo);
        }
        else {
            callback(error, name);

        }
    }, 90);
}
function compareTodo(todoA, todoB) {
    const todoPriorityA = todoA.priority;
    const todoPriorityB = todoB.priority;
    // console.log("Comparing ----- ")
    // console.log("todoA : ", todoPriorityA);
    // console.log("todoB : ", todoPriorityB);
    // console.log("---------- ")

    let comparison = 0;
    if (todoPriorityA > todoPriorityB) {
        comparison = 1;
    } else if (todoPriorityA < todoPriorityB) {
        comparison = -1;
    }
    //console.log("Returned : ", comparison)
    return comparison * -1;
}

function makePriorityList(todos) {
    const priorityList = [];
    const rejectedList = [];
    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i]
        checkPriority(todo, (error, result) => {
            if (!error) {
                priorityList.push(result);
            }
            else {
                rejectedList.push(result)
            }
            if(i == todos.length-1){
                console.log('Priority \n' , priorityList.sort(compareTodo));
                console.log('Missing Priority \n' , rejectedList);
            }
        })
    }
}
makePriorityList(todos);
