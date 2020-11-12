/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums multidimensional array
 */

// Complete the code to the function
function exercise13() {
    let nums = [
        [0, 1, 0, 1],
        [0, 1, 0, 1],
        [1, 0, 1, 0],
    ];
    let count = 0;
    for (n in nums) {
        for (j in nums[n]) {
            if (nums[n][j] === 1) {
                count++;
            };
        };
    };
    return count;
}

module.exports = exercise13;
