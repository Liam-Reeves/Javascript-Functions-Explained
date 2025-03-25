// 1. Function Declaration - Best for named functions that are hoisted
function calculateTotal(price, tax) {
    return price + (price * tax);
}

// 2. Function Expression - Good for anonymous functions or when you need to reassign
const calculateDiscount = function(price, discount) {
    return price - (price * discount);
};

// 3. Arrow Function - Perfect for simple, single-expression functions
const calculateTax = (price, taxRate) => price * taxRate;

// 4. Arrow Function with block body - Good when you need multiple statements
const processOrder = (price, tax, discount) => {
    const subtotal = price;
    const taxAmount = subtotal * tax;
    const discountAmount = subtotal * discount;
    return subtotal + taxAmount - discountAmount;
};

// 5. Arrow Function with implicit return - Most concise for simple calculations
const double = x => x * 2;

// 6. Function with default parameters
function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

// 7. Function with rest parameters
const sum = (...numbers) => numbers.reduce((total, num) => total + num, 0);

// 8. Function with destructuring
const printUserInfo = ({ name, age, email }) => {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
};

// Example usage
console.log(calculateTotal(100, 0.1)); // 110
console.log(calculateDiscount(100, 0.2)); // 80
console.log(calculateTax(100, 0.1)); // 10
console.log(processOrder(100, 0.1, 0.2)); // 90
console.log(double(5)); // 10
console.log(greet()); // Hello, Guest!
console.log(greet('John')); // Hello, John!
console.log(sum(1, 2, 3, 4, 5)); // 15

const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
};
printUserInfo(user); 