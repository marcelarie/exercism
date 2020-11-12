// Write a function that returns an array with the first 2 keys of the following object:

const product = {name: 'Sony WH-1000XM3', price: '300.00', itemsInStock: 23};
const arrObject = Object.entries(product);
const mod = {}

function firstTwo(object) {
    const arrObject = Object.entries(object);
    const mod = {}
    for (let i = 0; i < 2; i++) {
        mod[arrObject[i][0]] = arrObject[i][1];
    };
    return mod;
};

console.log(firstTwo(product))
