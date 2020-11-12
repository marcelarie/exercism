/**
 * Create a while loop that multiplies by 2
 * every element in the "numbers" array.
 */
function exercise10() {
    let numbers = [1, 2, 4, 5, 6, 7, 8, 9];

    // Write your solution bellow this line
    i = 0
    while ( i < numbers.length ) {
        numbers[i] *= 2;
        i++;
    };

    // Don’t change the code bellow this line
    return numbers;
}

module.exports = exercise10;
