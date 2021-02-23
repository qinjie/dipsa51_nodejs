// // Create an array
// let arr = ["a", "b", "c"];

// // #### Iterate through items
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// arr.forEach((item) => {
//   console.log(item);
// });

// // Add and remove item to/from the END of an array
// arr.push("x");
// console.log(arr.pop());

// // Insert or delete items from the front of an array
// arr.unshift("y");
// console.log(arr.shift());

// // Sorting with own sorting function
// let names = ["CSS", "HTML", "Java", "SQL", "CSS3", "HTML5"];
// names.sort();
// console.log(names);
// names.sort(function (a, b) {
//   var a1 = a.toLowerCase(),
//     b1 = b.toLowerCase();
//   if (a1 < b1) return 1; // 1 = need to swap
//   if (a1 > b1) return -1; // -1 = no change
//   return 0;
// });
// console.log(names);

// // #### splice(position,num,[item1,item2,...]) ####
// // Insert Delete Update Items
// let arr = ['a','b','c','d','e'];

// // Delete 2 items from index 1
// arr.splice(1,2);
// console.log(arr);

// // Insert 'x' at index 2
// arr.splice(2,0,'x')
// console.log(arr);

// // Update item at index 3 to 'y'
// arr.splice(3,1,'y');
// console.log(arr);

// FindIndex vs Find vs Filter
// FindIndex: returns index of first matching element
// Find: returns first matching element
// Filter: returns all matching elements

let arr1 = [
  { fruit: "apple", count: 2 },
  { fruit: "banana", count: 5 },
  { fruit: "cherry", count: 6 },
];
let idx = arr1.findIndex((item) => {
  return item.count > 3;
});
console.log(idx);
let result = arr1.find((item) => {
  return item.count > 3;
});
console.log(result);
result = arr1.filter((item) => {
  return item.count > 3;
});
console.log(result);
