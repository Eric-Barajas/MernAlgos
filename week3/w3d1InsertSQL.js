/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */

/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insert(tableName, columnValuePairs) {
    // create variables to store column names and values
    let cols = "";
    let vals = "";
    // iterate through keys of columnValuePairs and assign keys to cols
    Object.keys(columnValuePairs).forEach(item => {
        cols = cols.concat(item, ", ");
    })
    // iterate through values of columnValuePairs and concatenate values to vals
    Object.values(columnValuePairs).forEach(item => {
        //if value is bool or number, don't wrap in quotes
        typeof item === "boolean" || typeof item === "number"
            ? vals = vals.concat(`${item}`, ", ")
            : vals = vals.concat(`\'${item}\'`, ", ");
    })
    // remove the trailing ', ' from cols and vals
    cols = cols.slice(0, cols.length - 2);
    vals = vals.slice(0, vals.length - 2);
    // return SQL insert statement with desired values
    return `INSERT INTO ${tableName} (${cols}) VALUES (${vals});`;
}

console.log(insert(table, insertData2));

// function insert(tableName, columnValuePairs) {
//     // make ouput variable = "INSERT INTO " + tableName + "("; 
//     let output = "INSERT INTO " + tableName + "(";
//     // make variable to keep track of keys. = []
//     let keys = []
//     // make variable to keep track of values. = []
//     let values = []
//     // want to loop through columnValuePairs
//     for (const key in columnValuePairs) {
//         console.log(`${key}: ${columnValuePairs[key]}`);
//         // push key into keys variable
//         keys.push(key);
//         // also push values into values variable
//         values.push(columnValuePairs[key]);
//     }
//     // another loop to loop through keys variable
//     for (let i = 0; i < keys.length; i++) {
//         // output += keys[i] + ","
//         output += keys[i] + ",";
//     }
//     // after for loop through keys is finished. add to output += ") VALUES ("
//     output += ") VALUES (";
//     // another loop to loop through values variable
//     // output += values[i] + ","
//     for (let val of values) {
//         output += val + ",";
//     }
//     // after loop we add finishing touches to output += ");"
//     output += ");";
//     return output;
// }

// console.log(insert(table, insertData2));