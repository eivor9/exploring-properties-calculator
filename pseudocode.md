# Pseudocode

Reasons to use: 
- brainstorming
- flow-chart, flow of a function
- translate between different languages
- Understanding code when revising it 
- Directions or instructions for another coder

## Practice

Psuedocode here:
- Initialize a new variable to equal 0
- loop through the given array and incrememnt the new variable by each array element
- return the new variable

```
// Given an array of numbers find the sum of all the elemnts

function sum(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}
```