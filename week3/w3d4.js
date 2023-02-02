/* 
My react dev friend had to do this while building a feature at work.
*/

const object1 = {
    closedCreditMemos: [],
    closedDeliveryOrders: [],
    closedPickupOrders: [
        { id: 112, type: "pickup" },
        { id: 117, type: "pickup" },
    ],
    openCreditMemos: [],
    openDeliveryOrders: [
        {
            id: 123,
            type: "delivery",
            gateCode: "#2552",
        },
        {
            id: 153,
            type: "delivery",
            instructions: "Place in secure delivery box.",
        },
    ],
    openPickupOrders: [
        {
            id: 123,
            type: "pickup",
        },
    ],
    returnPickupOrders: [],
};

const expected1 = [
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
];

/**
 * Takes an object containing arrays of objects and places all the nested
 * objects into a new one-dim array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} o Containing arrays of objects.
 * @returns {Object[]} An array of objects.
 */
function flattenObjectOfArrays(object) {
    // variable declaration: the new array for the key-value pairs to go into
    let newArray = [];
    // iterate through all the keys in the object
    for (key in object) {
        // if the length of the array at the key we're on is 0, move past it
        if (object[key].length === 0) {
            continue;
        }

        // else, if there's an array at the key we're on, iterate through it's length
        for (let arrayIndex = 0; arrayIndex < object[key].length; arrayIndex++) {
            const { id, type } = object[key][arrayIndex]
            // create empty object to copy fields to
            const objectCopy = {
                id: id,
                type: type
            };
            // copy id and type fields since that is all we want
            // objectCopy.id = object[key][arrayIndex].id;
            // objectCopy.type = object[key][arrayIndex].type;
            // and push the copy into our new array we created
            newArray.push(objectCopy);
        }

    }
    return newArray;
}

console.log(flattenObjectOfArrays(object1));