// Goal: Your program must output a solution to a 9x9 sudoku. A sudoku is a Latin Square which has the numbers 1-9 in each row, column, and 3x3 square.
// Input: First 9 lines: A string line with 9 digits corresponding to that line. A 0 is used for an empty space.
// Output: First 9 lines: A string line with 9 digits corresponding to that line. The original numbers should not have changed, and there should be no zeros left.

class Sudoku {
    constructor() {
        this.grid = Array.from(Array(9), () => new Array(9).fill(0));
    }

    readLines() {
        for (let i = 0; i < 9; i++) {
            const line = readline();
            this.grid[i] = line.split('').map(Number);
        }
    }

    solve(row = 0, col = 0) {
        if (row == 9) { // We reached end of grid, solution found
            return true;
        }
    
        if (this.grid[row][col] != 0) { // Skip filled cells
            return this.solve(col == 8 ? row + 1 : row, (col + 1) % 9);
        }
    
        let possibleValues = this.findPossible(row, col);
        for (let value of possibleValues) {
            this.grid[row][col] = value;
            console.error(`Trying value ${value} at row ${row}, col ${col}`);
            if (this.solve(col == 8 ? row + 1 : row, (col + 1) % 9)) {
                return true;
            }
            console.error(`Backtracking from row ${row}, col ${col}`);
            this.grid[row][col] = 0; // Reset cell if no solution found with this value
        }
    
        return false; // No solution found for this cell
    }

    findPossible(i, j) {
        const row = this.grid[i];
        const col = this.grid.map(row => row[j]);

        const square = this.getSquare(i, j);

        const possible = Array.from({length: 9}, (_, n) => n + 1);
        return possible.filter(num => !row.includes(num) && !col.includes(num) && !square.includes(num));
    }

    getSquare(i, j) {
        const row = Math.floor(i / 3) * 3;
        const col = Math.floor(j / 3) * 3;
        return this.grid.slice(row, row + 3).map(row => row.slice(col, col + 3)).flat();
    }
}


const sudoku = new Sudoku();
sudoku.readLines();

console.error('Solving Sudoku...');
if (sudoku.solve()) {
    console.error('Sudoku solved!');
    console.log(sudoku.grid.map(row => row.join('')).join('\n'));
} else {
    console.error('No solution found for the Sudoku.');
}
