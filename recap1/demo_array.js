let fruits = [
  { id: 1, name: "apple", count: 2 },
  { id: 2, name: "banana", count: 5 },
  { id: 3, name: "cherry", count: 7 },
];

// // Remove first item
// fruits.shift();

// // Remove last item
// fruits.pop();

// // Remove 2 items from index 1
// fruits.splice(1,2);

// Remove an item at index 1
let fruit = { id: 4, name: "durian", count: 9 };
fruits.splice(1, 1, fruit);

// PUT -> Update
let id = 1;

let found = fruits.findIndex((item) => {
  return item.id == id;
});
console.log(found);

// Delete
fruits.splice(found, 1);


// DELETE /fruits/:name


// console.log(fruits);
