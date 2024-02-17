# Sudoku Solver

This is a program that solves a 9x9 Sudoku puzzle. A Sudoku puzzle is a Latin Square that has the numbers 1-9 in each row, column, and 3x3 square.

## Input

The input consists of 9 lines, each containing a string of 9 digits. Each digit represents a number in the Sudoku puzzle. A `0` is used to represent an empty space.

## Output

The output consists of 9 lines, each containing a string of 9 digits. The output represents the solved Sudoku puzzle. The original numbers should not have changed, and there should be no zeros left.

## Usage

To use the Sudoku Solver, follow these steps:

1. Create an instance of the `Sudoku` class.
2. Call the `readLines` method to read the input Sudoku puzzle.
3. Call the `solve` method to solve the Sudoku puzzle.
4. If a solution is found, the solved puzzle will be printed to the console.
