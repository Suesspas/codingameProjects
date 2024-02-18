const N = parseInt(readline());
const C = parseInt(readline());

const budgets = [];

for (let i = 0; i < N; i++) {
    budgets.push(parseInt(readline()));
}

budgets.sort((a, b) => a - b);

let remaining = C;
let contributions = [];

for (let i = 0; i < N; i++) {
    let remainingParticipants = N - i;
    let average = Math.floor(remaining / remainingParticipants);

    if (average > budgets[i]) {
        contributions.push(budgets[i]);
        remaining -= budgets[i];
    } else {
        contributions.push(average);
        remaining -= average;
    }
}

if (remaining > 0) {
    console.log('IMPOSSIBLE');
} else {
    contributions.forEach(contribution => console.log(contribution));
}