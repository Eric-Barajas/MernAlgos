/* 
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found
*/

const students = [
    {
        id: 1,
        name: "student1",
        isLateToday: false,
        lateCount: 15,
        redBeltStatus: false,
    },
    {
        id: 2,
        name: "student2",
        isLateToday: false,
        lateCount: 1,
        redBeltStatus: false,
    },
    {
        id: 3,
        name: "student3",
        isLateToday: false,
        lateCount: 0,
        redBeltStatus: false,
    },
];

const id1 = 3;
const updateData1 = { redBeltStatus: true, isLateToday: true };
const expected1 = {
    id: 3,
    name: "student3",
    isLateToday: true,
    lateCount: 0,
    redBeltStatus: true,
};

const id2 = 1;
const updateData2 = {
    isLateToday: true,
    lateCount: 16,
    randomKey: "randomValue",
};
const expected2 = {
    id: 1,
    name: "student1",
    isLateToday: true,
    lateCount: 16,
    redBeltStatus: false,
};
/* 
    Explanation: In this implementation
    randomKey was not added because it is not an existing key that can be updated
*/

const id3 = 5;
const updateData3 = {};
const expected3 = null;

/**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} id
   * @param {Object} updatedVals Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */
function findByIdAndUpdate(id, updatedVals, collection) {
    let updated = {};
    let found = false;
    //loop through collection
    for (let i = 0; i < collection.length; i++) {
        //attempting to match `id` to collection[i]'s keys
        if (id === collection[i]["id"]) {
            //loop through object keys
            for (let j = 0; j < Object.keys(updatedVals).length; j++) {
                //attempting to find object keys in collection[i]
                if ((Object.keys(updatedVals)[j]) in collection[i]) {
                    found = true;
                    //update
                    updated = {
                        ...collection[i],
                    }
                    updated[Object.keys(updatedVals)[j]] = Object.values(updatedVals)[j];
                    collection[i] = updated;
                }
            }
        }
    }
    if (found === false) {
        return null;
    }
    //does not change collection data
    return updated;
}

// console.log(findByIdAndUpdate(id1, updateData1, students));
// console.log(findByIdAndUpdate(id2, updateData2, students));
// console.log(findByIdAndUpdate(id3, updateData3, students));
// console.log(students);


// ========================================================

/*
  Given an array of objects, a searchFor string, and searchBy key that exists
  in the object return a new array of only those objects whose value for the
  given key starts with the given search string.
  You can assume the key will exist on the object and the value of that key
  will be a string.
  Bonus: make the search case insensitive.
  Bonus: re-write it with functional programming, using built in methods.
  Bonus: allow the search method to be provided as a parameter, e.g.,
      string methods: includes, startsWith, endsWith.
    - you can assume the searchMethod will be valid.
  This kind of algorithm can be used in react onChange as you type into a
  search bar to live-filter a list.
*/

// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Eddy",
//     lastName: "Lee",
//   },
//   {
//     firstName: "John",
//     lastName: "Fawn",
//   },
//   {
//     firstName: "Edward",
//     lastName: "Kim",
//   },
// ];

// const searchFor1 = "Jo";
// const searchBy1 = "firstName";
// const expected1 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "John",
//     lastName: "Fawn",
//   },
// ];

// const searchFor2 = "ohn";
// const searchBy2 = "firstName";
// const expected2 = [];
// // Explanation: "John" contains "ohn", it does not start with "ohn"

// const searchFor3 = "Do";
// const searchBy3 = "lastName";
// const expected3 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
// ];

// // Bonus
// const searchFor4 = "E";
// const searchBy4 = "lastName";
// const searchMethod4 = "includes";
// const expected4 = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Jane",
//     lastName: "Doe",
//   },
//   {
//     firstName: "Eddy",
//     lastName: "Lee",
//   },
// ];

// /**
//  * Filters the given items based on the search criteria using a startsWith
//  * search method.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<Object>} items The items to be filtered.
//  * @param {string} searchFor The value of the given key to search for.
//  * @param {string} searchBy The key to search by.
//  * @returns {Array<Objects>} The matched items.
//  */
function filterByKey(items, searchFor, searchBy) {
    let results = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i][searchBy].startsWith(searchFor, 0)) {
            results.push(items[i]);
        }
    }
    return results;
}
console.log("1.) ")
console.log(filterByKey(people, searchFor1, searchBy1));
console.log("2.) ")
console.log(filterByKey(people, searchFor2, searchBy2));
console.log("3.) ")
console.log(filterByKey(people, searchFor3, searchBy3));


function filterByKeyBonus(items, searchFor, searchBy, searchMethod) {
    let results = [];
    if (searchMethod === "includes") {
        for (let i = 0; i < items.length; i++) {
            if (items[i][searchBy].includes(searchFor, 0)) {
                results.push(items[i]);
            }
        }
    }
    else {
        for (let i = 0; i < items.length; i++) {
            if (items[i][searchBy].startsWith(searchFor, 0)) {
                results.push(items[i]);
            }
        }
    }
    return results;
}

console.log("Bonus: ")
console.log(filterByKeyBonus(people, searchFor4, searchBy4, searchMethod4));