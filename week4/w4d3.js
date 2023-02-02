/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} s An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */
function rehash(s) {
    let dict = {};
    let i = 0;

    // iterate through s
    while (i < s.length) {
        let number = "";
        // index j is used to track numbers following each letter
        let j = i + 1;
        // while the char at index j is an integer, keep adding it to number
        while (Number.isSafeInteger(parseInt(s[j]))) {
            number += s[j];
            j++;
        }
        number = parseInt(number);
        // add the value of number to the dictionary (letter as  key) - if there's no value already, it adds it to 0
        dict[s[i]] = (dict[s[i]] || 0) + number;
        // set index i to where j at to move to the next letter
        i = j;
    }
    let answer = "";
    // convert dictionary back to a string
    for (key in dict) {
        answer += key;
        answer += dict[key];
    }
    return answer;
}

// SECOND WAY
// function rehash(str) {
//     let res = "";
//     let dict = {};
//     let oneNum = "";
//     let lastLetter = "";

//     //stuff keyvals into dictionary
//     for (let i = 0; i < str.length; i++) {
//         //if not a number, add letter to dictionary
//         if (isNaN(str[i])) {
//             oneNum = "";
//             lastLetter = str[i];
//             //characters to add to dictionary
//             if (dict[str[i]] === undefined) {
//                 dict[str[i]] = 0;
//             }
//             //set lastLetter
//         } else {
//             //add number to last tracked letter
//             oneNum += str[i];
//             if (isNaN(str[i + 1])) {
//                 oneNum = parseInt(oneNum);
//                 dict[lastLetter] += oneNum;
//             }
//         }
//     }

//     //convert dictionary to string
//     //this sorts just the keys of the dictionary
//     //by converting to an array
//     dict = Object.keys(dict).sort().reduce(
//         //reduce takes an (accumulator, valueToAccumulate)  
//         //obj begins empty and then gets appended with keyvals
//         (obj, key) => {
//             // console.log(key);
//             // console.log(obj);
//             obj[key] = dict[key];
//             return obj;
//         },
//         {} //initial value of obj or accumulator
//     );

//     //to print
//     for (i in dict) {
//         res += i;
//         res += dict[i]
//     }

//     return res;
// }

// console.log(rehash(str1))

console.log(rehash(str1));