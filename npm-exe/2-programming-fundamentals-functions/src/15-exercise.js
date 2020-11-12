/**
 * Complete the function bellow to:
 *
 * Return the sum of the negative numbers in the 'nums' array
 */

// Complete the code to the function
function exercise15() {
    let nums = [20, -10, 30, -5, -15, 50, -10];
    let total = 0;
    for (n in nums) {
        if (nums[n] < 0) {
            total += nums[n];
        };
    };
    return total;
}

module.exports = exercise15;
