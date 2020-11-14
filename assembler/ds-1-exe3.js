// Write a function that returns an array with the last 2 values of the following object:

product = {name: "Sony WH-1000XM3", price: "300.00", itemsInStock: 23};

function lastTwo(object) {
    const copy = Object.entries(object)
    let last = copy.length - 1;
    let mod = []
    mod = mod.concat(copy[last], copy[last - 1])
    return mod;
};

console.log(lastTwo(product));
