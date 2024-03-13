// Task 1: Function Argument Expansion
function sum(a, b, c) {
    return a + b + c;
  }
  
  const numbers = [1, 2, 3];
  const result = sum(...numbers);
  console.log("Task 1 Result:", result);
  
  // Task 2: Merging Arrays
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const mergedArray = [...array1, ...array2];
  console.log("Task 2 Result:", mergedArray);
  
  // Task 3: Array Element Insertion
  const colors = ['red', 'green', 'blue'];
  const extendedColors = ['yellow', ...colors, 'purple'];
  console.log("Task 3 Result:", extendedColors);
  
  // Task 4: Cloning and Modifying an Object
  const person = { name: 'John', age: 30 };
  const newPerson = { ...person, name: 'Jane', gender: 'female' };
  console.log("Task 4 Original Person:", person);
  console.log("Task 4 New Person:", newPerson);
  
  // Task 5: Combining Objects
  const object1 = { a: 1, b: 2 };
  const object2 = { b: 3, c: 4 };
  const combinedObject = { ...object1, ...object2 };
  console.log("Task 5 Combined Object:", combinedObject);
  