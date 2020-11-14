/**
 * Use the built in `pop()` method of arrays
 * to remove the last 2 element from the `names` array.
 */
function exercise05() {
    const names = ['John', 'Mark', 'Spence', 'Ana'];
    // Write your solution bellow this line
    for (let i = 0; i < 2; i++) {
        names.pop()
    };
    // Don’t change the code bellow this line
    return names;
}

module.exports = exercise05;
