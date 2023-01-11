/* 
  Stable sort.
  Visualization:
  https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
  Time Complexity
    - Best case: O(?) linearithmic.
    - Average case: O(?) linearithmic.
    - Worst case: O(?) linearithmic.
  Space: O(n) linear
  steps:
    1. create a merge function to merge two already sorted arrays into a single
        sorted array.
      - you do NOT need to work in place, ok to use a new array
    2. create mergeSort function to sort the provided array
      - split the array in half and recursively merge the halves using the
          previously created merge function.
      - splitting of arrays stops when array can no longer be split.
      - an array of 1 item is by definition sorted, so two arrays of 1 item
          can therefore be merged into a sorted array.
*/

// merge
const sortedA1 = [];
const sortedB1 = [];
const expectedMerge1 = [];

const sortedA2 = [5];
const sortedB2 = [2];
const expectedMerge2 = [2, 5];

const sortedA3 = [3];
const sortedB3 = [2, 3, 4, 7];
const expectedMerge3 = [2, 3, 3, 4, 7];

const expectedMerge4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Efficiently merges two already sorted arrays into a new sorted array.
 * Do not mutate the given arrays.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} left
 * @param {Array<number>} right
 * @returns {Array<number>} A new sorted array containing all the elements of
 *    both given halves.
 */
const sortedA4 = [1, 2, 4, 5, 6, 19, 20, 100];


const sortedB4 = [3, 7, 8, 10];
function merge(left = [], right = []) {
    let merged = [];
    let larger = left.length > right.length ? left : right;
    let smaller = left.length < right.length ? left : right;
    let leftI = 0


    for (let rightI = 0; leftI < larger.length;) {
        if (larger[leftI] > smaller[rightI]) {
            merged.push(smaller[rightI]);
            rightI++;
        } else {
            merged.push(larger[leftI])
            leftI++
        }
    }

    if (leftI < larger.length) {
        for (let i = leftI; i < larger.length; i++) {
            merged.push(larger[i]);
        }
    }
    return merged;
}

console.log(merge(sortedA4, sortedB4));

//Another way
//                  o(n)        o(m)
// function merge(left = [], right = []) {
//     let combined=[];
//     let rightIndex = 0;
//     let leftIndex = 0;
//                      o(n) + o(m) + (plus the other wile loops from 95) o(n) + o (m) = o(n)
//     while (leftIndex < left.length && rightIndex < right.length){
//       if (left[leftIndex] < right[rightIndex]){
//         combined.push(left[leftIndex]); 
//         leftIndex++;
//       }
//       else{
//         combined.push(right[rightIndex]);
//         rightIndex++;
//       }
//     }
//              o(n)
//     while (leftIndex < left.length){
//       combined.push(left[leftIndex]);
//       leftIndex++;
//     }
//              o(m)
//     while (rightIndex <right.length){
//       combined.push(right[rightIndex]);
//       rightIndex++;
//     }
//     return combined;
// }

//reason fro weird math of o(n) + o(m)= o(n)
//is bc infinity + infinity is still infinity



// mergeSort
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expectedSort = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Creates a new sorted array based on the given nums being recursively split
 * and merged.
 * Best: O(?) linearithmic.
 * Avg: O(?) linearithmic.
 * Worst: O(?) linearithmic.
 * @param {Array<number>} nums
 * @returns {Array<number>} A New sorted array.
 */
function mergeSort(nums = []) { }
