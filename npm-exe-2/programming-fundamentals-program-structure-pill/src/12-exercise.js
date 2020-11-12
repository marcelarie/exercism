/**
 * Create a loop using the for in loop that
 * changes the value of the current item in the array:
 *
 * if the number is smaller than 10:
 * array item value = 'was smaller'
 *
 * if the number is equal to 10:
 * array item value = 'was equal'
 *
 * if the number is larger than 10:
 * array item value = 'was larger'
 *
 * @example
 * [1, 15, 10] => ["was smaller", "was larger", "was equal"]
 */
function exercise12() {
    let numbers = [1, 22, 4, 10, 15, 10, 5, 8, 12];

    // Write your solution bellow this line
    for ( num in numbers ) {
        if ( numbers[num] < 10 ) {
            numbers[num] = 'was smaller';
        } else if ( numbers[num] === 10 ) {
            numbers[num] = 'was equal';
        } else {
            numbers[num] = 'was larger';
        };
    };

    // Don’t change the code bellow this line
    return numbers;
}

module.exports = exercise12;
