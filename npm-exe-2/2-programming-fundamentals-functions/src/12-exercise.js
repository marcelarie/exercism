/**
 * Complete the function bellow to:
 *
 * Return the amount of 1s in the nums array
 */

// Complete the code to the function
function exercise12() {
    let nums = [1, 0, 1, 0, 1, 1, 0, 0];
    let count = 0;
    for (n in nums) {
        if (nums[n] === 1) {
            count++;
        };
    };
    return count;
}

module.exports = exercise12;
