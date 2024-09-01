// https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
// add "new" to an existing string only if it doesn't already have "string" written

const newTxt = 'New!' //"new" isn't allowed as var name

const newStr = (str) => {
    if (str.slice(0,4) !== 'New!'){
        console.log(newTxt.concat(' ', str))
    }
    else{
        console.log(str)
    }
}

newStr('Woaw ("new" not written)')
console.log('-')
newStr ('New! Woaw ("new" written)')