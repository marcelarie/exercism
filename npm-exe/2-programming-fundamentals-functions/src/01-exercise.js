/**
 * Complete the function bellow to:
 *
 * 1. receive an array of numbers as a parameter
 * 2. multiply each items in the array by 2
 * 3. return the array.
 *
 * NOTE: You will have to add the parameters to the function
 */

// Complete the code to the function
function exercise01(arr) {
    for (item in arr) {
        arr[item] = arr[item] * 2;
    };
}

module.exports = exercise01;
