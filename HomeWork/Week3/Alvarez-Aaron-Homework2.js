console.log('---------------------- Problem 1 ----------------------')
//Constant Data Tester
const group1 = {
    name: 'Justice League',
    leader: 'Wonder Woman',
    members: ['Batman', 'Superman']
}

const group2 = {
    name: 'Avengers',
    members: ['Hulk', 'Thor', 'Captain America']
}
//Create a Function that takes in an object.
const print = (obj) => { //Deconstruct the Object
    const { name, leader, members } = (obj);

    const teams = `Team(s): ${name ? name : ''}`;
    const leaders = `Leader(s): ${leader ? leader : ''}`;
    let teamMembers = 'Member(s): ';
    const membersLenght = members.length - 1;
    for (mem in members) {
        if( mem == 0){
            // If its the first member, append the name only
            teamMembers += members[mem];
        }
        else if (membersLenght != mem && mem !=0) {
            //else append proper comma and the member
            teamMembers += ', ' + members[mem];
        }
        else {
            // finally if its the last member append proper and statement and the last memmber
            teamMembers += ' and ' + members[mem];
        
        }
    }
    //Print out Data.
    console.log(teams);
    console.log(leaders);
    console.log(teamMembers);

};
//Run Methods with specific Objects
print(group1);
console.log("--------")
print(group2);

console.log('---------------------- Problem 1 ----------------------')
console.log('---------------------- Problem 2 ----------------------')

class groceryCart {
    constructor(arrayOfObjs) {
        this.cart;
        this.total = 0.0;
        if(arrayOfObjs === undefined) {
            //If the array of objects is empty, the import default ones.
            //Import Defaults
            this.cart = [];
        }
        else {
            this.cart = arrayOfObjs;
        }
    }

    addItem(itemObj) {
        if (!itemObj.price) {
            itemObj.price = undefined;
        }
        this.cart.push(itemObj);
        return this;
    }

    removeItem(itemNameStr) {
        let newGroceryList = [];
        // Resources Credit: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
        //Filters through the cart and removed the one that matches
        newGroceryList = this.cart.filter(
            grocery => (grocery.item.toLowerCase() !== itemNameStr.toLowerCase()) );
        this.cart = newGroceryList;
        return this;
    }

    addPrice(itemStr, priceInt) {
        // Loops through the cart and add the price to the item string that matches
        this.cart.forEach(grocery => {
            const isSameItem = grocery.item.toLowerCase() === itemStr.toLowerCase();
            if (isSameItem) {
                grocery.price = priceInt;
            }
        });
        return this;
    }

    addTotal() {
        // Loops through the cart and adds to the total.
        this.cart.forEach(grocery => {
            if (grocery.price) {
                this.total += (grocery.price * grocery.quantity);
            }
        });
        return this;
    }

    get print() {
        this.cart.forEach(grocery => {
            console.log(`Item: ${grocery.item} | Quantity: ${grocery.quantity} | Price: ${grocery.price ? grocery.price : "n/a"}`);
        });
        console.log(`Total: ${this.total}`);
    }
}
const cart = new groceryCart();
cart
    .addItem({ item: 'bread', quantity: '1' })
    .addItem({ item: 'soup', quantity: '3' })
    .addItem({ item: 'chips', quantity: '4' })
    .addItem({ item: 'soda', quantity: '1' })
    .addPrice('chiPs', 5.99)
    .removeItem('Chips')
    .addPrice('soda', 1.04)
    .addTotal()
     .print;
console.log('---------------------- Problem 2 ----------------------')
