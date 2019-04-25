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