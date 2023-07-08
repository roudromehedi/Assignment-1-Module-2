function filterEvenNumbers (numbers) {
  return numbers.filter(number => number % 2 === 0)
}

const evenNumbersArray = filterEvenNumbers([1, 2, 3, 4, 5])
console.log(evenNumbersArray)
/*

Exercise 9:

Write a function named filterEvenNumbers that takes in an array of numbers and returns a new array with only the even numbers using the array filter method.

    Example:

Input:

    filterEvenNumbers([1, 2, 3, 4, 5]);

Output:

    [2, 4]

*/
