# Budget Distribution 

Given a list of people and their budgets, and the price of the present they wish to buy, you have to find out how much money each person contributes. 
You have to find the optimal distribution that minimizes the highest contribution.

## Problem Description

- A group of Pilipius wants to buy a gift.
- Each Pilipius has a budget limit.
- The cost of the gift is known.
- The goal is to distribute the cost of the gift among the Pilipius in a way that respects their budget limits and minimizes the highest contribution.

## Solution

- Read the number of participants and the cost of the gift.
- Read the budget of each participant and store them in an array.
- Sort the array in ascending order.
- Initialize a variable `remaining` to the cost of the gift.
- Iterate over the budgets. For each budget:
    - Calculate the average cost per remaining participant (`remaining / remainingParticipants`).
    - If the average cost is greater than the current budget, the participant contributes their entire budget and the remaining cost is reduced by their budget.
    - If the average cost is less than or equal to the current budget, the participant contributes the average cost and the remaining cost is reduced by the average cost.
- If there is any remaining cost after all budgets have been processed, it's impossible to buy the gift. Otherwise, print the contribution of each participant.