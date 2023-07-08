function sumArray (numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
}

const sum = sumArray([1, 2, 3, 4, 5])
console.log(sum)

/*
Exercise 10:

Write a function named sumArray that takes in an array of numbers and returns the sum of all the numbers using the array reduce method.

    Example:

Input:

    sumArray([1, 2, 3, 4, 5]);

Output:

    15

*/
