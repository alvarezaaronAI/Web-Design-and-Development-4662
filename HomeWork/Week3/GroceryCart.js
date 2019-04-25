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
