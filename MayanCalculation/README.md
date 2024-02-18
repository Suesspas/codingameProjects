# Mayan Calculation

This task involves implementing a calculator that can perform basic arithmetic operations (+, -, *, /) on Mayan numbers. The Mayan numeral system is a vigesimal (base-20) positional system that was used by the Maya civilization in Central America.

## Problem Details

The problem can be broken down into the following steps:

1. Reading the ASCII representation of the Mayan numerals.
2. Reading two Mayan numbers.
3. Reading an operation to perform on the two numbers.
4. Performing the operation and outputting the result in Mayan numerals.

The ASCII representation of the Mayan numerals is given as a grid of characters, where each numeral is represented by a block of L characters wide and H characters tall. The numerals are arranged from 0 to 19 from left to right in the grid.

A Mayan number is represented as a vertical stack of numerals, with the least significant numeral at the bottom. The height of each numeral in the stack is H characters, and the total height of the stack is a multiple of H.

The operation is a single character ('+', '-', '*', '/').

## Solution Summary

The solution to this problem involves the following steps:

- Reading the dimensions and ASCII representation of the Mayan numerals and storing them in an array.
- Reading the two Mayan numbers and converting them to decimal numbers.
- Reading the operation and performing it on the decimal numbers to get the result.
- Converting the result back to a Mayan number and printing it.

The conversion from Mayan to decimal is done by slicing the Mayan number into its numerals, finding the index of each numeral in the numerals array (which corresponds to its decimal value), and adding it to the decimal number after multiplying it by the appropriate power of 20.

The conversion from decimal to Mayan is done by repeatedly dividing the decimal number by 20 and using the remainder to get the corresponding numeral from the numerals array, until the decimal number becomes 0. The resulting Mayan numerals are concatenated in reverse order to form the final Mayan number.