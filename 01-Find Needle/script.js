/* 
  You are given arrays.
*/

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
];
var haystack_2 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "nedle",
  "something somebody lost a while ago",
];
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];

function findNeedle(arr) {
  let position = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === "needle") {
      position.push([i]);
      return `Found the needle at position ${position}`;
    }
  }
  if (arr.indexOf("needle") == -1) {
    return "Did not find the needle.";
  }
}

console.log(findNeedle(haystack_2));

function findAnyItem(arr, item) {
  let position = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      position.push([i]);
      return `Found the ${item} at position ${position}`;
    }
  }
  if (arr.indexOf(item) == -1) {
    return "Did not find the " + item + ".";
  }
}

console.log(findAnyItem(haystack_1, "world"));
