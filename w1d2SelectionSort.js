//w1d2
/* 
  https://visualgo.net/en/sorting
    
  Selection sort works by iterating through the list, finding the minimum
  value, and moving it to the beginning of the list. Then, ignoring the first
  position, which is now sorted, iterate through the list again to find the
  next minimum value and move it to index 1. This continues until all values
  are sorted.
  
  Unstable sort.
  
  Time Complexity:
    Worst Case: O(n^2) quadratic
  Space: O(1) constant.
  Selection sort is one of the slower sorts.
  - ideal for: pagination, where page 1 displays 10 records for example,
      you run selection sort for 10 iterations only to display the first 10
      sorted items.
*/

const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Sorts given array in-place.
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array after being sorted.
 */
function selectionSort(nums = []) {
    // iterate through the array nums
    for (let i = 0; i < nums.length; i++) {
        // stores index of minimum value
        let mindex = i;
        // iterate through the unsorted portion of the array by starting
        // at the index to the right of 'i'
        for (let j = i + 1; j < nums.length; j++) {
            // if a value is less than the min, make 'j' the new 'mindex'
            if (nums[j] < nums[mindex]) {
                mindex = j;
            }
        }
        // swap the value at the front of the unsorted array with the
        // minimum value
        if (mindex !== i) {
            // the if statement prevents the swap if the mindex === i
            // becasue then there is no reason to do al thats below
            let temp = nums[i];
            nums[i] = nums[mindex];
            nums[mindex] = temp;
            // could also use a Ternary instead of the three lines above
            // dont need to make a temp variable then
            // [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]]
        }
    }
    return nums; // return the sorted array
}

// Pseudocode
// Iterate through the list starting at index 0
// Create a second for loop
//   create a variable for min
//   Compare j to i
//   if J is larger than I, 
//   I becomes min. 
// Continue to iterate through the loop comparing min to each value 
// repeat until the entire array has been sorted 
// return the sorted array

console.log(selectionSort(numsOrdered))
console.log(selectionSort(numsRandomOrder))
console.log(selectionSort(numsReversed))