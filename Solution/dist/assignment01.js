"use strict";
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
const Task1output1 = formatString("Hello");
const Task1output2 = formatString("Hello", true);
const Task1output3 = formatString("Hello", false);
console.log(Task1output1);
console.log(Task1output2);
console.log(Task1output3);
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
const items = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
const Task2output1 = console.log(filterByRating(items));
//
function concatenateArrays(...arrays) {
    return arrays.flat();
}
const Task3output1 = concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
const Task3output2 = concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]
console.log(Task3output1);
console.log(Task3output2);
