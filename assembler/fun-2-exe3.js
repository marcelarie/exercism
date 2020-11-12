// Write a function that returns the first half of any array regardless of its length. You can use the following arrays to test your function:

array1 = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
array2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// With a foor loop
function firstHalf(arr) {
    let newArr = [];
    let half = Math.round((arr.length / 2));
    for ( let i = 0; i < half; i++ ) {
        newArr.push(arr[i]);
    } 
    return newArr;
}

console.log(firstHalf(array1));
console.log(firstHalf(array2));

// With slice function 
function firstHalf2(arr) {
    let half = Math.round((arr.length / 2));
    return arr.slice(0, half);
    }

console.log(firstHalf2(array1));
console.log(firstHalf2(array2));

