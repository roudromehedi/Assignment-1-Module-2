const getLargestNumber = (num1, num2) => {
  return num1 > num2 || num2 < num1
    ? `${num1} is larger`
    : num1 < num2 || num2 > num1
      ? `${num2} is larger`
      : 'Both values are equal'
}
console.log(getLargestNumber(10, 5))

/* Exercise 6:

Write a function named getLargestNumber that takes in two numbers as parameters.
The function should return the larger number using short-circuiting and logical operators (&&, ||, ??).

Example:

    Input:

        getLargestNumber(10, 5);

Output:

    10 */
