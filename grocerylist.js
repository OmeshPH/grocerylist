// Create an array with 4 grocery items
const groceries = ["milk", "bread", "eggs", "cheese"];

// Remove the last item (cheese) using the pop() method
groceries.pop();
console.log("Groceries after removing the last item:", groceries); // Output: ["milk", "bread", "eggs"]

// Add a new item (butter) to the end using the push() method
groceries.push("butter");
console.log("Groceries after adding butter:", groceries); // Output: ["milk", "bread", "eggs", "butter"]

// Remove the first item (milk) using the shift() method
groceries.shift();
console.log("Groceries after removing the first item:", groceries); // Output: ["bread", "eggs", "butter"]

// Add a new item (apples) to the beginning using the unshift() method
groceries.unshift("apples");
console.log("Groceries after adding apples:", groceries); // Output: ["apples", "bread", "eggs", "butter"]

// Remove the 2nd and 3rd items (bread and eggs) and replace them with 1 item (juice) using the splice() method
// splice(index, number of elements to remove, element to insert)
groceries.splice(1, 2, "juice"); 
console.log("Groceries after replacing items:", groceries); // Output: ["apples", "juice", "butter"]