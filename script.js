/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

let tempArr = [];

let otherData = [
  { id: 4, name: "King", age: "17", marks: 95 },
  { id: 5, name: "Kaido", age: "21", marks: 99 },
  { id: 6, name: "Queen", age: "16", marks: 90 },
];

function PrintStudentsbyMap() {
  //Write your code here , just console.log
  arr.map(helperAbove50);
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(helperAbove50);
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", marks: 45 });
  arr.forEach(helper);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr.forEach(helperRemoveBelow50);
  arr.forEach(helper);
}

function concatenateArray() {
  //Write your code here, just console.log
  helperConcatenateArrays();
  arr.forEach(helper);
}

//helper functions

//for logging the students whose marks are above 50 by map method or forEach method
function helperAbove50(item) {
  if (item.marks > 50) console.log(item);
}

//for logging the arrray
function helper(item) {
  console.log(item);
}

//for removing the students whose marks are less than 50 and putting everything in parent array

function helperRemoveBelow50(item) {
  if (item.marks > 50) {
    tempArr.push(item);
  }
  arr = Array.from(tempArr);
}

//here we are using the concat function inside array.from method because concat return new array
function helperConcatenateArrays() {
  arr = Array.from(arr.concat(otherData));
  arr.push();
}
