/*
  Given two arrays of ints
  return the symmetric differences, (aka disjunctive union)
    - these are the elements which are in either of the sets and not their intersection (the union without the intersection)
      think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
    - i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)
  Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
  Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];


/**
 * Produces the symmetric differences, aka disjunctive union of two sets.
 * Venn Diagram Visualization:
 * @see https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
 * - Time: O(?).
 * - Space: O(?).
 * @param  {Array<number>} numsA
 * @param  {Array<number>} numsB
 *    Both given sets are multisets in any order (contain dupes).
 * @returns {Array<number>} The union of the given sets but excluding the shared
 *    values (union without intersection).
 *    i.e., if the element is in one array and NOT the other, it should be
 *    included in the return.
 */
//                              n       m
// function symmetricDifferences(numsA, numsB) {
//     const newArray = []; k
//     // o(n)
//     for (let i = 0; i < numsA.length; i++) {
//         //checking to see if numsA[i] is not in NumsB using include function
//         //           o(m)                      o(k)
//         if (!numsB.includes(numsA[i]) && !newArray.includes(numsA[i])) {
//             //checking if numsA[i] is not already in the NewArray
//             newArray.push(numsA[i])
//         }
//     }
//     //                        o (m)
//     for (let j = 0; j < numsB.length; j++) {
//         //checking to see if numsB[j] is not in NumsA using include function
//         //       o(n)                                   o(k)
//         if (!numsA.includes(numsB[j]) && !newArray.includes(numsB[j])) {
//             //checking if numsB[j] is not already in the NewArray
//             newArray.push(numsB[j])
//         }
//     }
//     // o(n(o(m)+o(k))) + o(m(o(n)+o(k)))
//     //  o(n(m)) + o(m(n))
//     //         o(n*m) 
//     return newArray;
// }

// OR

function symmetricDifferences(numsA, numsB) {
    let dict1 = {};
    let dict2 = {};
    const answer = [];
    let maxLength;

    //check to see which array is longer, set maxLength to larger of the two
    numsA.length < numsB.length ? maxLength = numsB.length : maxLength = numsA.length;
    //if both arrays are empty, just return answer since there's no point in continuing
    if (maxLength === 0) {
        return answer;
    }

    //iterate through both arrays, add each value to each respective dictionary
    // o(n||m)
    for (var i = 0; i < maxLength; i++) {
        //ensure the value in the numsA is not undefined (in case numsA is shorter than numsB), add the value to dict1 if so
        if (numsA[i] != undefined) {
            dict1[numsA[i]] = (dict1[numsA[i]] || 0) + 1;
        }
        //ensure the value in the numsB is not undefined (in case numsB is shorter than numsA), add the value to dict2 if so
        if (numsB[i] != undefined) {
            dict2[numsB[i]] = (dict2[numsB[i]] || 0) + 1;
        }
    }
    //iterate through keys in dict1, if key is not present in dict2, push to answer array
    // o(k)
    for ((key) in dict1) {
        if (!dict2[key]) {
            answer.push(key);
        }
    }
    // iterate through keys in dict2, if key is not present in dict1, push to answer array
    // o(l)
    for ((key) in dict2) {
        if (!dict1[key]) {
            answer.push(key);
        }
    }
    // o(n) + o(k) + o(l)
    // o(n)
    return answer;
}

// for the first solution
// console.log("set A : " + setA1)
// console.log("set B : " + setB1)
// console.log("Differences : " + symmetricDifferences(setA1, setB1))

// console.log("set A : " + setA2)
// console.log("set B : " + setB2)
// console.log("Differences : " + symmetricDifferences(setA2, setB2))

// console.log("set A : " + setA3)
// console.log("set B : " + setB3)
// console.log("Differences : " + symmetricDifferences(setA3, setB3))

// console.log("set A : " + setA4)
// console.log("set B : " + setB4)
// console.log("Differences : " + symmetricDifferences(setA4, setB4))

// console.log("set A : " + setA5)
// console.log("set B : " + setB5)
// console.log("Differences : " + symmetricDifferences(setA5, setB5))


console.log(symmetricDifferences(setA1, setB1));
console.log(symmetricDifferences(setA2, setB2));
console.log(symmetricDifferences(setA3, setB3));
console.log(symmetricDifferences(setA4, setB4));
console.log(symmetricDifferences(setA5, setB5));