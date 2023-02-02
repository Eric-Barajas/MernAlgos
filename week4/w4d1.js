/* 
  Given an array of person objects with the following keys:
    firstName[string]
    lastName[string]
    friends[arr of friend objects]
    isSocialDistancing[bool]
    Friend object keys:
      firstName[string]
      lastName[string]
      isSocialDistancing[bool]
      hasCovid[bool]
    return a new array of the names of people (not friends) who are at high risk of infection
    A person is at high risk of catching the virus if they meet all the below criteria:
    1. not practicing social distancing
    2. have a friend who is not practicing social distancing whom hasCovid
    Bonus: after solving it, make a 2nd solution to practice functional programming with built in methods
*/

const friend1 = {
    firstName: "Friend",
    lastName: "One",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend2 = {
    firstName: "Friend",
    lastName: "Two",
    isSocialDistancing: false,
    hasCovid: true,
};

const friend3 = {
    firstName: "Friend",
    lastName: "Three",
    isSocialDistancing: false,
    hasCovid: false,
};

const people = [
    {
        firstName: "Person",
        lastName: "One",
        isSocialDistancing: false,
        friends: [friend2, friend3],
    },
    {
        firstName: "Person",
        lastName: "Two",
        isSocialDistancing: true,
        friends: [friend2, friend1],
    },
    {
        firstName: "Person",
        lastName: "Three",
        isSocialDistancing: false,
        friends: [friend2, friend1],
    },
];

const expected = ["Person One", "Person Three"];

/**
 * @typedef {Object} Friend
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 * @property {boolean} hasCovid
 *
 * @typedef {Object} Person
 * @property {Array<Friend>} friends
 * @property {string} firstName
 * @property {string} lastName
 * @property {boolean} isSocialDistancing
 */

/**
 * Finds the people who are at risk of contracting Covid.
 * - Time O(?).
 * - Space O(?).
 * @param {Array<Person>} persons
 * @returns {Array<string>} An array of Person full names for those people who
 *    are at risk. A Person is at risk if:
 *    1. not practicing social distancing.
 *    2. have a friend who is not practicing social distancing whom hasCovid.
 */
function coronaVirusAtRisk(persons) {
    // creating empty at risk output array
    const atRisk = [];
    // loop through our list of people
    for (const person of persons) {
        // if the current person is social distancing, we skip them
        if (person.isSocialDistancing) continue;
        // if our current person is not social distancing, check their friends
        // loop through that person's friends list
        for (const friend of person.friends) {
            // does friend have covid && is not social distancing?
            if (friend.hasCovid && !friend.isSocialDistancing) {
                // add current person to our output (full name)
                atRisk.push(`${person.firstName} ${person.lastName}`);
                // no need to check more
                break;
            }
        }
    }
    // return at risk list
    return atRisk;
}

// test
console.log("Test coronavirusAtRisk");
console.log(coronaVirusAtRisk(people));
// print expected result
console.log("Expected");
console.log(expected);

// function coronaVirusAtRisk(persons) {
//     // creating empty at risk output array
//     // loop through our list of people
//     // if our current person is not social distancing, check their friends
//     // loop through that person's friends list
//     // does friend have covid && is not social distancing?
//     // add current person to our output
//     // return at risk list
//     let risk = []
//     let maybeHasCovid = false
//     for (let i = 0; i < persons.length; i++) {
//         if (!persons[i].isSocialDistancing) {
//             // console.log(persons[i].friends);
//             for (let j = 0; j < persons[i].friends.length; j++) {
//                 if (persons[i].friends[j].hasCovid && !persons[i].friends[j].isSocialDistancing) {
//                     maybeHasCovid = true
//                     risk.push(persons[i]);
//                     break;
//                 }
//             }
//             // overloaded AND operator 
//             // if maybeHasCovid true then push 
//             // maybeHasCovid && risk.push(persons[i]);
//         }
//     }
//     return risk;
// }

// console.log(coronaVirusAtRisk(people));

// ========================================================


/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
const expected3 = [];

/**
 * Removes every element in the array, starting from idx 0 until the callback
 * function returns true when passed the iterated element.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr
 * @callback cb A callback function that expects to receive an array element.
 * @returns {Array<any>} The given array with only the remaining items.
 */
// function dropIt(arr, cb) {
// FIRST WAY
// loop over array until the callback is false
// while(!cb(arr[0])) {
//   // this is not optimal, since this alone is O(n), but the documentation
//   // seems to indicate we want to return the same array
//   arr.shift();
// }

// SECOND WAY
// const result = [];
// let passed = false;
// for (let index = 0; index < arr.length; index++) {
//   // change flag to true if callback succeeds
//   if (!passed && cb(arr[index])) passed = true;
//   // if flag is true, push to results array
//   if (passed) result.push(arr[index]);
// }
// arr = result;

// THIRD WAY
//     const result = [];
//     let passed = false;
//     for (const item of arr) {
//         // change flag to true if callback succeeds
//         if (!passed && cb(item)) passed = true;
//         // if flag is true, push to results array
//         if (passed) result.push(item);
//     }
//     arr = result;
//     return arr;
// }
// the normal loops didn't work because the array was being changed while looping over it

// FOURTH WAY
function dropIt(arr, cb) {
    // create empty result output array
    let result = [];
    // iterate through array
    for (let i = 0; i < arr.length; i++) {
        // is callback function true for current element?
        if (cb(arr[i])) {
            // assign uniterated elements of array to result
            result = arr.slice(i);
            // break out of for loop
            break;
        }
    }
    // return desired output
    return result;
}

// .push is a constant time whereas a .slice is o(n)

// FIFTH WAY
// function dropIt(arr, cb) {
//     // 
//     const dropped = [];
//     for (let i = 0; i < arr.length; i++) {
//         let callbackIsTrue = cb(arr[i])
//         callbackIsTrue && dropped.push(arr[i]);
//     }
//     return dropped;
// }

// SIXTH WAY (using filter)
// function dropItWithFilter(arr, cb) {
//     //return arr.filter(item => cb(item));
// OR
//      return arr.filter(cb);
// }

// console.log(dropItWithFilter(nums1, callback1));
// console.log(dropItWithFilter(nums2, callback2));
// console.log(dropItWithFilter(nums3, callback3));

// test number 1
console.log("Dropit\nTest 1");
console.log(dropIt(nums1, callback1));
console.log("Expected");
console.log(expected1);
console.log("Test 2");
console.log(dropIt(nums2, callback2));
console.log("Expected");
console.log(expected2);
console.log("Test 3");
console.log(dropIt(nums3, callback3));
console.log("Expected");
console.log(expected3); 