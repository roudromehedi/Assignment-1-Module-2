function sortNumbers (numbers) {
  return numbers.sort((a, b) => a - b)
}

const sortedArray = sortNumbers([5, 2, 8, 1, 4])
console.log(sortedArray)

/*
Exercise 11:

Write a function named sortNumbers that takes in an array of numbers and returns a new array with the numbers sorted in ascending order using the array sort method.

    Example:

Input:

    sortNumbers([5, 2, 8, 1, 4]);

Output:

    [1, 2, 4, 5, 8] */
