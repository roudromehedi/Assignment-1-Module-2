function sumNumbers (...numbers) {
  return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sumNumbers(1, 2, 3, 4, 5))

/*
Exercise 2:

Write a function named sumNumbers that takes in multiple numbers as arguments using the rest operator.
The function should return the sum of all the numbers.
    Example:

Input:
    sumNumbers(1, 2, 3, 4, 5);

Output:
    15 */
