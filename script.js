/* Types of functions */

// Regular named function
function double(param) {
  return param * 2;
}

//function expression
const triple = function (param) {
  return param * 3;
};

//Arrow function
const quadruple = (param) => param * 4;

/* Callback example */

//This is a function that will become our callback
const printName = (nameToPrint) => {
  console.log(nameToPrint);
};

//This is a Higher Order Function that accepts another function as a parameter
const funcWithCallback = (name, callback) => {
  const greeting = `Hello, ${name}`;
  //Callback that came as a parameter is invoked in here
  callback(greeting);
};

//Here we call the Higher Order Function and pass callback function as a second parameter
funcWithCallback("John", printName);

/* JS has several inbuilt HOF that operate on Arrays */

const food = [
  { name: "apple", type: "fruit", price: 2 },
  { name: "pear", type: "fruit", price: 4 },
  { name: "onion", type: "vegetables", price: 2 },
  { name: "cucumber", type: "vegetables", price: 5 },
  { name: "carrot", type: "vegetables", price: 22 },
  { name: "orange", type: "fruit", price: 12 },
];

//To avoid mutations of the original array we make a DEEP copy of it for example like this: */
const foodCopy = JSON.parse(JSON.stringify(food));
//or
const foodCopy2 = structuredClone(food);

//We don't make a copy like this:
const foodCopy3 = [...food];
//because it will create a SHALLOW copy - that means that even though we create a new array it keeps the reference to original objects inside our new array and will mutate the original array in the callback.

// copy now stores exactly the same values as original food array, but
console.log('Is the "foodCopy" the same as the original? ', foodCopy === food); // false <- they take different places in the memory so they are NOT the same.
console.log('And what about "foodCopy2"? ', foodCopy2 === food); // false <- they take different places in the memory so they are NOT the same.

//Now let's use forEach HOF to perform an action on our copied array:

// A callback method first - this should rise the 'price' value of each array element to 150% of original price
const changePrices = (item) => (item.price = item.price * 1.5);

//Now let's use this as a callback:
foodCopy.forEach(changePrices);

console.log("Mutated array: ", foodCopy); // Our new array with changed prices (mutated values)
console.log("Original array: ", food); //original array stays untouched.

/* FILTER - another HOF */

//callback:
const isFruit = (item) => item.type === "fruit";

//FILTER HOF with callback returning the result to the 'fruitOnly' variable:
const fruitOnly = foodCopy2.filter(isFruit);

console.log("Should be fruit only: ", fruitOnly);
