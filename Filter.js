/**
 * Filter method creates a new array filled with elements that pass a test provided by a function.
 * Does not execute the function for empty elements.
 * Does not change the original array.
 */

// Get all the websites which are not famous

const famousSites = [
    "Amazon",
    "Myntra",
    "Netflix",
    "Hotstar"
];

const websites = [
    "Amazon",
    "Myntra",
    "Flipkart",
    "Urban",
    "Meesho",
    "Netflix",
    "Hotstar"
];

const microSites = websites.filter(item => famousSites.indexOf(item) === -1 );

console.log(microSites);