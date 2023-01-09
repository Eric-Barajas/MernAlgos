/* 
  https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
  Stable
  Time Complexity
    - Best: O(n) linear when array is already sorted.
    - Average: O(n^2) quadratic.
    - Worst: O(n^2) quadratic when the array is reverse sorted.
  Space: O(1) constant.
  For review, create a function that uses BubbleSort to sort an unsorted array in-place.
  For every pair of adjacent indices, swap them if the item on the left is larger than the item on the right until array is fully sorted
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts the given nums in-place by mutating the array.
 * Best: O(n) linear when array is already sorted.
 * Average: O(n^2) quadratic.
 * Worst: O(n^2) quadratic when the array is reverse sorted.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given nums after being sorted.
 */
function bubbleSort(nums = []) {
    swapped = false;
    while (!swapped) {
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                swapped = true
                temp = nums[i + 1];
                nums[i + 1] = nums[i];
                nums[i] = temp;
            }
        }
        if (!swapped) {
            break;
        }
        swapped = false;
    }
    return nums;
}

console.log("numsOrdered")
console.log(numsOrdered)
console.log(bubbleSort(numsOrdered))
console.log("numsRandomOrder")
console.log(numsRandomOrder)
console.log(bubbleSort(numsRandomOrder))
console.log("numsReversed")
console.log(numsReversed)
console.log(bubbleSort(numsReversed))
console.log("expected")
console.log(expected)
console.log(bubbleSort(expected))

// Pseudocode:
// create first loop that goes from the index of 0 to the length of the array
// create a second loop that goes from the index of 1 to the length of the array
  // then compare the first loop's value to the second loop's value. 
  // IF the second loop's value is GREATER THAN the first...
      // create a temp variable (so we can swap the values)
      // reassign the value of temp to [i]
      // reassign the value of [i] to [j]
      // reassign the value of [j] to temp 
// return (our sorted) array