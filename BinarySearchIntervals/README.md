# Binary Search in a 2D Array

The goal of this puzzle is to guess the coordinate of a bomb (line and column of a 2 dimensional array). You will have to make a guess at each step of the puzzle and adjust it from given feedbacks. Of course, you have a limited number of guess.
The program uses a binary search algorithm to search for the solution in a 2D array.


## Instructions

Game Input

The program must first read the initialization data from standard input. Then, within an infinite loop, read the device data from the standard input and provide to the standard output the next movement instruction.
Initialization input
Line 1 : 2 integers W H. The (W, H) couple represents the width and height of the building as a number of windows.

Line 2 : 1 integer N, which represents the number of jumps you can make before the bombs go off.

Line 3 : 2 integers X0 Y0, representing your starting position.

Input for one game turn
The direction indicating where the bomb is.
Output for one game turn
A single line with 2 integers X Y separated by a space character. (X, Y) represents the location of the next window you should jump to. X represents the index along the horizontal axis, Y represents the index along the vertical axis. (0,0) is located in the top-left corner of the building.
Constraints
1 ≤ W ≤ 10000
1 ≤ H ≤ 10000
2 ≤ N ≤ 100
0 ≤ X, X0 < W
0 ≤ Y, Y0 < H
Response time per turn ≤ 150ms
Response time per turn ≤ 150ms
Example
Initialization input
10 10     Building has 100 windows (10x10)
6         You have 6 jumps to find the bombs
2 5       You start at position (2,5)

- No output expected

Input for turn 1
UR
Hostages are in the upward-right direction

- Output for turn 1: 5 4

You jump to window (5,4)
Input for turn 2
R
Hostages are located to your right

- Output for turn 2 7 4

You jump to window (7,4)

You found the hostages. You can defuse the bombs in time. You win!