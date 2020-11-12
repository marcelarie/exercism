/**
 * Complete the function bellow to:
 *
 * Return the sum of all the odd numbers in the nums array
 *
 * NOTE:
 * You will have to learn how to use the % operator
 */

// Complete the code to the function
function exercise11() {
    let nums = [1, 2, 3, 6, 7, 11, 2, 12];
    let total = 0;
    for (n in nums) {
        if (nums[n] % 2 === 0) {
            total += nums[n];
        };
    };
    return total;
}

module.exports = exercise11;
