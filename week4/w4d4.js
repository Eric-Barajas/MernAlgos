/* 
https://leetcode.com/problems/container-with-most-water/
*/

/* 
Finds the container that can hold the most water based on it's area.
A container's length is the distance between indexes and the two sides are
the heights at those indexes.
See: https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
*/

const heights1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const expected1 = 49;
// Explanation: heights1[1] and heights1[8] as container edges.
// Length = 8 - 1. Height = 7

const heights2 = [1, 1];
const expected2 = 1;

const heights3 = [4, 3, 2, 1, 4];
const expected3 = 16;

const heights4 = [1, 2, 1];
const expected4 = 2;

/**
 * Finds the container that can hold the most water based on it's area.
 * A container's length is the distance between indexes and the two sides are
 * the heights at those indexes.
 * @see https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {number[]} heights
 * @returns {number} Representing the max area of a container.
 */
function containerWithMostWater(heights) {
    let largest = 0;
    // for loop going through each first wall (index)
    for (let i = 0; i < heights.length - 1; i++) {
        // for loop going through each subsequent wall (index)
        for (let j = i + 1; j < heights.length; j++) {
            let shorter = 0;
            // see which wall is shorter
            (heights[i] > heights[j]) ? shorter = heights[j] : shorter = heights[i];
            // calculate how much water it can hold 
            let calcAmount = (j - i) * shorter;
            // see if it's the largest amount so far
            if (calcAmount > largest) {
                largest = calcAmount;
            }
        }
    }
    return largest;
}

console.log(containerWithMostWater(heights1));
console.log(containerWithMostWater(heights2));
console.log(containerWithMostWater(heights3));
console.log(containerWithMostWater(heights4));