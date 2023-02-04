/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case
.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expected1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expected2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expected3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expected4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expected5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */
function canBuildS1FromS2(s1, s2) {
    // create frequency tables for letters in each string
    const obj1 = {};
    const obj2 = {};
    s1.toLowerCase().split("").forEach(char => {
        obj1.hasOwnProperty(char)
            ? obj1[char] += 1
            : obj1[char] = 1;
    })
    s2.toLowerCase().split("").forEach(char => {
        obj2.hasOwnProperty(char)
            ? obj2[char] += 1
            : obj2[char] = 1;
    })
    // assume we can build s1 from s2
    let canBuild = true;
    // iterate through s1 frequency table
    Object.keys(obj1).every(key => {
        // check if s2 contains the letter 
        // and if so, see if it contains enough of the letter
        if (!obj2.hasOwnProperty(key) || obj2[key] < obj1[key]) {
            // cannot build s1 from s2
            canBuild = false;
            // break out of loop
            return false;
        }
        return true
    })
    // return whether or not we can build s1 from s2
    return canBuild;
}

console.log(canBuildS1FromS2(strA1, strB1));
console.log(canBuildS1FromS2(strA2, strB2));
console.log(canBuildS1FromS2(strA3, strB3));
console.log(canBuildS1FromS2(strA4, strB4));
console.log(canBuildS1FromS2(strA5, strB5));
