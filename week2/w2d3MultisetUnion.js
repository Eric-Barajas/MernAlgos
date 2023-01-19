/* 
  Efficiently combine two already sorted multiset arrays 
  into an array containing the sorted set intersection of the two.
  Output: only the shared values between the two arrays (deduped).
  Venn Diagram Visualization (bottom) https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
*/

const numsA1 = [0, 1, 2, 2, 2, 7];
const numsB1 = [2, 2, 6, 6, 7];
const expected1 = [2, 7];

const numsA2 = [0, 1, 2, 2, 2, 7];
const numsB2 = [2, 2];
const expected2 = [2];

const numsA3 = [0, 1, 2, 2, 2, 7];
const numsB3 = [10];
const expected3 = [];

/**
 * Efficiently combine the two sorted arrays into a new array that is the a
 * sorted set intersection.
 * Venn Diagram Visualization (bottom):
 * @see https://i.ytimg.com/vi/sdflTUW6gHo/maxresdefault.jpg
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedA
 * @param {Array<number>} sortedB Both sets are multisets
 *    (multi in that it can contain multiple dupes).
 * @returns {Array<number>} The sorted set intersection: a new array that is
 *    sorted and contains only the shared values between the two arrays
 *    deduped.
 */
// function orderedIntersection(sortedA, sortedB) {
//   // current index for sortedA
//   let i = 0;
//   // current index for sortedB
//   let j = 0;
//   // array containing the sorted set intersection
//   let newArray = [];
//   // if both are less then the length of the array
//   while (i < sortedA.length && j < sortedB.length) {
//     // if A and B are equal it adds it to the NewArray
//     if (sortedA[i] === sortedB[j]) {
//       newArray.push(sortedA[i]);
//       // skipping any duplication in both arrays
//       while (sortedA[i] === sortedA[i+1]) i++;
//       while (sortedB[j] === sortedB[j+1]) j++;
//       i++;
//       j++;
//       // if the element in A is less than B it moves A foward
//     } else if (sortedA[i] < sortedB[j]) {
//       i++
//       // if element in B is less than A it moves B foward 
//     } else {
//       j++
//     }
//   }
//   //let result = new Set(newArray)
//   return newArray;
// }

function orderedIntersection(sortedA, sortedB) {
    // object to hold sorted set intersection
    let sortedSet = {};
    // iterate through sortedA
    //     0(n^2)
    sortedA.forEach((item) => {
        // add item to sortedSet if it is also in sortedB

        if (sortedB.includes(item)) {
            sortedSet[item] = item;
        }
    })
    // return array of the values in sortedSet
    //    
    return Object.values(sortedSet);
}

console.log(orderedIntersection(numsA1, numsB1));
console.log(orderedIntersection(numsA2, numsB2));
console.log(orderedIntersection(numsA3, numsB3));