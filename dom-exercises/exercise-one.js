// https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
// exercise: if one of 2 variables, or the sum of them = 100, return true and if else false

let isHundred = ((numOne, numTwo) => {
    
    if (numOne === 100 || numTwo === 100 || numOne + numTwo === 100){
        console.log(true)
    }

    else{
        bool = false
        console.log(false)
    }
})

isHundred(85, -15)

// correction
console.log('--------------------------------------------')

// no need for parentheses nor brackets with single line arrow functions

let isHundredd = (a,b) => a === 100 || b === 100 || a + b === 100;
console.log(isHundredd(15,85))