// 1. Basic Rest Parameter Example
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 2. Rest Parameters with Other Parameters
function createOrder(customerName, ...items) {
    console.log(`Order for ${customerName}:`);
    items.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// 3. Rest Parameters in Arrow Functions
const calculateAverage = (...scores) => {
    const total = scores.reduce((sum, score) => sum + score, 0);
    return total / scores.length;
};

// 4. Rest Parameters with Array Methods
const findMax = (...numbers) => Math.max(...numbers);
const findMin = (...numbers) => Math.min(...numbers);

// 5. Rest Parameters for Function Composition
function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

// 6. Rest Parameters with Type Checking
function processNumbers(...numbers) {
    const validNumbers = numbers.filter(num => typeof num === 'number');
    return {
        sum: validNumbers.reduce((a, b) => a + b, 0),
        average: validNumbers.reduce((a, b) => a + b, 0) / validNumbers.length,
        count: validNumbers.length
    };
}

// Example Usage
console.log('1. Basic Sum Example:');
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

console.log('\n2. Order Creation Example:');
createOrder('John', 'Pizza', 'Burger', 'Fries');

console.log('\n3. Average Calculation:');
console.log(calculateAverage(85, 92, 78, 90, 88)); // 86.6

console.log('\n4. Max and Min:');
console.log('Maximum:', findMax(10, 5, 8, 12, 3)); // 12
console.log('Minimum:', findMin(10, 5, 8, 12, 3)); // 3

console.log('\n5. Multiplication:');
console.log(multiply(2, 3, 4, 5)); // 120

console.log('\n6. Number Processing:');
console.log(processNumbers(1, 2, 3, 'invalid', 4, 5));
// { sum: 15, average: 3, count: 5 }

// 7. Practical Example: Shopping Cart
const shoppingCart = {
    items: [],
    addItems(...newItems) {
        this.items.push(...newItems);
        return this.items;
    },
    getTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
};

console.log('\n7. Shopping Cart Example:');
shoppingCart.addItems(
    { name: 'Laptop', price: 999 },
    { name: 'Mouse', price: 25 },
    { name: 'Keyboard', price: 100 }
);
console.log('Cart Items:', shoppingCart.items);
console.log('Total:', shoppingCart.getTotal()); 