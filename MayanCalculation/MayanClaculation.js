// Read the dimensions of the numerals
var inputs = readline().split(' ');
const L = parseInt(inputs[0]);
const H = parseInt(inputs[1]);

// Read the ASCII representation of the numerals
let numerals = [];
for (let i = 0; i < H; i++) {
    const numeralLine = readline();
    for (let j = 0; j < 20; j++) {
        if (!numerals[j]) numerals[j] = [];
        numerals[j].push(numeralLine.slice(j*L, (j+1)*L));
    }
}

// Function to convert a Mayan number to a decimal number
function mayanToDecimal(lines) {
    let decimal = 0;
    let power = 0;
    for (let i = lines.length - H; i >= 0; i -= H) {
        let numeral = lines.slice(i, i + H);
        let index = numerals.findIndex(n => n.every((line, j) => line === numeral[j]));
        decimal += index * Math.pow(20, power);
        power++;
    }
    return decimal;
}

// Read the first Mayan number
const S1 = parseInt(readline());
let num1Lines = [];
for (let i = 0; i < S1; i++) {
    num1Lines.push(readline());
}
let num1 = mayanToDecimal(num1Lines);

// Read the second Mayan number
const S2 = parseInt(readline());
let num2Lines = [];
for (let i = 0; i < S2; i++) {
    num2Lines.push(readline());
}
let num2 = mayanToDecimal(num2Lines);

// Read the operation +, -, * or /
const operation = readline();

// Perform the operation
let result = eval(num1 + operation + num2);

// Function to convert a decimal number to a Mayan number
function decimalToMayan(decimal) {
    let mayan = [];
    if (decimal === 0) {
        mayan = numerals[0];
    } else {
        while (decimal > 0) {
            let remainder = decimal % 20;
            decimal = Math.floor(decimal / 20);
            mayan = numerals[remainder].concat(mayan);
        }
    }
    return mayan;
}

// Convert the result to Mayan and print it
let resultMayan = decimalToMayan(result);
for (let line of resultMayan) {
    console.log(line);
}