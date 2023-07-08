function destructureExample (obj, arr) {
  const { name, age } = obj

  const [firstValue, , thirdValue] = arr

  return { name, age }
}

const obj = { name: 'John', age: 30, city: 'New York' }
const arr = [10, 20, 90, 40]

console.log(destructureExample(obj, arr))

/*
Exercise 1:
 Write a function named destructureExample that takes in an object and an array as parameters.
 The function should use destructuring to extract the values 'name' and 'age' from the object and the values at index 0 and index 2 from the array.
 The function should then return an object with the extracted values as properties with name and age.

Example:
Input:
    const obj = { name: 'John', age: 30, city: 'New York' };
    const arr = [10, 20, 30, 40];

Output:
    { name: 'John', age: 30 } */
